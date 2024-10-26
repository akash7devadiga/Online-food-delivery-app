import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Test cases for Contact us page", () => {
  test("Contact us page should be rendered properly", () => {
    render(<Contact />)
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument()
  })


  test("Button should be rendered properly", () => {
    //rendering
    render(<Contact />)
    //querying
    const button = screen.getByRole("button");
    //Assertion

    expect(button).toBeInTheDocument();

  })

  test("Check if all the input boxes are rendered properly", () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  })

})
