import type { CollectionEntry } from 'astro:content';
import ClickhouseSuperset from './ClickhouseSuperset.astro';
import InsightDashboard from './InsightDashboard.astro';
import KafkaExports from './KafkaExports.astro';
import PlatformOverview from './PlatformOverview.astro';
import ValueAnalysis from './ValueAnalysis.astro';

export type DiagramName = CollectionEntry<'case-studies'>['data']['diagram'];

export const diagrams = {
  'platform-overview': PlatformOverview,
  'insight-dashboard': InsightDashboard,
  'value-analysis': ValueAnalysis,
  'clickhouse-superset': ClickhouseSuperset,
  'kafka-exports': KafkaExports,
} satisfies Record<DiagramName, unknown>;
