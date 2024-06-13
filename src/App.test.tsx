import { screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
import { customRender } from "./mocks/custom-render";

beforeEach(() => {
  customRender(<App />)
})


describe("when the user interacts with the search input", () => {
  it("should display a message when the user submit the form without a username", async () => {
    //focus on the input
    const input = screen.getByPlaceholderText("username")
    await user.type(input, "{enter}")
    await user.keyboard("{enter}")
    
    expect(screen.getByText("Please enter a username")).toBeInTheDocument()
  })
  it("should display a message that says 'User not found' when the user search for a a username that does not exist ", async () => {
    //focus on the input
    const input = screen.getByPlaceholderText("username")
    await user.type(input, "test-not-found")
    await user.keyboard("{enter}")
    
    expect(await screen.findByText("User not found")).toBeInTheDocument()
  })

  it("should display a card that contains the data of the gh user found", async () => {
    const input = screen.getByPlaceholderText("username")
    await user.type(input, "fazt")
    await user.keyboard("{enter}")

    const image = await screen.findByAltText(/user image/i)
    const imageSrc = image.getAttribute("src")

    await waitFor(() => expect(imageSrc?.length).toBeGreaterThan(0))
  })
})