import { render } from "@testing-library/react";
import Home from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: require("../../../_mocks__/react-router-dom").MockLink,
}));

test("renders Home component", () => {
  const component = render(<Home />);

  expect(component.getByTestId("welcome-note")).toBeInTheDocument();
  expect(component.getByText("Click here")).toBeInTheDocument();

  expect(component).toMatchSnapshot();
});
