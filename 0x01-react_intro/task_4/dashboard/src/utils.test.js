import { render, screen, cleanup } from "@testing-library/react";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear", () => {
  it("should return the current year", () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });
});

describe("getFooterCopy", () => {
  it("should return the correct string", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
});

describe("getLatestNotification", () => {
  it("should return the latest notificaion", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
