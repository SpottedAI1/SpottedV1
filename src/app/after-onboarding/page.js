import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <SideBar />
      <div className="flex-1">
        <Hero />
      </div>
    </main>
  );
}
