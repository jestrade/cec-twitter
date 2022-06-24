const Header = (props) => {
    const { user, logout } = props;

    return <header className="header">
        <p>welcome {user?.name}</p>
        <p><button type="button" onClick={logout}>log out</button></p>
    </header>
};

export default Header;