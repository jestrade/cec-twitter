import { useState } from "react";
import Header from "./../header/Header";
import Content from "./../content/Content";
import Footer from "./../footer/Footer";

const Main = () => {
    const [name, setName] = useState("jesus");
    const [username, setUserName] = useState("jestrade");

    const logIn = () => {

        setName("jesus");
        setUserName("jestrade");
    }

    const logOut = () => {

        setName("");
        setUserName("");
    }

    return <>
        {
            name === "" ?
                <p><button type="button" onClick={logIn}>Log in</button></p>
                :
                <><Header username={username} name={name} logOut={logOut} />
                    <Content />
                    <Footer /></>}
    </>
};

export default Main;