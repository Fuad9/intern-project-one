import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Sidebar.css";
import { AuthContext } from "../../../../App";

const Sidebar = () => {
    const [loggedInUser] = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);

    //   useEffect(() => {
    //     fetch("https://gentle-sands-61587.herokuapp.com/isAdmin", {
    //       method: "POST",
    //       headers: { "content-type": "application/json" },
    //       body: JSON.stringify({ email: loggedInUser.email }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setIsAdmin(data));
    //   }, [loggedInUser.email]);

    return (
        <div
            className="sidebar d-flex flex-column justify-content-between col-3 col-sm-3 col-md-2 px-4"
            style={{ height: "100vh" }}
        >
            <ul className="list-unstyled">
                <li>
                    <NavLink to="/home">
                        <h3>Home</h3>
                    </NavLink>
                </li>
                {loggedInUser && (
                    <div className="mt-5">
                        <li>
                            <NavLink to="/addExpense" activeStyle={{ color: "green" }}>
                                <span>ExpenseTrackForm</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/addCategory" activeStyle={{ color: "green" }}>
                                <span>CustomCategoryForm</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/showExpenseList" activeStyle={{ color: "green" }}>
                                <span>ExpenseTrackList</span>
                            </NavLink>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
