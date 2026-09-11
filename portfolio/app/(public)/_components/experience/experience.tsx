import { SectionHeader } from "../section-header";
import { ExperienceTimeline } from "./experience-timeline";

export function Experience() {
    return (
        <section id="experience" className="relative min-h-screen overflow-hidden bg-black/75 p-6 pt-16">
            <SectionHeader
                title="Experiência"
                description="Minha trajetória profissional e acadêmica, marcada por aprendizado, projetos e evolução constante."
            />

            <ExperienceTimeline />
            
        </section>
    );
}
