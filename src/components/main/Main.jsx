import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import style from "./style.css"

import Home from "./../private/home/Home";
import Index from "./../public/index/Index";
import Login from "./../public/login/Login";
import SignUp from "./../public/signup/SignUp";
import PasswordRecovery from "./../public/passwordRecovery/PasswordRecovery";
import { useState } from "react";

const Main = () => {
    const [isAuth, setIsAuth] = useState(false);

    return <>
        <Router>
            <Routes>
                {
                    isAuth ?
                        <Route path="/" element={<Home />} />
                        :
                        <>
                            <Route path="/" element={<Index />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
                        </>
                }
            </Routes>
        </Router>
    </>
};

export default Main;