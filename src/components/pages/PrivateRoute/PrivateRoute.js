import React, { useContext } from "react";
import jwtDecode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(AuthContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            return false;
        }
        const decodedToken = jwtDecode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
    };

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
