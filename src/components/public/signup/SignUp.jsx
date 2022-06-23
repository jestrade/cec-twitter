import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [message, setMessage] = useState("");

    const handleClik = () => {
        setMessage("");
        if (username !== "" && name !== "" && email !== "" && password !== "" && passwordConfirmation !== "") {
            if (password === passwordConfirmation) {
                const user = {
                    username: username,
                    name: name,
                    email: email,
                    password: password
                };
                // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
                const url = "https://twitter-api-fed-2021.herokuapp.com/api/users";
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response =>
                        response.json()
                    )
                    .then(json => {
                        setMessage("user created");
                    })
                    .catch(error => {
                        setMessage("error while creating the user");
                    });
            } else {
                setMessage("passwords don't match");
            }
        } else {
            setMessage("missing data");
        }
    }

    return <main className="main">
        <section className="container">
            <p><Link to="/"><Logo /></Link></p>
            <p className="subtitle">My Twitter</p>
            <h1 className="title">Create your account</h1>
            <form className="form">
                <p className="paragraphSmall"><label className="label">Name</label><input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p className="paragraphSmall"><label className="label">Username</label><input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
                <p className="paragraphSmall"><label className="label">Email</label><input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <p className="paragraphSmall"><label className="label">Password</label><input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p className="paragraphLarge"><label className="label">Password Confirmation</label><input type="password"
                    className="input" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} /></p>
                <p className="paragraphLarge"><button type="button" className="button" onClick={handleClik}>Sign Up</button></p>
                {!!message && <p>{message}</p>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </section>
    </main>
};

export default SignUp;