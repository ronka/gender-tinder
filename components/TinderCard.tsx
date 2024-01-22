import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";

interface TinderCardProps {
  item: TinderItem;
}

export default function TinderCard({ item }: TinderCardProps) {
  return (
    <div
      className={`h-full w-full w-[300px] max-w-[300px] max-h-[500px] relative rounded-2xl bg-gray-100 object-cover flex items-center justify-center text-6xl`}
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
          <button className="text-2xl font-bold text-black">M</button>
        </div>
        <button className="text-2xl font-bold text-black">F</button>
      </div>
    </div>
  );
}
