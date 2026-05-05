export const CATEGORIES = [
  {
    id: 'platform' as const,
    pt: 'Plataforma',
    en: 'Platform',
    desc: {
      pt: 'Mensageria, CI/CD, Kubernetes e o tecido conectivo entre serviços.',
      en: 'Messaging, CI/CD, Kubernetes and the connective tissue between services.',
    },
  },
  {
    id: 'backend' as const,
    pt: 'Backend',
    en: 'Backend',
    desc: {
      pt: 'Java, Go, Spring Boot e padrões de API em escala de produção.',
      en: 'Java, Go, Spring Boot and API patterns at production scale.',
    },
  },
  {
    id: 'databases' as const,
    pt: 'Bancos de Dados',
    en: 'Databases',
    desc: {
      pt: 'Oracle, PostgreSQL, modelagem relacional e otimização de queries.',
      en: 'Oracle, PostgreSQL, relational modeling and query optimization.',
    },
  },
  {
    id: 'observability' as const,
    pt: 'Observabilidade',
    en: 'Observability',
    desc: {
      pt: 'Datadog, ELK, Grafana e a arte de entender sistemas em produção.',
      en: 'Datadog, ELK, Grafana and the art of understanding systems in production.',
    },
  },
  {
    id: 'data' as const,
    pt: 'Dados',
    en: 'Data',
    desc: {
      pt: 'Pipelines de dados, analytics e engenharia de dados em geral.',
      en: 'Data pipelines, analytics and data engineering.',
    },
  },
  {
    id: 'career' as const,
    pt: 'Carreira',
    en: 'Career',
    desc: {
      pt: 'Reflexões sobre crescimento profissional, liderança técnica e mercado.',
      en: 'Reflections on professional growth, technical leadership and the market.',
    },
  },
  {
    id: 'ai' as const,
    pt: 'IA',
    en: 'AI',
    desc: {
      pt: 'Inteligência Artificial, LLMs, agentes e aplicações práticas no dia a dia de engenharia.',
      en: 'Artificial Intelligence, LLMs, agents and practical applications in day-to-day engineering.',
    },
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];
