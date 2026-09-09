import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { EducationProps } from "@/utils/education";

import { Award } from "lucide-react";

export function CardEducation({ name, description, period } : EducationProps) {
    return (
        <Card
            className="
        group relative w-full max-w-md overflow-hidden
        rounded-md
        border border-zinc-700/70
        bg-[#181818]
        shadow-[0_4px_12px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:scale-[1.02]
        hover:border-zinc-600

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
      "
        >
            <CardHeader className="flex min-h-64 flex-col items-center justify-center px-6 py-8 text-center">
                <div
                    className="
            mb-5
            flex h-16 w-16 items-center justify-center
            rounded-full
            border border-zinc-700
            bg-zinc-800/60
            text-zinc-300
            transition-all duration-300
            group-hover:border-rose-500/40
            group-hover:bg-zinc-800
          "
                >
                    <svg width="0" height="0" className="absolute">
                        <defs>
                            <linearGradient
                                id="award-gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#f43f5e" />
                                <stop offset="50%" stopColor="#ef4444" />
                                <stop offset="100%" stopColor="#fb7185" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <Award
                        size={28}
                        strokeWidth={1.7}
                        className="
      text-zinc-300
      transition-all duration-300
      group-hover:scale-110
    "
                        stroke="url(#award-gradient)"
                    />
                </div>

                <CardTitle
                    className="
            text-xl font-semibold text-zinc-100
            transition-colors duration-300
            group-hover:bg-gradient-to-r
            group-hover:from-rose-500
            group-hover:via-red-500
            group-hover:to-rose-400
            group-hover:bg-clip-text
            group-hover:text-transparent
          "
                >
                    {name}
                </CardTitle>

                <div
                    className="
            my-3 h-px w-10
            bg-zinc-700
            transition-all duration-300
            group-hover:w-16
            group-hover:bg-gradient-to-r
            group-hover:from-rose-500
            group-hover:via-red-500
            group-hover:to-rose-400
          "
                />

                <CardDescription
                    className="
            max-w-sm
            text-md leading-relaxed
            text-zinc-400
          "
                >
                    {description}
                </CardDescription>

                <span
                    className="
            mt-4
            text-sm font-medium
            tracking-wide
            text-zinc-500
          "
                >
                    {period}
                </span>
            </CardHeader>
        </Card>
    );
}
