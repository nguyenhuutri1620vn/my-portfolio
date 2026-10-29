import type { CollectionEntry } from 'astro:content';
import ClickhouseSuperset from './ClickhouseSuperset.astro';
import DeltaBuild from './DeltaBuild.astro';
import FuturePriceReview from './FuturePriceReview.astro';
import InsightDashboard from './InsightDashboard.astro';
import InsightDrilldown from './InsightDrilldown.astro';
import PlatformOverview from './PlatformOverview.astro';
import ValueAnalysis from './ValueAnalysis.astro';

// The architecture diagram each case names in its frontmatter, plus extra diagrams that MDX
// places by name with <Diagram name="..." />.
export type DiagramName = CollectionEntry<'case-studies'>['data']['diagram'] | 'insight-drilldown';

export const diagrams = {
  'platform-overview': PlatformOverview,
  'insight-dashboard': InsightDashboard,
  'value-analysis': ValueAnalysis,
  'clickhouse-superset': ClickhouseSuperset,
  'future-price-review': FuturePriceReview,
  'delta-build': DeltaBuild,
  'insight-drilldown': InsightDrilldown,
} satisfies Record<DiagramName, unknown>;
