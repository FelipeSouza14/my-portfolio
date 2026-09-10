import Image from "next/image";
// import { Header } from "./_components/header";
import { Hero } from "./_components/hero/hero";
import { About } from "./_components/about/about";
import SpaceBackground from "./_components/space-background-dois";
import { Skills } from "./_components/skills/skills";
import { Experience } from "./_components/experience/experience";
import { Projects } from "./_components/projects/projects";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";
import { Education } from "./_components/education/education";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black">
            <div className="pointer-events-none fixed inset-0 z-0">
                <SpaceBackground />
            </div>

            <div className="relative z-10">
                <Header />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Footer />
            </div>
        </main>
    );
}
