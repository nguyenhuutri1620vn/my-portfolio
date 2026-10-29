import type { CollectionEntry } from 'astro:content';
import ClickhouseSuperset from './ClickhouseSuperset.astro';
import DeltaBuild from './DeltaBuild.astro';
import FuturePriceReview from './FuturePriceReview.astro';
import InsightDashboard from './InsightDashboard.astro';
import PlatformOverview from './PlatformOverview.astro';
import ValueAnalysis from './ValueAnalysis.astro';

export type DiagramName = CollectionEntry<'case-studies'>['data']['diagram'];

export const diagrams = {
  'platform-overview': PlatformOverview,
  'insight-dashboard': InsightDashboard,
  'value-analysis': ValueAnalysis,
  'clickhouse-superset': ClickhouseSuperset,
  'future-price-review': FuturePriceReview,
  'delta-build': DeltaBuild,
} satisfies Record<DiagramName, unknown>;
