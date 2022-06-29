import { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";

const Login = (props) => {
    const { auth } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleClik = () => {
        setMessage("");
        if (username !== "" && password !== "") {
            const user = {
                username,
                password
            };
            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            const url = "https://api-twitter-cec-2022.herokuapp.com/api/users/login";
            fetch(url, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(response =>
                    response.json()
                )
                .then(json => {
                    if (!!json?.data?.token) {
                        auth(json.data);
                    }
                })
                .catch(error => {
                    setMessage("error while login");
                });
        } else {
            setMessage("missing data");
        }
    }

    return <main className="main">
        <section className="container">
            <p><Link to="/"><Logo /></Link></p>
            <p className="subtitle">My Twitter</p>
            <h1 className="title">Login to your account</h1>
            <form className="form">
                <p className="paragraphSmall"><label className="label">Username</label><input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
                <p className="paragraphSmall"><label className="label">Password</label><input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
                <p className="paragraphLarge"><Link to="/passwordRecovery">Forgot password?</Link></p>
                <p className="paragraphLarge"><button type="button" className="button buttonPrimary" onClick={handleClik}>Login now</button></p>
                {!!message && <p>{message}</p>}
            </form>
            <p>Dont have an account? <Link to="/signup">Join free today</Link></p>
        </section>
    </main>
};

export default Login;