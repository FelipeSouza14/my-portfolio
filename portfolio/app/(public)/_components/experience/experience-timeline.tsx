"use client";

import { Badge } from "@/components/ui/badge";

import { timeline } from "../../../../utils/timeline-data";
import { TimelineItem } from "./timeline-item";
import { TimelineCard } from "./timeline-card";

export function ExperienceTimeline() {
    return (
        <section className=" relative mx-auto w-full py-20">
            {/* <Badge
          variant="outline"
          className="
            mb-4
            rounded-full
            border-zinc-700
            px-4
            py-1
            text-zinc-400
          "
        >
          Minha trajetória
        </Badge> */}

            {/* Timeline */}
            <div className="relative">
                {/* Linha central */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />

                <div className="hidden md:block space-y-20">
                    {timeline.map((item, index) => (
                        <TimelineItem
                            key={`${item.company}-${item.period}`}
                            item={item}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </div>

                <div className="block md:hidden flex flex-col gap-16">
                        {timeline.map((item, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                <span className="whitespace-nowrap text-sm font-bold text-zinc-500">{item.period}</span>
                                <TimelineCard item={item}/>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
