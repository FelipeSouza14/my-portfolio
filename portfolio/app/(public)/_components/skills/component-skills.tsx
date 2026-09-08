import Image from "next/image";

interface ComponentSkillsProps {
    icon: string;
    name: string;
    label: string;
}

export function ComponentSkills({ icon, name, label }: ComponentSkillsProps) {
    return (
        <div className="flex h-fit p-4 flex-col items-center justify-center gap-3 rounded-[3px] border border-zinc-800 bg-[#181818]">
            {name === "GitHub" ? (
                <div className={`w-10 h-10 bg-white rounded-full`}>
                    <Image
                        src={icon}
                        width={40}
                        height={40}
                        alt={label}
                        quality={100}
                        priority
                    />
                </div>
            ) : (
                <Image
                    src={icon}
                    width={40}
                    height={40}
                    alt={label}
                    quality={100}
                    priority
                />
            )}

            <span className="text-md lg:text-lg font-medium text-zinc-300">
                {name}
            </span>
        </div>
    );
}
