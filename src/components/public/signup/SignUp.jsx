import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";

const SignUp = () => {

    return <main className="main">
        <section className="container">
            <p><Link to="/"><Logo /></Link></p>
            <p className="subtitle">My Twitter</p>
            <h1 className="title">Create your account</h1>
            <form className="form">
                <p className="paragraphSmall"><label className="label">Name</label><input type="text" className="input" /></p>
                <p className="paragraphSmall"><label className="label">Username</label><input type="text" className="input" /></p>
                <p className="paragraphSmall"><label className="label">Email</label><input type="text" className="input" /></p>
                <p className="paragraphSmall"><label className="label">Password</label><input type="password" className="input" />
                </p>
                <p className="paragraphLarge"><label className="label">Password Confirmation</label><input type="password"
                    className="input" /></p>
                <p className="paragraphLarge"><button type="button" className="button">Sign Up</button></p>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </section>
    </main>
};

export default SignUp;