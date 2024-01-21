import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#ffffff] p-4">
      <header className="flex items-center justify-between p-4 bg-white text-black">
        <Button className="bg-transparent text-xl font-bold text-red-600">
          Tinder
        </Button>
        <Button className="bg-transparent text-sm font-semibold text-gray-800">
          Recommendations
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center rounded-3xl bg-gray-100 p-8">
          <div className="relative">
            <div
              className="h-[500px] w-[300px] rounded-2xl object-cover flex items-center justify-center text-6xl"
              style={{
                aspectRatio: "300/500",
              }}
            >
              <div className="absolute opacity-20 text-9xl">😊</div>
              <div className="absolute">😊</div>
              <div className="absolute top-60">
                <span className="text-black text-lg font-semibold">Demo</span>
              </div>
            </div>
            <div className="absolute bottom-4 flex items-center justify-between w-full px-4">
              <div className="flex items-center space-x-2">
                <span className="text-black text-lg font-semibold">Male</span>
              </div>
              <span className="text-black text-lg font-semibold">Female</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center p-4 bg-white text-black">
        <p className="text-center text-sm">
          © 2024 Tinder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
