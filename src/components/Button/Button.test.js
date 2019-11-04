import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  const { getByText } = render(<Button label={testMessage} />);

  expect(getByText(testMessage)).toBeDefined();
});
