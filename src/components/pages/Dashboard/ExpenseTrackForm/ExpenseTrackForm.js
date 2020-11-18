import React, { useContext, useState } from "react";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./ExpenseTrackForm.css";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../../../../App";
import DateFnsUtils from "@date-io/date-fns";
import Sidebar from "../Sidebar/Sidebar";

const ExpenseTrackForm = () => {
    const [loggedInUser] = useContext(AuthContext);

    const [name, setName] = useState({
        name: "",
    });

    const [email, setEmail] = useState({
        email: "",
    });

    const [category, setCategory] = useState({
        category: "",
    });

    const [description, setDescription] = useState({
        description: "",
    });

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
    });

    const [expense, setExpense] = useState({
        expense: "",
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleName = (e) => {
        const newName = { ...name };
        newName.name = e.target.value;
        setName(newName);
    };

    const handleEmail = (e) => {
        const newEmail = { ...email };
        newEmail.email = e.target.value;
        setEmail(newEmail);
    };

    const handleCategory = (e) => {
        const newCategory = { ...category };
        newCategory.category = e.target.value;
        setCategory(newCategory);
    };

    const handleDescription = (e) => {
        const newDescription = { ...description };
        newDescription.description = e.target.value;
        setDescription(newDescription);
    };

    const handleExpense = (e) => {
        const newExpense = { ...expense };
        newExpense.expense = e.target.value;
        setExpense(newExpense);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            ...name,
            ...email,
            ...category,
            ...description,
            ...selectedDate,
            ...expense,
        };

        fetch("https://cryptic-harbor-99927.herokuapp.com/addExpense", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result === true) {
                    alert("Your daily expense added successfully");
                }
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-8 col-md-10 col-lg-10 p-4 mx-auto my-auto">
                <div className="d-flex justify-content-between">
                    <h5 className="text-success text-center text-uppercase">Expense Form</h5>
                    <h4>{loggedInUser.name}</h4>
                </div>
                <div
                    className="mt-4"
                    style={{
                        backgroundColor: "#F4FDFB",
                        height: "100vh",
                        border: "2px solid lightgray",
                        borderRadius: "10px",
                    }}
                >
                    <form onSubmit={handleSubmit} className="p-5">
                        <h5 className="text-danger">* Please fill out all the input fields</h5>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={handleName}
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={handleEmail}
                                type="email"
                                name="email"
                                defaultValue={loggedInUser.email}
                                className="form-control"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                                onChange={handleCategory}
                                type="text"
                                name="category"
                                className="form-control"
                                placeholder="Category"
                                required
                            />
                        </div>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Check In Date"
                                    value={selectedDate.checkIn}
                                    onChange={handleCheckInDate}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                onChange={handleDescription}
                                type="text"
                                name="description"
                                className="form-control"
                                cols="30"
                                rows="10"
                                placeholder="Description"
                                required
                            ></input>
                        </div>
                        <div className="row">
                            <div className="form-group ml-3">
                                <label htmlFor="expense">Expense</label>
                                <input
                                    onChange={handleExpense}
                                    type="text"
                                    name="expense"
                                    className="form-control"
                                    placeholder="expense"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ExpenseTrackForm;
