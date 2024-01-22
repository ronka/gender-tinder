import { hebrewNumbers } from "@/lib/numbers";
import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";

interface TinderCardProps {
  item: TinderItem;
}

export default function TinderCard({ item }: TinderCardProps) {
  const randomIndex = Math.floor(
    Math.random() * Object.keys(hebrewNumbers).length
  );
  const randomNumber = Object.keys(hebrewNumbers)[randomIndex];

  return (
    <div
      className={`h-full w-full w-[300px] max-w-[300px] max-h-[500px] relative rounded-2xl bg-gray-100 object-cover flex items-center justify-center`}
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
        <span className="font-bold text-black">
          {hebrewNumbers[randomNumber].m}
        </span>
        <span className="font-bold text-black">
          {hebrewNumbers[randomNumber].f}
        </span>
      </div>
    </div>
  );
}
