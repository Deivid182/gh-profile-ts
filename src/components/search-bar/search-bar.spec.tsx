import user from "@testing-library/user-event"
import SearchBar from "./search-bar";
import { fireEvent, render, screen, waitFor} from "@testing-library/react";


// steps for test this input
// 1. render the component
// 2. find the input
// 3. change the value
// 4. expect the value to be changed



describe("SearchBar", () => {
  it("should render", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");

    expect(searchBar).toBeInTheDocument();
  });

  it("should change value", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");
    fireEvent.change(searchBar, { target: { value: "test" } });
    expect(searchBar).toHaveValue("test");
  });

  it("should submit the form when pressing enter", async () => {
    user.setup();
    const onSubmit = vi.fn();
    render(<SearchBar onSubmit={onSubmit}/>);
    const searchBar = screen.getByRole("textbox");
    await user.type(searchBar, "test");
    await user.keyboard("{Enter}");
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  })
  
  
})