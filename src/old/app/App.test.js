import { render, screen } from '@testing-library/react';
import App, { Title } from './App';

test('validate elements by role to be in the document', () => {
  render(<App />);

  const title = screen.getByRole("heading", { name: "Twitter" });
  expect(title).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "send" });
  expect(button).toBeInTheDocument();

});

test('validate elements by text to be in the document', () => {
  render(<App />);

  const text = screen.getByText("Welcome!");
  expect(text).toBeInTheDocument();

});


test('validate elements by test-id to be in the document: last resource', () => {
  render(<App />);

  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});


test('validate props in <Title />', () => {
  const text = "My Title";
  render(<Title title={text} />);

  const title = screen.getByRole("heading", { name: "My Title" });
  expect(title).toBeInTheDocument();
});

test('validate null props in <Title />', () => {
  const text = "";
  render(<Title title={text} />);

  const title = screen.queryByRole("heading", { name: "" });
  expect(title).not.toBeInTheDocument();
});
// 1. plugin chrome Testing Playground
// 2. https://testing-library.com/docs/react-testing-library/example-intro