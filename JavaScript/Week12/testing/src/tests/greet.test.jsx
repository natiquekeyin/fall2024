import { test, expect, describe } from "vitest";
import Greet from "../components/Greet";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  test("Greet component has hello text", () => {
    render(<Greet />);
    const heading = screen.getByText(/hello/i);
    expect(heading).toBeInTheDocument();
  });
  test("Greet renders the name correctly", () => {
    render(<Greet name="Alex" />);
    const world = screen.getByText("hello Alex");
    expect(world).toBeInTheDocument();
  });
});
