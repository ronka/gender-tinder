import { TinderItem } from "@/types/TinderCard";
import React, { useState } from "react";

interface TinderCardProps {
  item: TinderItem;
  onSwipe: () => void;
}

export default function TinderCard({ item, onSwipe }: TinderCardProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    onSwipe();
  };

  const handleDislike = () => {
    setDisliked(true);
    onSwipe();
  };

  return (
    <div className="relative">
      <div
        className={`h-[500px] w-[300px] rounded-2xl object-cover flex items-center justify-center text-6xl ${
          liked ? "bg-green-200" : disliked ? "bg-red-200" : ""
        }`}
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
      <div className="absolute bottom-2 left-2">
        <button
          className="text-2xl font-bold text-red-600"
          onClick={handleDislike}
        >
          זכר
        </button>
      </div>
      <div className="absolute bottom-2 right-2">
        <button
          className="text-2xl font-bold text-green-600"
          onClick={handleLike}
        >
          נקבה
        </button>
      </div>
    </div>
  );
}
