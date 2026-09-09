export interface TimelineItem {
    period: string;
    title: string;
    company: string;
    description: string[];
}

export const timeline: TimelineItem[] = [
    {
        period: "Mar 2026 — Atualmente",
        title: "Desenvolvedor Full-Stack",
        company: "Projeto ConsultaJá",
        description: [
            "Desenvolvimento de aplicação SaaS com Next.js, React, Node.js e PostgreSQL;",
            "Implementação de autenticação, controle de permissões, integrações com serviços externos e modelagem de dados.",
        ],
    },
    {
        period: "Jun 2024 — Dez 2025",
        title: "Desenvolvedor Mobile",
        company:
            "Laboratório de Inteligência Computacional Aplicada a Negócios",
        description: [
            "Desenvolvimento de aplicativo mobile com React Native, TypeScript, Node.js e NestJS;",
            "Desenvolvimento de 30+ interfaces, com foco em usabilidade, acessibilidade e responsividade;",
            "Trabalho publicado em artigo pela Sociedade Brasileira de Computação (SBC).",
        ],
    },
    {
        period: "Mar 2023 — Ago 2025",
        title: "Pesquisador e Cientista de Dados",
        company:
            "Laboratório de Inteligência Computacional Aplicada a Negócios",
        description: [
            "Desenvolvimento de projetos de Machine Learning com Python, Pandas e Scikit-learn, utilizando dados reais;",
            "Desenvolvimento de modelos preditivos para previsão climática, utilizando dados do INMET e analisando padrões de temperatura no Nordeste;",
            "Análise de dados odontológicos com Machine Learning, com resultados publicados em 2 artigos científicos pela SBC.",
        ],
    },
];
