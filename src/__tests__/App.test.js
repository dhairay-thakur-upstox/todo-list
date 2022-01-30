import App from "../App";
import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("Componenets should render without crashing", () => {
  it("renders without crashing", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [],
      })
    );
    render(<App />);
    await waitFor(() => {
      screen.getByText("To Do List");
      expect(screen.getByRole("textbox")).toHaveClass("todo-input");
      expect(screen.getByRole("button")).toHaveClass("todo-button");
      expect(screen.getByRole("list")).toHaveClass("todo-list");
    });
  });

  it("Todos should get fetched", async () => {
    const todos = [
      { id: 1, text: "test" },
      { id: 2, text: "test2" },
    ];
    await axios.get.mockImplementation(() =>
      Promise.resolve({
        data: todos,
      })
    );
    render(<App />);
    expect(axios.get).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
  });
});
