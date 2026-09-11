import { SectionHeader } from "../section-header";
import { CardSkills } from "./card-skills";
import { skills } from "@/utils/skills";

export function Skills() {
    return (
        <section id="skills" className="relative min-h-screen overflow-hidden bg-black/75 p-6 pt-16">
            <SectionHeader
                title="Habilidades"
                description="Tecnologias que utilizo para transformar ideias em soluções digitais."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
                {skills.map((skill) => {
                    return (
                        <CardSkills
                            key={skill.id}
                            icon={skill.icon}
                            title={skill.title}
                            stacks={skill.stacks}
                        />
                    );
                })}
            </div>
        </section>
    );
}
