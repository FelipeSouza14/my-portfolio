import { LucideIcon } from "lucide-react";

interface BenefitsCardProps {
    icon: LucideIcon;
    name: string;
}

export function BenefitsCard({ icon, name } : BenefitsCardProps) {
    const IconComponent = icon

    return (
        <div className="flex justify-center items-center text-white/60 font-semibold w-fit h-fit px-3 py-2 gap-2 rounded-2xl border-[1px] border-white/20 bg-[#222222]">
            <IconComponent size={20} className="text-cyan-600"/>
            <span className="text-md">{name}</span>
        </div>
    );
}
