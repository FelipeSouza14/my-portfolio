import { navigation } from "@/utils/navigation";
import { LinkNavigation } from "./link-navigation";

export function NavHeader() {
    return (
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-center">
            <div
                className="
                        flex flex-wrap items-center justify-center
                        gap-2
                        px-2 py-2
                        text-xs sm:text-sm font-semibold
                        sm:gap-3 sm:px-3
                        md:gap-5
                        lg:gap-6
                    "
            >
                {navigation.map((nav, index) => (
                    <LinkNavigation key={index} label={nav.label} value={nav.value}/>
                ))}
            </div>
        </nav>
    );
}
