import { NavigationProps } from "@/utils/navigation";

export function LinkNavigation({ label, value } : NavigationProps) {
    return (
        <a
            href={value}
            className="whitespace-nowrap px-1.5 py-1 text-zinc-300 transition-all duration-300 hover:scale-110 hover:text-rose-500 sm:px-2"
        >
            {label}
        </a>
    );
}
