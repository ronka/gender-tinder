// ScoreDialog.js

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import Link from "next/link";
import { formatTime } from "@/lib/utils";
import { trackShare } from "@/lib/events";

interface Props {
  time: number;
  correctAnswers: string[];
  score: number;
  name: string;
  onClose: () => void;
}

export function ScoreDialog({
  time,
  score,
  correctAnswers,
  name,
  onClose,
}: Props) {
  const handleClose = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const SHARE_TEXT = `ehadah.at - אחתאחד - ${name}
הצלחתי ${score} תוך ${formatTime(time)}
${correctAnswers.join("")}`;

  return (
    <Dialog onOpenChange={handleClose} defaultOpen={true}>
      <DialogContent dir="rtl" className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle className="text-center">הסוף</DialogTitle>
          <DialogDescription className="text-center pt-4">
            <p>{correctAnswers.join("")}</p>
            <p>מחר סט חדש, תבואו</p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-2">
            <TrophyIcon className="h-6 w-6" />
            <p>
              {score} נכונים תוך {formatTime(time)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <XIcon className="h-6 w-6" />
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                SHARE_TEXT
              )}`}
              target="_blank"
            >
              <Button
                variant="outline"
                onClick={() => {
                  trackShare(score, formatTime(time), "twitter");
                }}
              >
                שתף ב-X
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <SmartphoneIcon className="h-6 w-6" />
            <Link
              target="_blank"
              href={`whatsapp://send?text=${encodeURIComponent(SHARE_TEXT)}`}
            >
              <Button
                variant="outline"
                onClick={() => {
                  trackShare(score, formatTime(time), "whatsapp");
                }}
              >
                שתף ב-WhatsApp
              </Button>
            </Link>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" onClick={() => onClose()} type="submit">
            נסה שוב
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
    </svg>
  );
}
