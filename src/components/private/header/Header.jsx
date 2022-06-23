import style from "./style.css";

const Header = ({ name, username, logOut }) => {

    return <header className="header">
        <p>welcome {username} - {name}</p>
        <p><button type="button" onClick={logOut}>log out</button></p>
    </header>
};

export default Header;