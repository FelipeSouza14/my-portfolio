import type { LucideIcon } from "lucide-react";
import {
    CalendarCheck,
    LayoutGrid,
    Settings,
    ShieldCheck,
    Star,
    User,
    Zap,
} from "lucide-react";

export interface ProjectsProps {
    type: "Web" | "Mobile";
    name: string;
    description: string;
    benefits: {
        icon: LucideIcon;
        name: string;
    }[];
    image: string;
    technologies: {
        icon: string;
        name: string;
        label: string;
    }[];
    link?: string;
}

export const projects: ProjectsProps[] = [
    {
        type: "Web",
        name: "ConsultaJá",
        description:
            "Plataforma web para gerenciamento de agendamentos, com autenticação, armazenamento de imagens em nuvem, planos por assinatura e integração com o gateway de pagamentos, Stripe. Desenvolvida com foco em praticidade e automação. Permite organizar consultas, horários e informações de forma simples e intuitiva.",
        benefits: [
            {
                icon: Zap,
                name: "Rápido",
            },
            {
                icon: CalendarCheck,
                name: "Agendamentos",
            },
            {
                icon: Settings,
                name: "Automação",
            },
        ],
        image: "/consultaja-image.png",
        technologies: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                name: "TypeScript",
                label: "Icone do TypeScript",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                name: "React",
                label: "Icone do React",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                name: "Next.js",
                label: "Icone do Next.js",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                name: "Tailwind CSS",
                label: "Icone do Tailwind",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                name: "PostgreSQL",
                label: "Icone do PostgreSQL",
            },
        ],
        link: "https://consultaja-saas.vercel.app/",
    },
    {
        type: "Web",
        name: "Apex Legends Project",
        description:
            "Aplicação web inspirada em Apex Legends, desenvolvida para explorar lendas, mapas e itens do jogo. Possui autenticação de usuários com Firebase e sistema de favoritos para personalizar a experiência.",
        benefits: [
            {
                icon: ShieldCheck,
                name: "Autenticação",
            },
            {
                icon: Star,
                name: "Favoritos",
            },
            {
                icon: LayoutGrid,
                name: "Catálogo",
            },
        ],
        image: "/apex-project-image.png",
        technologies: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                name: "JavaScript",
                label: "Icone do JavaScript",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                name: "React",
                label: "Icone do React",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                name: "Next.js",
                label: "Icone do Next.js",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                name: "CSS3",
                label: "Icone do CSS3",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
                name: "Firebase",
                label: "Icone do Firebase",
            },
        ],
        link: "https://apex-legends-project.vercel.app/",
    },
];
