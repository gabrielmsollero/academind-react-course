import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders only initial message when button has NOT been clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing

    // Assert
    const goodToSeeYouElement = screen.getByText("It's good to see you", { exact: false });
    const changedElement = screen.queryByText("Changed", { exact: false });
    
    expect(goodToSeeYouElement).toBeInTheDocument();
    expect(changedElement).not.toBeInTheDocument(); // or expect(changedElement).toBeNull()
  });

  test("renders 'Changed!' when button has been clicked", () => {
    // Arrange
    render(<Greeting />);
    
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYouElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    const changedElement = screen.getByText("Changed", { exact: false });

    expect(goodToSeeYouElement).not.toBeInTheDocument();
    expect(changedElement).toBeInTheDocument();
  });
});
