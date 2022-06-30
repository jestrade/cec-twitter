// 1. react dev tools
// 2. arrow functions
// 3. adjacents elements error
// 4. fragment <>
// 5. siempre nombrar componentes con mayúscula inicial

export const Title = (props) => {
  const { title } = props
  return !!title && (<h1>{title}</h1>)
};

const Content = () => <section>
  <p>Welcome!</p>
  <form><button type="button">send</button></form>
</section>;

const Footer = () => <footer data-testid="footer">All rights reserved</footer>;

const App = () => {
  return (
    <>
      <Title title="Twitter" />
      <Content />
      <Footer />
    </>
  );
}

export default App;
