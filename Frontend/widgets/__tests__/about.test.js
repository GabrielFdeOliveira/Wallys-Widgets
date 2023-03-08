import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../src/pages/about";

describe("About page", () => {
  test("renders without crashing", () => {
    render(<About />);
    const text = screen.getByTestId("about");
    expect(text).toBeInTheDocument;
  });
});
