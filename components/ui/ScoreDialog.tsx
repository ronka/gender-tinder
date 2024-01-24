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

interface Props {
  correctAnswers: number;
  onClose: () => void;
}

export function ScoreDialog({ correctAnswers, onClose }: Props) {
  const handleClose = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog onOpenChange={handleClose} defaultOpen={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Wrong Answer</DialogTitle>
          <DialogDescription>
            Correct Answers: {correctAnswers}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
