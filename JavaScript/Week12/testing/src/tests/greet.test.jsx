import { it, expect, describe } from "vitest";
import Greet from "../components/Greet";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("Should return Hello with the name", () => {
    render(<Greet name="Alex" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
