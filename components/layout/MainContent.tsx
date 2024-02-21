"use client";

import React, { useMemo, useRef, useState } from "react";
import TinderCard from "@/components/TinderCard";
import JSConfetti from "js-confetti";
import SwipeCard from "react-tinder-card";
import { TinderItem } from "@/types/TinderCard";
import { Direction } from "@/types/Direction";
import { ScoreDialog } from "../ui/ScoreDialog";
import useTimer from "@/hooks/useTimer";
import { StartGameFramgent } from "../ui/StartGameFramgent";
import Score from "../Score";
import useRandomHebrewNumber from "@/hooks/useRandomHebrewNumber";
import { useCardsRef } from "@/hooks/useCardsRef";
import { Game } from "@/types/Game";
import { isIOSDevice } from "@/lib/utils";

export default function MainContent({ game }: { game: Game }) {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [progress, setProgress] = useState(game.items.length);
  const [gameStarted, setGameStarted] = useState(false); // Track game state
  const [showCorrectAnswersDialog, setShowCorrectAnswersDialog] =
    useState(false);
  const jsConfettiRef = useRef<JSConfetti>();

  const hebrewNumberService = useRandomHebrewNumber();
  const timer = useTimer();
  const refs = useCardsRef(game.items.length);

  const handleStartGame = () => {
    timer.start();
    setGameStarted(true);
    setProgress(game.items.length);
    setCorrectAnswers([]);
  };

  const handleResetGame = () => {
    timer.reset();
    setGameStarted(false);
    setProgress(game.items.length);
    setCorrectAnswers([]);
  };

  const swiped = (direction: Direction, item: TinderItem, index: number) => {
    setProgress(index);
    hebrewNumberService.next();

    const isCorrect =
      (direction === "left" && item.gender === "m") ||
      (direction === "right" && item.gender === "f");

    if (isCorrect) {
      setCorrectAnswers((correctAnswers) => [...correctAnswers, item.emoji]);

      // because of preformance issues in other devices
      if (isIOSDevice()) {
        jsConfettiRef.current = new JSConfetti();

        jsConfettiRef.current.addConfetti({
          emojis: [item.emoji, "🎉", "🥳"],
        });
      }
    }

    if (index === 0) {
      setShowCorrectAnswersDialog(true);

      // todo: fix bug when swipping fast and the cards are stuck in the dom causing the screen to be too big and not see the dialog
      handleResetGame();
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center flex-col">
      {!gameStarted && (
        <StartGameFramgent name={game.name} onStartGame={handleStartGame} />
      )}

      {gameStarted && (
        <>
          <Score progress={progress} score={correctAnswers.length} />
          <div className="h-full w-full max-w-[300px] max-h-[500px]">
            {game.items.map((item, index) => (
              <SwipeCard
                ref={refs[index]}
                className="absolute"
                key={item.title}
                onSwipe={(direction) => swiped(direction, item, index)}
                preventSwipe={["up", "down"]}
                flickOnSwipe={true}
              >
                <TinderCard
                  hebrewNumber={hebrewNumberService.get()}
                  item={item}
                />
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
          correctAnswers={correctAnswers}
          score={correctAnswers.length}
          time={timer.getTime()}
          name={game.name}
        />
      )}
    </main>
  );
}
