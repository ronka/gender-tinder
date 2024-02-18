import { Button } from "./button";

export const StartGameFramgent: React.FC<{
  onStartGame: () => void;
  name: string;
}> = ({ onStartGame, name }) => {
  return (
    <div
      className="space-y-4 flex flex-col items-center justify-center"
      dir="rtl"
    >
      <h2>{name}</h2>
      <div className="text-center space-y-2 text-gray-500 dark:text-gray-400">
        החלק לצד הנכון <br />
        אחד ⬅️ <br />
        אחת ➡️
      </div>
      <Button className="w-full max-w-xs" onClick={onStartGame}>
        התחל 🚀
      </Button>
    </div>
  );
};
