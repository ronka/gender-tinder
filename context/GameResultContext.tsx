"use client";

import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "@/service/LocalStorage";
import { DateKey } from "@/types/Game";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define game result interface
interface GameResult {
  correctAnswers: string[];
  time: number;
  date: DateKey;
}

export const GAME_RESULTS_KEY = "gameResults";

// Define context type
interface GameResultsContextType {
  gameResults: GameResult[];
  addGameResult: (result: GameResult) => void;
  isLoading: boolean;
}

// Create context
const GameResultsContext = createContext<GameResultsContextType | undefined>(
  undefined
);

// Custom hook to access context
export const useGameResultsContext = () => {
  const context = useContext(GameResultsContext);
  if (!context) {
    throw new Error(
      "useGameResultsContext must be used within a GameResultsProvider"
    );
  }
  return context;
};

// Provider component
export const GameResultsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const gameResults = getDataFromLocalStorage<GameResult[]>(GAME_RESULTS_KEY);
    if (gameResults) {
      setGameResults(gameResults);
    }
    setIsLoading(false);
  }, []);

  const addGameResult = (result: GameResult) => {
    const newResults = [...gameResults, result];

    setGameResults(newResults);
    setDataInLocalStorage(GAME_RESULTS_KEY, newResults);
  };

  return (
    <GameResultsContext.Provider
      value={{ isLoading, gameResults, addGameResult }}
    >
      {children}
    </GameResultsContext.Provider>
  );
};
