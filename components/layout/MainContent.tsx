"use client";

import React, { useState } from "react";
import TinderCard from "@/components/TinderCard";
import Score from "@/components/Score";
import JSConfetti from "js-confetti";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSwipe = () => {
    // Logic for handling swiping to the next card
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // You've reached the end of the list, handle as needed (e.g., loop back to the beginning)
      setCurrentIndex(0);
    }
  };

  const handleGenderClick = (selectedGender: string) => {
    if (items[currentIndex].gender === selectedGender) {
      setScore(score + 1);

      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: [items[currentIndex].emoji, "⚡️", "💥", "✨", "💫"],
      });
    } else {
      setScore(0);
    }

    handleSwipe();
  };

  return (
    <main className="flex-1 flex items-center justify-center flex-col">
      <Score score={score} />
      <TinderCard
        item={items[currentIndex]}
        onGenderClick={handleGenderClick}
      />
    </main>
  );
}
