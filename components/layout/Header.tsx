import { Button } from "@/components/ui/button";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between p-4 bg-white text-black"
      dir="rtl"
    >
      <Menu />

      <Link href="/">
        <span className="bg-transparent text-xl font-bold">אחד</span>
        <span className="bg-transparent text-xl font-bold text-red-600">
          אחת
        </span>
      </Link>

      <div />
    </header>
  );
}
