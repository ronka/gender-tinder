import { GameResult } from "@/context/GameResultContext";
import { DateKey } from "@/types/Game";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTodaysDate = (): DateKey => {
  return new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split("/")
    .join("-") as DateKey; // Format: dd-mm-yyyy
};

export function formatTime(milliseconds: number): string {
  // Calculate minutes, seconds, and milliseconds
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = milliseconds % 1000;

  // Format the output to ensure two digits for minutes and seconds, and three digits for milliseconds
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = ms.toString().padStart(3, "0");

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

export function isIOSDevice() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export interface AggregatedResult {
  date: string;
  averageCorrectAnswers: number;
  averageTime: number;
  numberOfTries: number;
}

export const aggregateResults = (
  gameResults: GameResult[]
): AggregatedResult[] => {
  const aggregatedResults: {
    [date: string]: {
      totalCorrectAnswers: number;
      totalTime: number;
      count: number;
    };
  } = {};

  gameResults.forEach((result) => {
    const dateKey = result.date;
    if (!aggregatedResults[dateKey]) {
      aggregatedResults[dateKey] = {
        totalCorrectAnswers: 0,
        totalTime: 0,
        count: 0,
      };
    }
    aggregatedResults[dateKey].totalCorrectAnswers +=
      result.correctAnswers.length;
    aggregatedResults[dateKey].totalTime += result.time;
    aggregatedResults[dateKey].count++;
  });

  return Object.keys(aggregatedResults).map((date) => ({
    date,
    averageCorrectAnswers:
      aggregatedResults[date].totalCorrectAnswers /
      aggregatedResults[date].count,
    averageTime:
      aggregatedResults[date].totalTime / aggregatedResults[date].count,
    numberOfTries: aggregatedResults[date].count,
  }));
};
