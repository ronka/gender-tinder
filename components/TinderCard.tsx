import { TinderItem } from "@/types/TinderCard";
import React from "react";
import { HebrewNumber } from "@/hooks/useRandomHebrewNumber";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface TinderCardProps {
  item: TinderItem;
  hebrewNumber: HebrewNumber;
  isActive: boolean;
}

export default function TinderCard({
  item,
  hebrewNumber,
  isActive,
}: TinderCardProps) {
  return (
    <div
      className={cn(
        "w-[300px] h-[300px] relative rounded-2xl object-cover flex items-center justify-center transition-all",
        isActive && "animate-wiggle bg-gray-100 ",
        !isActive && "scale-95 bottom-3 bg-gray-200"
      )}
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
