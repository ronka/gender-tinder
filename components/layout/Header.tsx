import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-white text-black">
      <Button className="bg-transparent text-xl font-bold text-red-600">
        Gender Tinder
      </Button>
    </header>
  );
}
