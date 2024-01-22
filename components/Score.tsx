import React from "react";

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps) {
  return (
    <div className="flex justify-center items-center bg-gray-200 p-2 rounded-md my-2 text-center flex-wrap md:flex-nowrap">
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
