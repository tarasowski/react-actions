import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the heading", () => {
  render(<App />);
  
  const heading = screen.getByText(/Techstarter \+ React/i);
  expect(heading).toBeInTheDocument();
});

test("increments the counter when button is clicked", () => {
  render(<App />);
  
  const button = screen.getByRole("button", { name: /count is 0/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");

  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 2");
});
