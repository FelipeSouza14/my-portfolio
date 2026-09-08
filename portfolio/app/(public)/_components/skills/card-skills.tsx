import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentSkills } from "./component-skills";
import type { LucideIcon } from "lucide-react";

interface StackProps {
    icon: string;
    name: string;
    label: string;
}

interface CardSkillsProps {
    icon: LucideIcon;
    title: string;
    stacks: StackProps[];
}

export function CardSkills({ icon, title, stacks }: CardSkillsProps) {
    const IconComponent = icon;

    return (
        <Card
            className="
            group relative w-full overflow-hidden rounded-md
            border border-zinc-700/70
            px-2
            bg-[#111111]
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
            hover:scale-[103%]
            duration-300
    "
        >
            <CardHeader className="px-4 py-3">
                <CardTitle className="flex items-center gap-4 text-sm font-semibold text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800 text-[10px] text-zinc-300">
                        <IconComponent size={30} />
                    </span>
                    <span className="text-2xl">{title}</span>
                </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-2 md:grid-cols-3 px-3 pb-3 pt-0 gap-4">
                {stacks.map((stack, index) => {
                    return (
                        <ComponentSkills
                            key={index}
                            icon={stack.icon}
                            name={stack.name}
                            label={stack.label}
                        />
                    );
                })}
            </CardContent>
        </Card>
    );
}
