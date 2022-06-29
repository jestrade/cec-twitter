import Header from "./../header/Header";
import Content from "./../content/Content";
import Footer from "./../footer/Footer";

import "./style.css";

const Home = (props) => {
    const { user, logout } = props;

    return <section>
        <Header user={user} logout={logout} />
        <div className="feed">
            <Menu />
            <Content user={user} />
            <Aside />
        </div>
        <Footer />
    </section>
};

const Menu = () =>
    <nav><h2>menu</h2></nav>


const Aside = () => <aside><h2>Recent</h2></aside>

export default Home;