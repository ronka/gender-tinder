import { formatTime } from "@/lib/utils";
import React from "react";

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps) {
  return (
    <div className="flex max-w-[300px] w-full justify-center items-center bg-gray-100 p-2 rounded-md my-4 text-center flex-wrap md:flex-nowrap gap-4">
      <div className="flex items-center gap-2 md:mb-0">
        <span className="text-sm font-semibold text-gray-700 md:text-md lg:text-lg">
          Counter:
        </span>
        <span className="text-sm font-semibold text-green-600 md:text-md lg:text-lg">
          {score}
        </span>
      </div>
    </div>
  );
}
