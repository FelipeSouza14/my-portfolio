import Image from "next/image";
// import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import SpaceBackground from "./_components/space-background";
import { Skills } from "./_components/skills/skills";
import { Experience } from "./_components/experience/experience";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black">
            <div className="pointer-events-none fixed inset-0 z-0">
                <SpaceBackground />
            </div>

            <div className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
            </div>
        </main>
    );
}
