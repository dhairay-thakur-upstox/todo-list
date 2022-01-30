import Input from "../components/Input";
import App from "../App";
import React from "react";
import axios from "axios";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getByRole,
  getByText,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("axios");

const baseURL = "http://localhost:8080/todos";

describe("CRUD operations on Todos should work - POST Request", () => {
  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
  });
  test("Todo should get created", async () => {
    const todos = [
      { id: 1, text: "test" },
      { id: 2, text: "test2" },
    ];
    axios.post.mockImplementationOnce(() => Promise.resolve({}));
    render(<Input todo={"test123"} todos={todos} setTodo={() => {}} />);
    userEvent.type(screen.getByRole("textbox"), "test");
    userEvent.click(screen.getByRole("button"));
    expect(axios.post).toHaveBeenCalledWith(
      baseURL,
      expect.objectContaining({
        text: "test123",
        id: 3,
      })
    );
  });
});
