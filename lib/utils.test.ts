import { getTodaysDate } from "@/lib/utils";

describe("getTodaysDate", () => {
  test("should return date in dd-mm-yyyy format", () => {
    // Mock current date
    const mockDate = new Date("2022-01-15"); // January 15, 2022
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    // Call the function
    const dateKey = getTodaysDate();

    // Restore the original Date implementation
    spy.mockRestore();

    // Check if the returned date key matches the expected format
    expect(dateKey).toMatch(/^\d{2}-\d{2}-\d{4}$/); // Matches dd-mm-yyyy pattern
  });
});
