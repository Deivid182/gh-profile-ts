import userEvent from "@testing-library/user-event"
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./header";

describe("SearchBar", () => {
  it("should render", () => {
    render(<Header />);
    const searchBar = screen.getByRole("textbox");

    expect(searchBar).toBeInTheDocument();
  });

  it("should change value", () => {
    render(<Header />);
    const searchBar = screen.getByRole("textbox");
    fireEvent.change(searchBar, { target: { value: "test" } });
    expect(searchBar).toHaveValue("test");
  });

  it("should submit the form when pressing enter", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const searchBar = screen.getByRole("textbox");
    await user.type(searchBar, "Fazt");
    await user.keyboard("{Enter}");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userFound = screen.getByTestId("username");

    expect(userFound).toBeInTheDocument();
  })
})