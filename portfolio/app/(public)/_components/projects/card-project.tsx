import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BadgeProjects } from "./badge-projects";
import { BenefitsCard } from "./benefits-card";
import { ProjectsProps } from "@/utils/projects";
import { TechnologiesCard } from "./technologies-card";
import { ArrowRight, Layers, Link2, LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CardProjectsProps {
    project: ProjectsProps;
}

export function CardProjects({ project }: CardProjectsProps) {
    return (
        <Card
            className="
            group relative w-full overflow-hidden rounded-md
            border border-zinc-700/70
            px-2
            bg-[#181818]
            shadow-[0_4px_12px_rgba(0,0,0,0.35)]
                
            after:absolute
            after:inset-y-0
            after:-left-1/2
            after:w-1/3
            after:skew-x-[-20deg]
            after:bg-gradient-to-r
            after:from-transparent
            after:via-white/10
            after:to-transparent
            after:transition-all
            after:duration-700
            after:content-['']
                
            hover:after:left-[120%]
            duration-300
    "
        >
            <CardHeader className="flex flex-col lg:flex-row justify-center min-h-[22rem] gap-4">
                <div className="flex flex-col px-4 py-3 gap-6 w-full">
                    <BadgeProjects type={project.type} />

                    <div className="flex flex-col gap-2">
                        <CardTitle className="flex items-center gap-4 text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-rose-500 via-red-500 to-rose-400 bg-clip-text text-transparent">
                            {project.name}
                        </CardTitle>
                        <CardDescription className="text-md text-wrap lg:text-lg max-w-4xl">
                            {project.description}
                        </CardDescription>
                    </div>

                    <div className="flex flex-wrap justify-start items-center gap-4">
                        {project.benefits.map((benefit, index) => (
                            <BenefitsCard
                                icon={benefit.icon}
                                name={benefit.name}
                                key={index}
                            />
                        ))}
                        {/* <BenefitsCard />
                        <BenefitsCard /> */}
                    </div>
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        quality={90}
                        priority
                    />
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
                <div className="w-full h-[1px] bg-zinc-800 rounded-full"></div>
                <div className="flex items-center text-zinc-400 gap-2">
                    <Layers size={20} />
                    <h3 className="text-xl font-medium">
                        Tecnologias Utilizadas
                    </h3>
                </div>
                <div className="flex justify-center sm:justify-normal items-center flex-wrap pb-3 pt-0 gap-4 mt-2">
                    {project.technologies.map((technologie, index) => (
                        <TechnologiesCard
                            key={index}
                            icon={technologie.icon}
                            name={technologie.name}
                            label={technologie.label}
                        />
                    ))}
                </div>
            </CardContent>
            <CardFooter className="bg-transparent border-0 pb-6 flex justify-center sm:justify-normal items-center">
                <Link href={project.link!} target="_blank">
                    <Button
                        className="
            flex justify-between items-center gap-3
            font-extrabold cursor-pointer
            w-44 h-10 px-4 text-md rounded-full
            border
            bg-gradient-to-r from-rose-700 via-red-600 to-rose-500
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]
            hover:brightness-110
        "
                    >
                        <div className="flex justify-center items-center gap-2">
                            <LinkIcon />
                            <span>Ver projeto</span>
                        </div>

                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
