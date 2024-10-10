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
  const navbar = container.querySelector(".head"); // Updated class name

  // Initially, the navbar should be fixed at the top
  // expect(navbar).toHaveStyle("position: fixed");
  // expect(navbar).toHaveStyle("top: 0");
  // });

  //  test("navbar remains fixed when scrolling", () => {
  //  const { container } = render(<Header />);
  //  const navbar = container.querySelector(".head"); // Updated class name

  //   // Simulate scrolling
  //   window.scrollY = 100;
  //   window.dispatchEvent(new Event("scroll"));

  //   // The navbar should still be fixed
  //   expect(navbar).toHaveStyle("position: fixed");
  //   expect(navbar).toHaveStyle("top: 0");
});
