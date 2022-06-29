import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import style from "./style.css";

import Home from "./../private/home/Home";
import Index from "./../public/index/Index";
import Login from "./../public/login/Login";
import SignUp from "./../public/signup/SignUp";
import PasswordRecovery from "./../public/passwordRecovery/PasswordRecovery";
import { useState } from "react";

const Main = () => {
    const userLocalStorage = localStorage.getItem("user");
    const userJson = JSON.parse(userLocalStorage);
    const initialState = !!userJson ? userJson : {
        username: "",
        name: "",
        token: ""
    };

    const [isAuth, setIsAuth] = useState(!!userJson);
    const [user, setUser] = useState(initialState);

    const auth = (user) => {
        setIsAuth(true);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location = "/";
    };

    const logout = (user) => {
        setIsAuth(false);
        setUser({
            username: "",
            name: "",
            token: ""
        });
        localStorage.removeItem("user");
        window.location = "/";
    };

    return <>
        <Router>
            <Routes>
                {
                    isAuth ?
                        <Route path="/" element={<Home user={user} logout={logout} />} />
                        :
                        <>
                            <Route path="/" element={<Index />} />
                            <Route path="/login" element={<Login auth={auth} />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
                        </>
                }
            </Routes>
        </Router>
    </>
};

export default Main;