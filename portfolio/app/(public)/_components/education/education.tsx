import { education } from "@/utils/education";
import { SectionHeader } from "../section-header";
import { CardEducation } from "./card-education";

export function Education() {
    return (
        <section
            id="education"
            className="relative min-h-screen overflow-hidden bg-black/75 p-15"
        >
            <SectionHeader
                title="Educação"
                description="Minha trajetória acadêmica e profissional, construída por meio de estudos, certificações e experiências que contribuem para meu crescimento contínuo."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-10 mt-10">
                {education.map((educ, index) => (
                    <CardEducation
                        key={index}
                        name={educ.name}
                        description={educ.description}
                        period={educ.period}
                    />
                ))}
            </div>
        </section>
    );
}
