export type Lang = 'pt' | 'en';

export const strings = {
  pt: {
    nav_home: 'Home',
    nav_categories: 'Categorias',
    nav_about: 'Sobre',
    nav_github: 'GitHub',
    nav_menu: 'Menu',

    hero_kicker: 'Engenheiro de Software · Hortolândia, BR',
    hero_name: 'Victor Alencastro',
    hero_tagline:
      'Construindo sistemas de back-end resilientes, pipelines de dados e camadas de banco que aguentam o tráfego do mundo real.',
    hero_meta_role: 'Senior Software Developer',
    hero_meta_focus: 'Java · PL/SQL · JS/TS · CI/CD · Observabilidade',
    hero_cta_read: 'Ler últimos artigos',
    hero_cta_about: 'Conhecer meu trabalho',
    hero_status: 'Disponível para conversas',

    sec_recent: 'Artigos recentes',
    sec_recent_sub: 'Notas de produção, postmortems e padrões que reaproveito.',
    sec_categories: 'Categorias',
    sec_categories_sub: 'Tópicos que escrevo com frequência.',
    sec_all_articles: 'Ver todos os artigos',
    sec_archive: 'Arquivo',

    meta_min_read: 'min de leitura',
    meta_published: 'Publicado',
    meta_updated: 'Atualizado',
    meta_category: 'Categoria',
    meta_tags: 'Tags',
    meta_lang_pt: 'PT',
    meta_lang_en: 'EN',
    meta_share: 'Compartilhar',
    meta_back: 'Voltar',
    meta_related: 'Artigos relacionados',
    meta_toc: 'Nesta página',

    cat_title: 'Categorias',
    cat_sub: 'Navegue pelos temas que rondam o backend, dados e plataforma.',
    cat_articles: 'artigos',
    cat_article: 'artigo',

    about_title: 'Sobre',
    about_lede:
      'Sou Victor Alencastro, desenvolvedor full-stack focado em backend, banco de dados Oracle e plataformas distribuídas. Atuo há mais de 12 anos em TI, dos quais 8+ como desenvolvedor. Linguagem é apenas uma ferramenta, o que importa é uma solução eficiente e escalável.',
    about_now_label: 'AGORA',
    about_now_text: 'Trabalhando com Java Spring Boot e desenvolvendo projetos pessoais, estou livre no mercado e disponível para novos desafios.',
    about_loc: 'Hortolândia, São Paulo · Brasil',
    about_email: 'vicfelipe@live.com',
    about_timeline: 'Linha do tempo',
    about_stack: 'Stack',
    about_stack_sub: 'Ferramentas que uso com frequência.',
    about_education: 'Educação',
    about_contact: 'Contato',
    about_contact_sub:
      'Procurando por ajuda especializada para o seu projeto? Entre em contato.',

    footer_tag: 'Sou desenvolvedor de software com experiência sólida em sistemas distribuídos. Amante por discussão para resolver problemas complexos. Codando na prática entre deploys, incidentes e boas decisões.',
    footer_built: 'Feito de ❤️ no interior de São Paulo.',
    footer_rss: 'RSS',
    footer_email: 'Email',
  },
  en: {
    nav_home: 'Home',
    nav_categories: 'Categories',
    nav_about: 'About',
    nav_github: 'GitHub',
    nav_menu: 'Menu',

    hero_kicker: 'Software Engineer · Hortolândia, BR',
    hero_name: 'Victor Alencastro',
    hero_tagline:
      'Building resilient backend systems, data pipelines and database layers that hold up under real-world traffic.',
    hero_meta_role: 'Senior Software Developer',
    hero_meta_focus: 'Java · PL/SQL · JS/TS · CI/CD · Observability',
    hero_cta_read: 'Read latest posts',
    hero_cta_about: 'See my work',
    hero_status: 'Open to conversations',

    sec_recent: 'Recent articles',
    sec_recent_sub: 'Production notes, postmortems and patterns I keep reaching for.',
    sec_categories: 'Categories',
    sec_categories_sub: 'Topics I write about often.',
    sec_all_articles: 'Browse all articles',
    sec_archive: 'Archive',

    meta_min_read: 'min read',
    meta_published: 'Published',
    meta_updated: 'Updated',
    meta_category: 'Category',
    meta_tags: 'Tags',
    meta_lang_pt: 'PT',
    meta_lang_en: 'EN',
    meta_share: 'Share',
    meta_back: 'Back',
    meta_related: 'Related articles',
    meta_toc: 'On this page',

    cat_title: 'Categories',
    cat_sub: 'Browse the themes around backend, data and platform engineering.',
    cat_articles: 'articles',
    cat_article: 'article',

    about_title: 'About',
    about_lede:
      "I'm Victor Alencastro, a full-stack developer focused on backend, Oracle databases and distributed platforms. I've spent 12+ years in IT, 8+ of them shipping software.",
    about_now_label: 'NOW',
    about_now_text: 'Senior Software Developer working with Java, Go and Kafka at e-commerce scale.',
    about_loc: 'Hortolândia, São Paulo · Brazil',
    about_email: 'vicfelipe@live.com',
    about_timeline: 'Timeline',
    about_stack: 'Stack',
    about_stack_sub: 'Tools I reach for often.',
    about_education: 'Education',
    about_contact: 'Contact',
    about_contact_sub:
      'Open to conversations about backend architecture, Oracle performance and event-driven platforms.',

    footer_tag: 'I am a software developer with solid experience in distributed systems. I love the challenge of solving complex problems. I spend my days coding, handling deployments and incidents, and making sound decisions.',
    footer_built: 'Made with ❤️.',
    footer_rss: 'RSS',
    footer_email: 'Email',
  },
} as const;

export type StringKey = keyof typeof strings.pt;

export function useTranslations(lang: Lang) {
  return (key: StringKey): string => strings[lang][key] ?? strings.en[key] ?? key;
}
