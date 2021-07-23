import App from "./App.jsx";
import React from "react";
import { fireEvent, getByDisplayValue, prettyDOM, render, screen } from "@testing-library/react";

it("has John Doe as default value", () => {
  const dummy = () => { };
  const { getByDisplayValue } = render(<App onSubmit={dummy} />);
  expect(screen.getByDisplayValue("John Doe")).toBeTruthy();
});

it("changes the input value", () => {
  const dummy = () => { };
  const { getByTestId, getByDisplayValue } = render(<App onSubmit={dummy} />);
  fireEvent.change(getByTestId("input"), {
    target: { value: "new value" }
  });
  expect(screen.getByDisplayValue("new value")).toBeTruthy();
});

it("submits the form", () => {
  const dummy = jest.fn()
  const { getByText } = render(<App onSubmit={dummy} />);
  const button = screen.getByText('Save')
  fireEvent.click(button);
  expect(dummy).toHaveBeenCalled();
});

// nicolas.mendonca@agileengine.com
