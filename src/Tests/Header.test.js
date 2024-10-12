import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import "@testing-library/jest-dom";

test("renders the navbar with all links", () => {
  render(<Header />);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About us/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Plant care/i)).toBeInTheDocument();
  expect(screen.getByText(/Asikh Nursery/i)).toBeInTheDocument();
});

test("navbar is fixed at the top of the viewport", () => {
  const { container } = render(<Header />);
  const navbar = container.querySelector(".head");
});
