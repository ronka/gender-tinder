import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#ffffff] p-4">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
