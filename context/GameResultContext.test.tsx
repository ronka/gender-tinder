import React from "react";
import { render, act } from "@testing-library/react";
import {
  GAME_RESULTS_KEY,
  GameResultsProvider,
  useGameResultsContext,
} from "@/context/GameResultContext";
import { getTodaysDate } from "@/lib/utils";
import { setDataInLocalStorage } from "@/service/LocalStorage";

describe("GameResultsContext", () => {
  const todaysDate = getTodaysDate();

  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test("should load gameResults from local storage on mount", () => {
    // Set up local storage
    const gameResultsData = [
      { correctAnswers: ["🚀", "⏱️"], time: 200, date: todaysDate },
    ];
    setDataInLocalStorage(GAME_RESULTS_KEY, gameResultsData);

    const TestComponent = () => {
      const { gameResults } = useGameResultsContext();
      return (
        <span data-testid="game-results">{JSON.stringify(gameResults)}</span>
      );
    };

    const { getByTestId } = render(
      <GameResultsProvider>
        <TestComponent />
      </GameResultsProvider>
    );

    // Check if gameResults are loaded from local storage on mount
    expect(JSON.parse(getByTestId("game-results").textContent!)).toEqual(
      gameResultsData
    );
  });

  test("should provide gameResults array and addGameResult function", () => {
    const TestComponent = () => {
      const { gameResults, addGameResult } = useGameResultsContext();
      return (
        <div>
          <span data-testid="game-results">{JSON.stringify(gameResults)}</span>
          <button
            onClick={() =>
              addGameResult({
                correctAnswers: ["🚀", "⏱️"],
                time: 100,
                date: todaysDate,
              })
            }
          >
            Add Result
          </button>
        </div>
      );
    };

    const { getByText, getByTestId } = render(
      <GameResultsProvider>
        <TestComponent />
      </GameResultsProvider>
    );

    // Check if gameResults array is initially empty
    expect(getByTestId("game-results").textContent).toBe("[]");

    // Add a game result
    act(() => {
      getByText("Add Result").click();
    });

    // Check if the game result was added successfully
    expect(JSON.parse(getByTestId("game-results").textContent!)).toEqual([
      { correctAnswers: ["🚀", "⏱️"], time: 100, date: todaysDate },
    ]);
  });
});
