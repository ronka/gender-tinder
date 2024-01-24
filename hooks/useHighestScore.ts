// useHighestScore.js

import { getDataFromLocalStorage, setDataInLocalStorage } from '@/service/LocalStorage';
import { useState, useEffect } from 'react';


const HIGHEST_SCORE_KEY = 'highestScore';

export function useHighestScore() {
  const [highestScore, setHighestScore] = useState(0);

  // Load the highest score from local storage on mount
  useEffect(() => {
    const savedHighestScore = getDataFromLocalStorage<{highestScore: number}>(HIGHEST_SCORE_KEY);
    if (savedHighestScore !== null) {
      setHighestScore(savedHighestScore.highestScore);
    }
  }, []);

  // Function to update and save the highest score
  const updateHighestScore = (newScore:number) => {
    if (newScore > highestScore) {
      setHighestScore(newScore);
      setDataInLocalStorage(HIGHEST_SCORE_KEY, {highestScore: newScore});
    }
  };

  return { highestScore, updateHighestScore };
}
