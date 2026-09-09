
export interface EducationProps {
    name: string;
    description: string;
    period: string;
}


export const education: EducationProps[] = [
    {
        name: "Redes de Computadores - IMD/UFRN",
        description:
            "Curso técnico com foco em redes, desenvolvimento, infraestrutura, protocolos e fundamentos de segurança.",
        period: "Mar 2026 — Atualmente",
    },
    {
        name: "Sistemas de Informação - UFRN",
        description:
            "Graduação com foco em desenvolvimento de software, sistemas, dados e tecnologia.",
        period: "Mar 2022 — Dez 2025",
    },
    {
        name: "Potência Tech Angular Developer - Powered by iFood",
        description:
            "Bootcamp de 75h focado em Angular, desenvolvimento web e criação de projetos práticos.",
        period: "Jun 2025",
    },
    {
        name: "Bradesco — GenAI & Dados",
        description:
            "Formação de 52h em IA generativa e dados, com desenvolvimento de uma assistente de voz.",
        period: "Jan 2026 — Abr 2026",
    },
];

