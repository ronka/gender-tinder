"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Button } from "@/components/ui/button";
import useGameData from "@/hooks/useGameData";

export default function Home() {
  const game = useGameData();
  return game ? <MainContent game={game} /> : <>loading</>;
}
