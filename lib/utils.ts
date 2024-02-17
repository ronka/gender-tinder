import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(milliseconds: number): string {
	// Calculate minutes, seconds, and milliseconds
	const minutes = Math.floor(milliseconds / 60000);
	const seconds = Math.floor((milliseconds % 60000) / 1000);
	const ms = milliseconds % 1000;
  
	// Format the output to ensure two digits for minutes and seconds, and three digits for milliseconds
	const formattedMinutes = minutes.toString().padStart(2, '0');
	const formattedSeconds = seconds.toString().padStart(2, '0');
	const formattedMilliseconds = ms.toString().padStart(3, '0');
  
	return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }