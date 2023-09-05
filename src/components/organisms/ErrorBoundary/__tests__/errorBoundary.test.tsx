import { render } from "@testing-library/react";
import { ErrorBoundary } from "../index";

describe("ErrorBoundary", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(jest.fn());
    jest.spyOn(console, "error").mockImplementation(jest.fn());
  });

  it("should render children when there is no error", () => {
    const { queryByText } = render(
      <ErrorBoundary>
        <div>{"Content"}</div>
      </ErrorBoundary>
    );

    expect(queryByText(/Content/i)).toBeTruthy();
  });

  it("should render error message when there is an error", () => {
    const Throw = () => {
      throw new DOMException();
    };

    const { queryByText } = render(
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>
    );

    expect(queryByText(/Oops, something went wrong!/i)).toBeTruthy();
  });
});
