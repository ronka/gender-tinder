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
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "@/service/LocalStorage";

export const SwipeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useOnMount(() => {
    const savedDialogState = getDataFromLocalStorage<boolean>("isDialogOpen");
    if (savedDialogState !== null) {
      setIsOpen(savedDialogState);
    }
  });

  const closeDialog = () => {
    setIsOpen(false);
    // Save the dialog state to local storage when it's closed
    setDataInLocalStorage("isDialogOpen", false);
  };
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
