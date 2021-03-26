import React from "react";
import Card from "./index";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const renderApp = (props) => {
  return render(
    <BrowserRouter>
      <Card {...props} />
    </BrowserRouter>
  );
};

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Card renders correctly", () => {
  const props = {
    title: "title",
    price: "price",
    image: "image",
    link: "link",
  };
  
  const { container } = renderApp(props);
  expect(container.querySelector("a").attributes.href.value).toBe(`/${props.link}`);
  expect(container.querySelector("img").attributes.src.value).toBe(props.image);
  expect(container.querySelector("img").attributes.title.value).toBe(props.title);
  expect(container.querySelector("img").attributes.alt.value).toBe(props.title);
  expect(container.querySelector(".card-title").innerHTML).toBe(props.title);
  expect(container.querySelector(".card-price").innerHTML).toBe(props.price);

  expect(container.firstChild).toMatchSnapshot();
});
