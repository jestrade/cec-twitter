// 1. react dev tools
// 2. arrow functions
// 3. adjacents elements error
// 4. fragment <>
// 5. siempre nombrar componentes con mayúscula inicial

const Title = () => <h1>twitter</h1>;
const Content = () => <p>welcome!</p>;
const Footer = () => <footer>all rights reserved</footer>;

const App = () => {
  return (
    <>
      <Title />
      <Content />
      <Footer />
    </>
  );
}

export default App;
