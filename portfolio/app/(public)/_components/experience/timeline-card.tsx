import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TimelineItem } from "../../../../utils/timeline-data";

interface TimelineCardProps {
    item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
    return (
        <Card
            className="
        group
        relative
        w-full
        max-w-2xl
        overflow-hidden
        rounded-md
        border
        border-zinc-700/70
        bg-[#181818]
        px-2
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
            <CardHeader className="relative">
                <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-rose-500 via-red-500 to-rose-400 bg-clip-text text-transparent">
                    {item.title}
                </CardTitle>

                <p className="text-md font-medium text-zinc-500">
                    {item.company}
                </p>
            </CardHeader>

            <CardContent className="relative">
                <ul className="space-y-4">
                    {item.description.map((description) => (
                        <li key={description} className="flex items-start gap-2 text-lg text-zinc-300">

                            <span className=" mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400"/>

                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
