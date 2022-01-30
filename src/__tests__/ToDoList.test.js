import Input from "../components/Input";
import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ToDoList from "../components/ToDoList";

jest.mock("axios");

const baseURL = "http://localhost:8080/todos";

describe("CRUD operations on Todos should work - PUT and DELETE Request", () => {
  test("Todo should get edited", async () => {
    const todos = [
      { id: 1, text: "test" },
      { id: 2, text: "test2" },
    ];
    axios.put.mockImplementationOnce(() => Promise.resolve({}));
    render(<ToDoList todos={todos} setTodos={() => {}} />);
    // edit button for first item
    userEvent.click(screen.getAllByRole("button")[1]);
    // get access to edit todo input box
    userEvent.type(screen.getByPlaceholderText("Edit ToDo"), "_updated");
    // edit button for popup
    userEvent.click(screen.getAllByRole("button")[4]);
    expect(axios.put).toHaveBeenCalledWith(
      baseURL,
      expect.objectContaining({
        text: "test_updated",
        id: 1,
      })
    );
  });
  test("Todo should get deleted", async () => {
    const todos = [
      { id: 1, text: "test" },
      { id: 2, text: "test2" },
    ];
    axios.delete.mockImplementationOnce(() => Promise.resolve({}));
    render(<ToDoList todos={todos} setTodos={() => {}} />);
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(axios.delete).toHaveBeenCalledWith(`${baseURL}?id=1`);
  });
});
