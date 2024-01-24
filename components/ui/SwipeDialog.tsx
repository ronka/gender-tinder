"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { useOnMount } from "@/hooks/useOnMount";
import { useState } from "react";

export const SwipeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useOnMount(() => {
    setIsOpen(true);
  });

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>How to use</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Swipe right ➡️ for correct, swipe left ⬅️ for incorrect
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
