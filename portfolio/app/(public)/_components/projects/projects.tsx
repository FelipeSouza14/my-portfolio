import { projects } from "@/utils/projects";
import { SectionHeader } from "../section-header";
import { CardProjects } from "./card-project";


export function Projects() {
    return (
        <section id="projects" className="relative min-h-screen overflow-hidden bg-black/75 p-15">

            <SectionHeader
                title="Projetos"
                description="Alguns dos projetos que desenvolvi ao longo da minha jornada na tecnologia."
            />

            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 mt-10">
                {
                    projects.map((project, index) => (
                        <CardProjects project={project} key={index}/>
                    ))
                }
            </div>
        </section>
    );
}
