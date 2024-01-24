"use client";

import React, { useState } from "react";
import TinderCard from "@/components/TinderCard";
import Score from "@/components/Score";
import JSConfetti from "js-confetti";
import SwipeCard from "react-tinder-card";
import { TinderItem } from "@/types/TinderCard";
import { Direction } from "@/types/Direction";
import { SwipeDialog } from "@/components/ui/SwipeDialog";
import { useHighestScore } from "@/hooks/useHighestScore";
import { ScoreDialog } from "../ui/ScoreDialog";

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
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showCorrectAnswersDialog, setShowCorrectAnswersDialog] =
    useState(false);

  const swiped = (direction: Direction, item: TinderItem) => {
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
    } else {
      setCorrectAnswers(score);
      setShowCorrectAnswersDialog(true);
      setScore(0);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center flex-col">
      <SwipeDialog />
      {true && (
        <ScoreDialog
          onClose={() => {
            setShowCorrectAnswersDialog(false);
          }}
          correctAnswers={correctAnswers}
        />
      )}
      <Score score={score} highestScore={highestScore} />
      <div className="h-full w-full max-w-[300px] max-h-[500px]">
        {items.map((item) => (
          <SwipeCard
            className="absolute"
            key={item.title}
            onSwipe={(direction) => swiped(direction, item)}
          >
            <TinderCard item={item} />
          </SwipeCard>
        ))}
      </div>
    </main>
  );
}
