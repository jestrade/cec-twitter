import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";

const Login = () => {

    return <main className="main">
        <section className="container">
            <p><Link to="/"><Logo /></Link></p>
            <p className="subtitle">My Twitter</p>
            <h1 className="title">Login to your account</h1>
            <form className="form">
                <p className="paragraphSmall"><label className="label">Email or Username</label><input type="text"
                    className="input" />
                </p>
                <p className="paragraphLarge"><label className="label">Password</label><input type="password" className="input" />
                </p>
                <p className="paragraphLarge"><Link to="/passwordRecovery">Forgot password?</Link></p>
                <p className="paragraphLarge"><button type="button" className="button">Login now</button></p>
            </form>
            <p>Dont have an account? <Link to="/signup">Join free today</Link></p>
        </section>
    </main>
};

export default Login;