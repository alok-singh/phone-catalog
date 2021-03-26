import React from "react";
import Footer from "./index";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const renderApp = (props) => {
  return render(
    <BrowserRouter>
      <Footer {...props} />
    </BrowserRouter>
  );
};

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Footer renders correctly", () => {
  const props = {
    list: [{link: "link", title: "title"}],
    copyright: 'copyright'
  };
  
  const { container } = renderApp(props);
  expect(container.firstChild).toMatchSnapshot();
});
