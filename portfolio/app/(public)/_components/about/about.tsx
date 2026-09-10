import Image from "next/image";
import profileImg from "../../../../public/profile-image-2.jpeg";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <section
            id="about"
            className="relative flex justify-center items-center min-h-screen overflow-hidden bg-black/75 p-10"
        >
            <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 w-full max-w-7xl p-4">
                <div className="w-full max-w-xl space-y-2">
                    <div className="flex flex-col text-white gap-3 p-2">
                        <h2 className="text-5xl font-extrabold">
                            Bem vindos ao meu{" "}
                            <span className="text-6xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-400 bg-clip-text text-transparent">
                                universo!
                            </span>{" "}
                            🚀
                        </h2>

                        <p className="text-lg text-justify text-zinc-400">
                            Sou desenvolvedor Full-Stack Jr e bacharel em
                            Sistemas de Informação pela UFRN, atualmente
                            cursando técnico em Redes de Computadores no
                            IMD/UFRN. Gosto de aprender na prática, transformar
                            ideias em projetos e encarar novos desafios. Estou
                            sempre buscando evoluir, experimentar coisas novas e
                            encontrar novas formas de fazer acontecer. Explore
                            um pouco do que venho construindo nessa jornada e
                            divirta-se!
                        </p>
                    </div>

                    <Link
                        href="/felipe-curriculo-estagio.pdf"
                        download
                        className="flex justify-center lg:justify-start items-center p-2 mt-8 md:mt-0"
                    >
                        <Button
                            className="
            group
            gap-3 cursor-pointer
            relative w-fit px-4 py-6
            overflow-hidden
            font-bold
            rounded-full
            border
            bg-gradient-to-r from-rose-700 via-red-600 to-rose-500
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]
            hover:brightness-110
        "
                        >
                            
                            <span
                                className="
                absolute inset-y-0 -left-full
                w-1/2
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                skew-x-[-20deg]
                transition-transform duration-700
                group-hover:translate-x-[300%]
            "
                            />

                            <Download
                                size={20}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />

                            <span>Baixar Currículo</span>
                        </Button>
                    </Link>
                </div>

                <div className="relative w-65 h-65 lg:w-80 lg:h-80 flex items-center justify-center hover:scale-110 duration-300 mt-10 md:mt-0">
                    <div className="absolute inset-0 rounded-full bg-rose-400/40 blur-xl" />

                    <div className="relative w-65 h-65 lg:w-80 lg:h-80 rounded-full border border-white overflow-hidden">
                        <Image
                            src={profileImg}
                            alt="Foto de perfil do meu portfólio"
                            fill
                            className="object-cover"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
