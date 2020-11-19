import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { AuthContext } from "../../../../App";
import ExpenseTrackListTable from "../../ExpenseTrackListTable/ExpenseTrackListTable";
import Sidebar from "../Sidebar/Sidebar";
import Loading from "../../../utilities/Loading";

const ExpenseTrackList = () => {
    const [allExpenses, setAllExpenses] = useState([]);
    const [loggedInUser] = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await Axios.get("https://cryptic-harbor-99927.herokuapp.com/showAllExpenses");
                setAllExpenses(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, [setAllExpenses]);

    return (
        <>
            <section className="container-fluid row">
                <Sidebar />
                <div className="ml-auto col-8 col-md-10 col-lg-10">
                    <div className="d-flex justify-content-between mt-4">
                        <h5 className="text-brand">Expense Track List</h5>
                        <h4>{loggedInUser.name}</h4>
                    </div>
                    <div
                        className="mt-5"
                        style={{
                            backgroundColor: "#F4FDFB",
                            height: "100vh",
                            border: "2px solid lightgray",
                            borderRadius: "10px",
                        }}
                    >
                        {loading ? (
                            <Loading />
                        ) : (
                            <table className="table table-borderless">
                                <thead style={{ backgroundColor: "lightgray" }}>
                                    <tr>
                                        <th className="text-secondary" style={{ width: "10%" }} scope="col">
                                            Name
                                        </th>
                                        <th className="text-secondary" scope="col">
                                            Categories
                                        </th>
                                        <th className="text-secondary" scope="col">
                                            Date
                                        </th>
                                        <th className="text-secondary" scope="col">
                                            Description
                                        </th>
                                        <th className="text-secondary" style={{ width: "8.3em" }} scope="col">
                                            Expense
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allExpenses.map((expense) => (
                                        <ExpenseTrackListTable expense={expense} key={Math.random()} />
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExpenseTrackList;
