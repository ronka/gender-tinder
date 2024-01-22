import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";

interface TinderCardProps {
  item: TinderItem;
  onSwipe: () => void;
  onGenderClick: (gender: string) => void;
}

export default function TinderCard({
  item,
  onSwipe,
  onGenderClick,
}: TinderCardProps) {
  const handleGenderClick = (selectedGender: string) => {
    if (item.gender === selectedGender) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
    // Call the onSwipe callback to move to the next card
    onSwipe();
  };

  return (
    <div className="flex h-full w-full flex-col items-center rounded-3xl  p-8">
      <div
        className={`h-full w-full max-w-[300px] max-h-[500px] relative rounded-2xl bg-gray-100 object-cover flex items-center justify-center text-6xl`}
        style={{
          aspectRatio: "300/500",
        }}
      >
        <div className="absolute opacity-20 text-9xl">{item.emoji}</div>
        <div className="absolute">{item.emoji}</div>
        <div className="absolute bottom-40">
          <span className="text-black text-lg font-semibold">{item.title}</span>
        </div>
        <div className="absolute bottom-4 flex items-center justify-between w-full px-4">
          <div className="flex items-center space-x-2">
            <button
              className="text-2xl font-bold text-black"
              onClick={() => onGenderClick("m")}
            >
              M
            </button>
          </div>
          <button
            className="text-2xl font-bold text-black"
            onClick={() => onGenderClick("f")}
          >
            F
          </button>
        </div>
      </div>
    </div>
  );
}
