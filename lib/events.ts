import { track } from "@vercel/analytics";

export function trackStartGame() {
  track("startGame");
}

export function trackEndGame(score: number, time: string) {
  track("endGame", { score, time });
}

export function trackResetGame() {
  track("resetGame");
}
