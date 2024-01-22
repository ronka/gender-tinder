import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";

interface TinderCardProps {
  item: TinderItem;
  onSwipe: () => void;
}

export default function TinderCard({ item, onSwipe }: TinderCardProps) {
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
    <div className="relative">
      <div
        className={`h-[500px] w-[300px] rounded-2xl object-cover flex items-center justify-center text-6xl`}
        style={{
          aspectRatio: "300/500",
        }}
      >
        <div className="absolute opacity-20 text-9xl">{item.emoji}</div>
        <div className="absolute">{item.emoji}</div>
        <div className="absolute bottom-40">
          <span className="text-black text-lg font-semibold">{item.title}</span>
        </div>
      </div>
      <div className="absolute bottom-4 flex items-center justify-between w-full px-4">
        <div className="flex items-center space-x-2">
          <button
            className="text-2xl font-bold text-black"
            onClick={() => handleGenderClick("m")}
          >
            M
          </button>
        </div>
        <button
          className="text-2xl font-bold text-black"
          onClick={() => handleGenderClick("f")}
        >
          F
        </button>
      </div>
    </div>
  );
}
