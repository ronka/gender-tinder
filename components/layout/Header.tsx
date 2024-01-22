import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black">
      <Button className="bg-transparent text-xl font-bold text-red-600">
        Tinder
      </Button>
      <Button className="bg-transparent text-sm font-semibold text-gray-800">
        Recommendations
      </Button>
    </header>
  );
}
