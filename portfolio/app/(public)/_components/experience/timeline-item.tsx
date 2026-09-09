import Image from "next/image";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import { TimelineCard } from "./timeline-card";
import type { TimelineItem as TimelineItemType } from "../../../../utils/timeline-data";

interface TimelineItemProps {
    item: TimelineItemType;
    isLeft: boolean;
}

export function TimelineItem({ item, isLeft }: TimelineItemProps) {
    return (
        <div className="relative grid grid-cols-2 gap-8">
            {/* Lado esquerdo */}
            <div
                className={`flex ${isLeft ? "justify-end mr-4" : "invisible"}`}
            >
                {isLeft && <TimelineCard item={item} />}
            </div>

            {/* Lado direito */}
            <div
                className={`flex ${!isLeft ? "justify-start ml-4" : "invisible"}`}
            >
                {!isLeft && <TimelineCard item={item} />}
            </div>

            {/* Marcador central */}
            <div className=" absolute left-1/2 top-6 z-10 flex w-2 h-2 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-rose-400"></div>

            {/* Data */}
            <div
                className={`absolute top-7 hidden whitespace-nowrap text-sm font-medium text-zinc-500 lg:block ${isLeft ? "left-1/2 ml-10" : "right-1/2 mr-10"}`}
            >
                {item.period}
            </div>
        </div>
    );
}
