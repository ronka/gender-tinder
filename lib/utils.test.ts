import { getTodaysDate } from "@/lib/utils";
import { aggregateResults } from "./utils"; // Assuming the utility function is exported from 'utils.ts'
import { GameResult } from "@/context/GameResultContext";

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

describe("aggregateResults", () => {
  test("should aggregate game results with the same date", () => {
    const gameResults: GameResult[] = [
      { date: "01-01-2022", correctAnswers: ["a", "b"], time: 100 },
      {
        date: "01-01-2022",
        correctAnswers: ["c", "d", "e"],
        time: 200,
      },
      { date: "02-01-2022", correctAnswers: ["f"], time: 150 },
    ];

    const expectedResults = [
      {
        date: "01-01-2022",
        averageCorrectAnswers: 2.5,
        averageTime: 150,
        numberOfTries: 2,
      },
      {
        date: "02-01-2022",
        averageCorrectAnswers: 1,
        averageTime: 150,
        numberOfTries: 1,
      },
    ];

    expect(aggregateResults(gameResults)).toEqual(expectedResults);
  });

  test("should return an empty array if gameResults is empty", () => {
    const gameResults: GameResult[] = [];

    expect(aggregateResults(gameResults)).toEqual([]);
  });

  test("should handle game results with different dates", () => {
    const gameResults: GameResult[] = [
      { date: "01-01-2022", correctAnswers: ["a", "b"], time: 100 },
      {
        date: "02-01-2022",
        correctAnswers: ["c", "d", "e"],
        time: 200,
      },
    ];

    const expectedResults = [
      {
        date: "01-01-2022",
        averageCorrectAnswers: 2,
        averageTime: 100,
        numberOfTries: 1,
      },
      {
        date: "02-01-2022",
        averageCorrectAnswers: 3,
        averageTime: 200,
        numberOfTries: 1,
      },
    ];

    expect(aggregateResults(gameResults)).toEqual(expectedResults);
  });
});
