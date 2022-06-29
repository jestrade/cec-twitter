import { Link } from "react-router-dom";

import Logo from "./../../common/logo/Logo";
import "./style.css";
import "./../../main/style.css";

const Index = () => {

    return <main className="home">
        <div className="column leftColumn">
            <Logo size="big" />
        </div>
        <div className="column rightColumn">
            <div>
                <p><Logo /></p>
                <h1>Welcome to Twitter</h1>
                <p className="paragraphLarge"><Link to="/login" className="button buttonSecondary">Login now</Link></p>
                <p className="paragraphSmall">Dont have an account?
                    <Link to="/login">Join free today</Link>
                    <Link to="/signup" className="button buttonSecondary">Sign
                        Up</Link></p>
            </div>
        </div>
    </main>
};

export default Index;