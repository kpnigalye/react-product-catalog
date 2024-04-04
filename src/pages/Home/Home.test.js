import { render } from "@testing-library/react";
import Home from ".";

test("renders Home component", () => {
  const component = render(<Home />);

  expect(component.getByTestId("welcome-note")).toBeInTheDocument();
  expect(component.getByText("Click here")).toBeInTheDocument();

  expect(component).toMatchSnapshot();
});
