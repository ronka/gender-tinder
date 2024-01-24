// useHighestScore.js

import { getDataFromLocalStorage, setDataInLocalStorage } from '@/service/LocalStorage';
import { useState, useEffect } from 'react';


const HIGHEST_SCORE_KEY = 'highestScore';

export function useHighestScore() {
  const [highestScore, setHighestScore] = useState(0);

  // Load the highest score from local storage on mount
  useEffect(() => {
    const {highestScore} = getDataFromLocalStorage(HIGHEST_SCORE_KEY);
    if (highestScore !== null) {
      setHighestScore(highestScore);
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
