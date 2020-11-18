import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import CustomCategoryForm from "../pages/Dashboard/CustomCategoryForm/CustomCategoryForm";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExpenseTrackForm from "../pages/Dashboard/ExpenseTrackForm/ExpenseTrackForm";
import ExpenseTrackList from "../pages/Dashboard/ExpenseTrackList/ExpenseTrackList";
import Home from "../pages/Home/Home";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    {/* <Route path="/dashboard" component={Dashboard} /> */}
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/addExpense">
                        <ExpenseTrackForm />
                    </PrivateRoute>
                    <PrivateRoute path="/addCategory">
                        <CustomCategoryForm />
                    </PrivateRoute>
                    <PrivateRoute path="/showExpenseList">
                        <ExpenseTrackList />
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    );
};

export default Routes;
