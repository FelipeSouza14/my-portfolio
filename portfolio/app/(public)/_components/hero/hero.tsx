import { ChevronsDown } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
// import Planet from "./planet";

export function Hero() {
    const socialMediaLinks = [
        {
            icon: FiLinkedin,
            label: "LinkedIn",
            path: "https://www.linkedin.com/in/felipesouza14/",
        },
        {
            icon: FaGithub,
            label: "GitHub",
            path: "https://github.com/FelipeSouza14",
        },
        {
            icon: FaInstagram,
            label: "Instagram",
            path: "https://www.instagram.com/felipesouza_bs/",
        },
    ];

    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="relative z-10 flex flex-col items-center text-center text-white">
                <div className="flex justify-center items-center gap-4 mb-3">
                    <span className="h-[2.5px] w-10 bg-rose-500" />
                    <p className="text-base font-bold tracking-[0.12em] md:text-xl">
                        Opa! Meu nome é
                    </p>
                    <span className="h-px w-10 bg-rose-500" />
                </div>

                <h1 className="font-extrabold text-5xl tracking-[0.04em] text-transparent md:text-7xl lg:text-8xl space-x-4">
                    <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-400 bg-clip-text text-transparent">Felipe</span> 
                    <span className="[-webkit-text-stroke:2px_white]">
                        Souza
                    </span>
                </h1>

                {/* <h3 className="mt-7 text-xl">
                    {" "}
                    &lt; <span className="font-extrabold text-red-400">Desenvolvedor Full-Stack</span> &gt;{" "}
                </h3> */}

                <div className="mt-7 flex items-center gap-5">
                    {socialMediaLinks.map((social, index) => {
                        const IconComponent = social.icon;

                        return (
                            <div
                                key={social.label}
                                className="flex justify-between items-center gap-6"
                            >
                                {index > 0 && (
                                    <span className="h-5 w-[2.5px] bg-rose-500" />
                                )}

                                <Link
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-white transition-transform duration-300 hover:scale-125"
                                >
                                    <IconComponent
                                        className="h-7 w-7"
                                        strokeWidth={2.5}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className="
                    absolute
                    bottom-15
                    left-1/2
                    z-10
                    -translate-x-1/2
                    text-white
                    animate-bounce
                "
            >
                <ChevronsDown className="h-9 w-9" strokeWidth={2.5} />
            </div>
        </section>
    );
}
