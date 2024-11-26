import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Application from "./Application";
import "@testing-library/jest-dom/vitest";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
