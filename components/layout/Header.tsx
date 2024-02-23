import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="flex items-center justify-center p-4 bg-white text-black"
      dir="rtl"
    >
      <Link href="/">
        <span className="bg-transparent text-xl font-bold">אחד</span>
        <span className="bg-transparent text-xl font-bold text-red-600">
          אחת
        </span>
      </Link>
      {/* <br />
      <Link href="/statistics">Statistics</Link> */}
    </header>
  );
}
