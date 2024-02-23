"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GameResult, useGameResultsContext } from "@/context/GameResultContext";
import { aggregateResults, formatTime } from "@/lib/utils";

const Page: React.FC = () => {
  const { gameResults } = useGameResultsContext();
  const aggregatedResults = aggregateResults(gameResults);

  return (
    <div className="max-w-3xl mx-auto" dir="rtl">
      <div className="w-full overflow-auto ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>תאריך</TableHead>
              <TableHead>🕒 זמן ממומצע</TableHead>
              <TableHead>✅ מומצע הצלחות</TableHead>
              <TableHead>🔢 מספר ניסיונות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {aggregatedResults.map((result, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{result.date}</TableCell>
                <TableCell>{formatTime(result.averageTime)}</TableCell>
                <TableCell>{result.averageCorrectAnswers}</TableCell>
                <TableCell>{result.numberOfTries}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
