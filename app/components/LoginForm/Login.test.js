import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LoginForm from "../LoginForm";

describe("LoginForm component tests", () => {
  it("should render form with 3 inputs", () => {
    render(<LoginForm />);
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });
});
