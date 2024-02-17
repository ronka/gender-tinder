import { Button } from "./button";

export const StartGameFramgent: React.FC<{ onStartGame: () => void }> = ({
  onStartGame,
}) => {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <div className="text-center space-y-2 text-gray-500 dark:text-gray-400">
        Swipe right ➡️ for correct <br />
        swipe left ⬅️ for incorrect
      </div>
      <Button className="w-full max-w-xs" onClick={onStartGame}>
        Start
      </Button>
    </div>
  );
};
