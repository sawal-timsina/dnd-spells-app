import { Axios } from "../axios";

describe("Check if `axios` is configured properly", () => {
  describe("When getting base url", () => {
    it("Then the URL set must be correct", () => {
      expect(Axios.getUri()).toEqual(process.env.NEXT_PUBLIC_SERVER_URL);
    });
  });
});
