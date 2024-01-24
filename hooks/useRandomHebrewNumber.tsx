import { hebrewNumbers } from "@/lib/numbers";
import { useEffect, useState } from "react";

export default function useRandomHebrewNumber() {
  const [randomIndex, setRandomIndex] = useState<number | null>(null); // Initialize with null

  useEffect(() => {
    const getRandomIndex = () => {
      const keys = Object.keys(hebrewNumbers);
      const randomKey = parseInt(keys[Math.floor(Math.random() * keys.length)]);
      setRandomIndex(randomKey);
    };

    getRandomIndex(); // Generate a random index when the component mounts on the client side
  }, []); // Use an empty dependency array to ensure it runs only on the client side

  return {
    randomHebrewNumber:
      randomIndex !== null ? hebrewNumbers[randomIndex] : null,
  };
}
