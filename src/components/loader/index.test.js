import React from "react";
import Loader from "./index";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const renderApp = () => {
  return render(<Loader />);
};

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Header renders correctly", () => {
  const { container } = renderApp();
  expect(container.firstChild).toMatchSnapshot();
});
