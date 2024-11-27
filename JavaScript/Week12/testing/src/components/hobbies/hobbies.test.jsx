import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Hobbies from "./Hobbies";
import "@testing-library/jest-dom/vitest";

describe("Hobbies", () => {
  const hobbies = ["Reading"];

  test("renders correctly", () => {
    render(<Hobbies hobbies={hobbies} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(1);

    // const divElement = screen.getByText("Hobbi", { exact: false }); //sub string match
    // const divElement = screen.getByText(/hobbies/i);

    const divElement = screen.getByText((content) =>
      content.endsWith("Hobbies")
    );

    expect(divElement).toBeInTheDocument();
  });

  test("renders login button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Hobbies is not there", () => {
    const startHobbies = screen.queryByRole("button", {
      name: "Start Hobbies",
    });
    expect(startHobbies).not.toBeInTheDocument();
  });
});
