import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Application from "./Application";
import "@testing-library/jest-dom/vitest";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByDisplayValue("Alan");
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const checkBoxElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(checkBoxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
