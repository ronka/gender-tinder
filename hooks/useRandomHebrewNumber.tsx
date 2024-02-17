import { hebrewNumbers } from "@/lib/numbers";
import { useCallback, useState } from "react";

interface HebrewNumber {
  f: string;
  m: string;
}

const DEFAULT: HebrewNumber = hebrewNumbers[0];

export default function useRandomHebrewNumber() {
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  const getRandomIndex = useCallback(() => {
    const keys = Object.keys(hebrewNumbers);
    const randomKey = parseInt(keys[Math.floor(Math.random() * keys.length)]);
    setRandomIndex(randomKey);
  }, []);

  const next = () => {
    getRandomIndex(); // Generate a new random index
  };

  const get = (): HebrewNumber => {
    // Return the current random Hebrew number or null if not yet set
    return randomIndex !== null ? hebrewNumbers[randomIndex] : DEFAULT;
  };

  return { next, get };
}

export type { HebrewNumber };
