// Values that are the same in every language.
export const site = {
  name: 'Tri Huu Nguyen',
  email: 'nguyenhuutri1620vn@gmail.com',
  linkedin: 'https://linkedin.com/in/tri-nguyen-huu',
  github: 'https://github.com/nguyenhuutri1620vn',
  resume: {
    en: '/resume/Backend_TriNguyen.pdf',
    vi: '/resume/Backend_TriNguyen.pdf',
  },
  heroChips: [
    'Go',
    'Ruby on Rails',
    'PostgreSQL',
    'Elasticsearch',
    'ClickHouse',
    'Kafka',
    'Superset',
    'AWS',
    'Docker',
  ],
  // Stack & Experience chips (CONTENT §4); group labels live in ui/*.json under stack.groups.
  stackGroups: {
    backend: [
      'Go',
      'Echo v4',
      'REST APIs',
      'Clean Architecture',
      'Kafka',
      'Ruby',
      'Ruby on Rails',
      'delayed_job',
    ],
    data: ['PostgreSQL (PL/pgSQL)', 'Elasticsearch', 'ClickHouse', 'Amazon Redshift', 'Solr'],
    bi: ['Apache Superset'],
    infra: ['Docker', 'Jenkins', 'AWS S3', 'AWS Redshift', 'AWS Secrets Manager', 'Amazon Lex'],
    frontend: ['React', 'TypeScript', 'Redux Toolkit', 'Redux-Saga', 'Ant Design', 'ExtJS'],
    testing: ['testify', 'RSpec', 'Jest', 'React Testing Library'],
    ai: ['Cursor', 'Claude Code'],
  },
} as const;
