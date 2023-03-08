import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home component", () => {
  test("renders without crashing", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument;
  });
});
