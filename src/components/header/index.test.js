import React from "react";
import Header from "./index";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const renderApp = (props) => {
  return render(
    <BrowserRouter>
      <Header {...props} />
    </BrowserRouter>
  );
};

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Header renders correctly", () => {
  const props = {
    list: [{ link: "link", title: "title" }],
  };

  const { container } = renderApp(props);
  expect(container.firstChild).toMatchSnapshot();
});
