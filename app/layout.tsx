import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GameResultsProvider } from "@/context/GameResultContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "אחדאחת",
  description: "משחק מילים לתרגול העברית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable,
          inter.className
        )}
      >
        <GameResultsProvider>{children}</GameResultsProvider>
        <Analytics />
      </body>
    </html>
  );
}
