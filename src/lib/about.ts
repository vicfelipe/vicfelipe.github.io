export const TIMELINE = [
  {
    period: { pt: 'Jan 2022 — Mai 2025', en: 'Jan 2022 — May 2025' },
    role: { pt: 'Senior Software Developer', en: 'Senior Software Developer' },
    org: 'americanas s.a.',
    body: {
      pt: 'Aplicações em Java (Spring Boot e Quarkus), TypeScript e Go. APIs RESTful em escala, Kafka e RabbitMQ como Event Broker. Observabilidade com Datadog e ELK. Migração e operação de grande volume de dados utilizando AWS, GCP e Azure. Pipelines GitLab CI/CD com Ansible.',
      en: 'Java (Spring Boot and Quarkus), TypeScript and Go applications. RESTful APIs at scale, Kafka and RabbitMQ as event fabric. Observability with Datadog and ELK. Migrating and operating workloads across AWS, GCP and Azure. GitLab CI/CD pipelines with Ansible.',
    },
    chips: ['Java', 'Spring', 'Go', 'Kafka', 'Oracle', 'AWS'],
  },
  {
    period: { pt: 'Jul 2017 — Dez 2021', en: 'Jul 2017 — Dec 2021' },
    role: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
    org: 'Agross — Atacado de Insumos Agropecuários',
    body: {
      pt: 'PHP/Laravel e Oracle PL/SQL no core. Front-end em Angular, Vue e React. POCs móveis em Flutter e React Native. Modelagem, performance e manutenção de bases relacionais. Soluções de BI para apoiar a tomada de decisão.',
      en: 'PHP/Laravel and Oracle PL/SQL at the core. Frontend in Angular, Vue and React. Mobile POCs in Flutter and React Native. Modeling, performance tuning and maintenance of relational databases. BI solutions to support decision-making.',
    },
    chips: ['PHP', 'Laravel', 'PL/SQL', 'Vue', 'React', 'Flutter'],
  },
  {
    period: { pt: 'Jan 2015 — Jul 2017', en: 'Jan 2015 — Jul 2017' },
    role: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
    org: 'Oficina de Marketing',
    body: {
      pt: 'Desenvolvimento de sites, portais e aplicativos web para clientes diversos. SEO técnico e otimização de performance. Stack PHP + JavaScript com bases MySQL.',
      en: 'Built websites, portals and web apps for a range of clients. Technical SEO and performance tuning. PHP + JavaScript stack on top of MySQL.',
    },
    chips: ['PHP', 'JavaScript', 'MySQL', 'SEO', 'jQuery'],
  },
  {
    period: { pt: 'Jul 2014 — Set 2014', en: 'Jul 2014 — Sep 2014' },
    role: { pt: 'Desenvolvedor Frontend', en: 'Frontend Developer' },
    org: 'Agência Digital Starcorp',
    body: {
      pt: 'Manutenção e implementação dos portais corporativos da Honda e da Toyota Brasil em Microsoft SharePoint. Entrega de funcionalidades, edição de conteúdo privado e atendimento direto ao cliente.',
      en: 'Maintained and implemented Honda and Toyota Brazil corporate portals on Microsoft SharePoint. Shipped features, edited private content and worked directly with clients.',
    },
    chips: ['SharePoint', 'HTML/CSS', 'JavaScript', 'Honda', 'Toyota'],
  },
  {
    period: { pt: 'Nov 2012 — Jun 2014', en: 'Nov 2012 — Jun 2014' },
    role: { pt: 'Analista de Help Desk', en: 'Help Desk Analyst' },
    org: 'Infive Soluções em Informática',
    body: {
      pt: 'Suporte N1/N2, monitoramento de infraestrutura, manutenção de estações, configuração de sistemas e atualização de inventário.',
      en: 'L1/L2 support, infrastructure monitoring, workstation maintenance, system configuration and inventory keeping.',
    },
    chips: ['Windows Server', 'Networking', 'Support', 'ITIL'],
  },
] as const;

export const EDUCATION = [
  {
    period: '2020 — 2021',
    title: {
      pt: 'Pós-graduação · Business Analytics & Data Science',
      en: 'Postgraduate · Business Analytics & Data Science',
    },
    org: 'Anhanguera Educacional',
  },
  {
    period: '2014 — 2018',
    title: {
      pt: 'Bacharelado · Sistemas de Informação',
      en: 'B.Sc. · Information Systems',
    },
    org: 'Universidade Adventista de São Paulo',
  },
] as const;

export const STACK = {
  Languages: ['Java', 'TypeScript', 'Go', 'Python', 'PHP', 'PL/SQL'],
  Frameworks: ['Spring Boot', 'Quarkus', 'Express', 'Next.js', 'React', 'Vue', 'Laravel'],
  Data: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'RabbitMQ'],
  Platform: ['Docker', 'Kubernetes', 'GitLab CI', 'AWS', 'GCP', 'Azure'],
  Observability: ['Datadog', 'ELK', 'Grafana', 'Prometheus'],
} as const;
