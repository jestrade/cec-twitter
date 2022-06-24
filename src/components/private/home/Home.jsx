import Header from "./../header/Header";
import Content from "./../content/Content";
import Footer from "./../footer/Footer";

const Home = (props) => {
    const { user, logout } = props;

    return <section>
        <h2>Home</h2>
        <Header user={user} logout={logout} />
        <Content user={user} />
        <Footer />
    </section>
};

export default Home;