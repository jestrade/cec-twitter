import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";

const Index = () => {

    return <main>
        <div></div>
        <div>
            <p><Logo /></p>
            <h1>Welcome to Twitter</h1>
            <p><Link to="/login">Login now</Link></p>
            <p>Dont have an account?
                <Link to="/login">Join free today</Link>
                <Link to="signup.html">Sign
                    Up</Link></p>
        </div>
    </main>
};

export default Index;