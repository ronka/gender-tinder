import { track } from "@vercel/analytics";

export function trackStartGame() {
  track("startGame");
}

export function trackEndGame(score: number, time: string) {
  track("endGame", { score, time });
}

export function trackShare(
  score: number,
  time: string,
  type: "whatsapp" | "twitter"
) {
  track("share", { score, time, type });
}

export function trackResetGame() {
  track("resetGame");
}
