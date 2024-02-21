import { TinderItem } from "@/types/TinderCard";
import React from "react";
import { HebrewNumber } from "@/hooks/useRandomHebrewNumber";
import { Button } from "./ui/button";

interface TinderCardProps {
  item: TinderItem;
  hebrewNumber: HebrewNumber;
}

export default function TinderCard({ item, hebrewNumber }: TinderCardProps) {
  return (
    <div
      className={`w-[300px] h-[300px] relative rounded-2xl bg-gray-100 object-cover flex items-center justify-center`}
    >
      <div className="absolute opacity-20 text-9xl">{item.emoji}</div>
      <div className="absolute text-6xl">{item.emoji}</div>
      <div className="absolute bottom-20">
        <span className="text-black text-lg font-semibold">{item.title}</span>
      </div>

      <div className="absolute bottom-4 flex items-center justify-between w-full px-4">
        <span className="font-bold text-black text-center" title="זכר">
          <div className="text-3xl">👈</div>
          {hebrewNumber.m}
        </span>
        <span className="font-bold text-black text-center" title="נקבה">
          <div className="text-3xl">👉</div>
          {hebrewNumber.f}
        </span>
      </div>
    </div>
  );
}
