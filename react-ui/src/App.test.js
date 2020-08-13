import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

test("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});

test("turnTracker exists", () => {
	const { getByText } = render(<App />);
	console.log(getByText);
	const turnTracker = getByText("Red Turn!");
	expect(turnTracker).toBeInTheDocument();
});
