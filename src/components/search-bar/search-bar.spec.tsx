import { render, screen } from '@testing-library/react';
import SearchBar from './search-bar';


describe("SearchBar", () => {
  it("should render", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });
})