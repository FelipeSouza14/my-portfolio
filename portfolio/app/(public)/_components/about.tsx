import Image from "next/image";
import profileImg from "../../../public/profile-image.jpg";
import SpaceBackground from "./space-background";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <section className="relative flex justify-center items-center min-h-screen overflow-hidden bg-black/75 p-10">
            <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 w-full max-w-5xl p-4">
                <div className="w-full max-w-xl space-y-2">
                    <div className="flex flex-col text-white gap-3 p-2">
                        <h2 className="text-5xl font-extrabold">
                            Bem vindo ao meu universo! 🚀
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

                    <Link href="/felipe-curriculo-estagio.pdf" download className="p-2">
                        <Button className="group gap-3 cursor-pointer relative w-fit px-4 py-6 overflow-hidden bg-zinc-800 border border-zinc-600 hover:bg-zinc-700">
                            <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]" />
                            <Download size={20} />
                            Baixar Currículo
                        </Button>
                    </Link>
                </div>

                <div className="relative w-65 h-65 lg:w-80 lg:h-80 flex items-center justify-center hover:scale-110 duration-300">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-xl" />

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