import { hebrewNumbers } from "@/lib/numbers";
import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";
import { getRandomNumber } from "@/lib/numbers";
import useRandomHebrewNumber from "@/hooks/useRandomHebrewNumber";
import { LoadingSpinner } from "@/components/ui/loading";

interface TinderCardProps {
  item: TinderItem;
}

export default function TinderCard({ item }: TinderCardProps) {
  const { randomHebrewNumber } = useRandomHebrewNumber();

  return (
    <div
      className={`h-full w-full w-[300px] max-w-[300px] max-h-[300px] relative rounded-2xl bg-gray-100 object-cover flex items-center justify-center`}
      style={{
        aspectRatio: "300/500",
      }}
    >
      {randomHebrewNumber ? (
        <>
          <div className="absolute opacity-20 text-9xl">{item.emoji}</div>
          <div className="absolute text-6xl">{item.emoji}</div>
          <div className="absolute bottom-20">
            <span className="text-black text-lg font-semibold">
              {item.title}
            </span>
          </div>
          <div className="absolute bottom-4 flex items-center justify-between w-full px-4">
            <span className="font-bold text-black">{randomHebrewNumber.m}</span>
            <span className="font-bold text-black">{randomHebrewNumber.f}</span>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
