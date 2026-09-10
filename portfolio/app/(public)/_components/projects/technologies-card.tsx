import Image from "next/image";

interface TechnologiesCardProps {
    icon: string;
    name: string;
    label: string;
}

export function TechnologiesCard({ icon, name, label } : TechnologiesCardProps) {
    return (
        <div className="flex justify-start items-center text-white/60 font-semibold w-full max-w-36 h-14 px-3 py-3 gap-3 rounded-md border-[1px] border-zinc-700 bg-[#222222]">
            <Image 
                src={icon}
                alt={label}
                width={30}
                height={30}
                quality={100}
                priority
            />
            <span className="text-md">{name}</span>
        </div>
    );
}
