import { useState } from "react";
import Header from "./../header/Header";
import Content from "./../content/Content";
import Footer from "./../footer/Footer";
import style from "./style.css"

const Main = () => {
    const [name, setName] = useState("jesus");
    const [username, setUserName] = useState("jestrade");

    const logOut = () => {
        setName("");
        setUserName("");
    }

    return <>
        {name !== "" && username !== "" && <Header username={username} name={name} logOut={logOut} />}
        <Content />
        <Footer />
    </>
};

export default Main;