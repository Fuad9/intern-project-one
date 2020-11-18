import { createContext, useState } from "react";
import "./App.css";
import Routes from "./components/routes/Routes";

export const AuthContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState(false);
    return (
        <div className="App">
            <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Routes />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
