import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className="flex items-center justify-center p-4 bg-white text-black"
      dir="rtl"
    >
      <span className="bg-transparent text-xl font-bold">אחד</span>
      <span className="bg-transparent text-xl font-bold text-red-600">אחת</span>
    </header>
  );
}
