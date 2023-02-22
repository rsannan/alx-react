import App from "./App";
import { render, screen, cleanup } from "@testing-library/react";

test("should render App", () => {
  const { testapp } = render(<App />);
  expect(testapp).toBeIntheDocument();
});
