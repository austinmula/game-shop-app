import { render, screen } from "@testing-library/react";
import App from "./App";
import CardContainer from "./components/card/CardContainer";

test("renders learn react link", () => {
  render(<CardContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
