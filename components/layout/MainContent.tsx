"use client";

import React, { useState } from "react";
import TinderCard from "@/components/TinderCard";
import JSConfetti from "js-confetti";
import SwipeCard from "react-tinder-card";
import { TinderItem } from "@/types/TinderCard";
import { Direction } from "@/types/Direction";
import { useHighestScore } from "@/hooks/useHighestScore";
import { ScoreDialog } from "../ui/ScoreDialog";
import { Button } from "../ui/button";
import useTimer from "@/hooks/useTimer";
import { StartGameFramgent } from "../ui/StartGameFramgent";
import Score from "../Score";

const items = [
  { title: "כיסא", emoji: "🪑", gender: "m" },
  { title: "דלעת", emoji: "🎃", gender: "f" },
  { title: "סלט", emoji: "🥗", gender: "m" },
  { title: "עוגה", emoji: "🍰", gender: "f" },
  { title: "עט", emoji: "✒️", gender: "m" },
  { title: "ספר", emoji: "📖", gender: "m" },
  { title: "דלת", emoji: "🚪", gender: "f" },
  { title: "מחשב", emoji: "💻", gender: "m" },
  { title: "טלפון", emoji: "📞", gender: "m" },
  { title: "מחברת", emoji: "📓", gender: "f" },
  { title: "עיפרון", emoji: "✏️", gender: "m" },
  { title: "מחק", emoji: "🧼", gender: "m" },
  { title: "מקלדת", emoji: "⌨️", gender: "f" },
  { title: "עכבר", emoji: "🖱️", gender: "m" },
  { title: "מסך", emoji: "🖥️", gender: "m" },
  { title: "מנורה", emoji: "🪔", gender: "f" },
  { title: "שולחן", emoji: "🪑", gender: "m" },
  { title: "מיטה", emoji: "🛏️", gender: "f" },
  { title: "ארון", emoji: "🚪", gender: "m" },
  { title: "מראה", emoji: "🪞", gender: "f" },
  { title: "מגבת", emoji: "🛁", gender: "f" },
  { title: "סבון", emoji: "🧼", gender: "m" },
  { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
  { title: "משחת שיניים", emoji: "🦷", gender: "f" },
  { title: "מסרק", emoji: "🌿", gender: "m" },
  { title: "מפתח", emoji: "🔑", gender: "m" },
  { title: "ארנק", emoji: "👛", gender: "m" },
  { title: "תיק", emoji: "👜", gender: "m" },
  { title: "מעיל", emoji: "🧥", gender: "m" },
  { title: "כובע", emoji: "🧢", gender: "m" },
  { title: "נעל", emoji: "👠", gender: "f" },
  { title: "גרב", emoji: "🧦", gender: "f" },
  { title: "מכנסיים", emoji: "👖", gender: "m" },
  { title: "חולצה", emoji: "👚", gender: "f" },
  { title: "חצאית", emoji: "👗", gender: "f" },
  { title: "שמלה", emoji: "👗", gender: "f" },
  { title: "כפפה", emoji: "🧤", gender: "f" },
  { title: "מטריה", emoji: "☔", gender: "f" },
  { title: "שמש", emoji: "☀️", gender: "f" },
  { title: "ירח", emoji: "🌚", gender: "m" },
];

export default function MainContent() {
  const [score, setScore] = useState(0);
  const { highestScore, updateHighestScore } = useHighestScore();
  const [gameStarted, setGameStarted] = useState(false); // Track game state
  const [showCorrectAnswersDialog, setShowCorrectAnswersDialog] =
    useState(false);
  const timer = useTimer();

  const handleStartGame = () => {
    timer.start();
    setGameStarted(true);
    setScore(0);
  };

  const handleResetGame = () => {
    timer.reset();
    setGameStarted(false);
    setScore(0);
  };

  const swiped = (direction: Direction, item: TinderItem, index: number) => {
    console.log(timer.getTime());
    const isCorrect =
      (direction === "left" && item.gender === "m") ||
      (direction === "right" && item.gender === "f");

    if (isCorrect) {
      setScore(score + 1);

      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: [item.emoji, "⚡️", "💥", "✨", "💫"],
      });

      if (score + 1 > highestScore) {
        updateHighestScore(score + 1);
      }
    }

    if (index === 0) {
      setShowCorrectAnswersDialog(true);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center flex-col">
      {!gameStarted && <StartGameFramgent onStartGame={handleStartGame} />}

      {gameStarted && (
        <>
          <Score score={score} />
          <div className="h-full w-full max-w-[300px] max-h-[500px]">
            {items.map((item, index) => (
              <SwipeCard
                className="absolute"
                key={item.title}
                onSwipe={(direction) => swiped(direction, item, index)}
              >
                <TinderCard item={item} />
              </SwipeCard>
            ))}
          </div>
        </>
      )}

      {showCorrectAnswersDialog && (
        <ScoreDialog
          onClose={() => {
            handleResetGame();
            setShowCorrectAnswersDialog(false);
          }}
          score={score}
          time={timer.getTime()}
        />
      )}
    </main>
  );
}
