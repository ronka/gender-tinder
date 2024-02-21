import { track } from "@vercel/analytics";

export function trackStartGame() {
  track("startGame");
}

export function trackEndGame(score: number) {
  track("endGame", { score });
}

export function trackResetGame() {
  track("resetGame");
}
