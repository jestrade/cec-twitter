
const Header = ({ name, username, logOut }) => {

    return <header>
        <p>welcome {username} - {name}</p>
        <p><button type="button" onClick={logOut}>log out</button></p>
    </header>
};

export default Header;