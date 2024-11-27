import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom/vitest";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0 initially", () => {
    const countElement1 = screen.getByRole("heading");
    expect(countElement1).toHaveTextContent("0");
  });

  test("renders a count of 2 after user clicks twice on increment button", async () => {
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
