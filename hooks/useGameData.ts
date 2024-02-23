import { TinderItem } from "@/types/TinderCard";
import { useState, useEffect } from "react";
import data from "@/lib/data";
import { DataSchema, DateKey, Game } from "@/types/Game";
import { getTodaysDate } from "@/lib/utils";

// Function to parse and validate data for a given date
const parseGameDataForDate = (data: any, date: DateKey): Game | null => {
  if (data[date]) {
    try {
      const parsedData = DataSchema.parse(data);
      return parsedData[date];
    } catch (err) {
      console.error("Data validation error:", err);
      return null;
    }
  } else {
    console.error("No data for given date:", date);
    return null;
  }
};

// Updated useGameData hook
const useGameData = () => {
  let gameData: Game;

  const today = getTodaysDate();
  const todayData = parseGameDataForDate(data, today);

  if (todayData) {
    gameData = todayData;
  } else {
    gameData = data["default"];
    console.error("Data for today is not available or invalid");
  }

  return gameData;
};

export default useGameData;
