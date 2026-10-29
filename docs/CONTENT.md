# CONTENT — Bilingual copy (EN / VI)

Rules: only use facts below. `[TODO: ...]` = owner must supply; do not guess. Employer and product names are never shown (see CLAUDE.md).
Each block is `EN` then `VI`. Move these into `src/content/ui/{en,vi}.json` and `src/content/case-studies/{en,vi}/*.mdx`.

---
## 0. Global
- Name: Tri Huu Nguyen
- Title: EN `Software Engineer` · VI `Kỹ sư phần mềm`
- Experience badge: EN `5 years` · VI `5 năm`
- Location: Ho Chi Minh City, Vietnam
- Email: nguyenhuutri1620vn@gmail.com
- LinkedIn: https://linkedin.com/in/tri-nguyen-huu
- GitHub: https://github.com/nguyenhuutri1620vn
- Resume: `/resume/Backend_TriNguyen.pdf` for both languages. Owner (Oct 2026): no VI CV; both languages link the one English CV in `public/resume/`.
- Nav (home anchors): EN `Projects · Engineering · Stack · Contact` · VI `Dự án · Kỹ thuật · Công nghệ · Liên hệ`
- No header button or kicker label between home and `/for-clients`.
- Avatar alt: EN `Portrait of Tri Huu Nguyen` · VI `Ảnh chân dung Tri Huu Nguyen`; photo file `public/images/avatar.jpg` [TODO: owner supplies].
- Phone is NOT shown on the site.

## 1. Home hero (Tech Lead / HR)
**Vision**
- EN: Vision: Shared victory.
- VI: Tầm nhìn: Hãy cùng chiến thắng.

**Positioning**
- EN (summary of the CV summary, Oct 2026): Software Engineer with 5 years building data-heavy SaaS for the healthcare supply chain. Strongest in Go: multi-tenant PostgreSQL for 19+ organizations, sub-second Elasticsearch analytics, large Kafka exports and ClickHouse pipelines behind Superset. Also ships Ruby on Rails features in a 12-person team, handles complex rules such as contracts, rebates and pricing, and self-reviews code with Cursor and Claude Code.
- VI (summary, Oct 2026): Kỹ sư phần mềm gần 5 năm xây dựng SaaS nhiều dữ liệu cho chuỗi cung ứng y tế. Mạnh nhất ở Go: PostgreSQL đa tenant cho 19+ tổ chức, phân tích Elasticsearch dưới 1 giây, export lớn qua Kafka và pipeline ClickHouse phía sau Superset. Đồng thời làm tính năng Ruby on Rails trong đội 12 người, vững với quy tắc phức tạp như hợp đồng, rebate và giá, và tự review code bằng Cursor và Claude Code.
**Home hero:** no status pill. Vision shown as `Developer with vision: …` (EN `Developer with vision: Shared victory.` · VI `Developer với tầm nhìn: Cùng nhau chiến thắng.`) at a smaller size, clamp(2rem, 4vw, 3rem). Under the portrait: name, title · experience, location in larger text (no label). The /for-clients hero uses the same layout (shared `ProfileCard`), with the client vision, the accent title line, intro, chips and CTAs; no status pill on either page.
**Hero portrait:** cutout photo `public/images/avatar-cutout-840.png` (840px copy of `avatar-cutout.png`) on a glowing indigo disc, body fading into the page (`Portrait` component; 260px on phones, 340px on tablets). Falls back to the round `avatar.png` when the cutout is missing.
Hero layout: the vision as the largest text, then the CV summary. GitHub and LinkedIn links open in a new tab (screen-reader text EN `(opens in a new tab)` · VI `(mở trong tab mới)`).


**Tech chips (mono, server-side):** Go · Ruby on Rails · PostgreSQL · Elasticsearch · ClickHouse · Kafka · Superset · AWS · Docker

**CTAs**
- Primary: EN `View Case Studies` · VI `Xem dự án` → `#projects`
- Secondary (outline): EN `Download Resume (PDF)` · VI `Tải CV (PDF)`; text link `GitHub`
- Small line below: EN `Need a system built? See how I work with clients →` · VI `Cần xây dựng hệ thống? Xem cách tôi làm việc với khách hàng →` → `/{lang}/for-clients`

## 2. Featured Case Studies
Section title: EN `Featured Case Studies` · VI `Dự án tiêu biểu`
Subtitle: EN `Real systems I helped build, with names removed. Each card tells the short story; open it for the details.` · VI `Hệ thống thực tế tôi đã tham gia xây dựng, đã ẩn tên. Mỗi card kể ngắn gọn; mở ra để xem chi tiết.`
Card: tag, title, **intro** (1–2 sentences, plain English) and one **highlight** line with the key number; Context / Solution / Result stay for the case-study page overview. Order: healthcare-supply-chain · insight-dashboard · value-analysis · future-price-review · clickhouse-superset (title `Custom Report Builder`) · delta-build. Intro and highlight text live in each MDX file's frontmatter.
Grouping: **Key projects** (EN `Key projects` · VI `Dự án trọng điểm`) = insight-dashboard · value-analysis · future-price-review · clickhouse-superset, shown first as large accent cards (2 × 2), set by `featured: true` in the frontmatter. The rest under EN `More from the platform` · VI `Thêm từ nền tảng` in smaller cards.
Button: EN `View details` · VI `Xem chi tiết`

**Project facts (from owner's project notes, Oct 2026).** Insight Dashboard scale (owner, Oct 2026): 19+ US hospitals, 50M+ records processed daily, ~5,000 DAU; full-stack role in a team of 3 engineers, Apr 2023 – present. Kafka exports: ~1M rows, xlsx ~700 MB, separate job mode reusing report logic, batch read/write, API stores export and returns status, client polls, e-mail with download link on success, Kafka partitions + workers for many hospitals at once, supervisor restarts on failure.

 One employer, three codebases, all shown as the anonymous "healthcare supply chain platform":
- **Core platform** (Ruby on Rails 2.3 LTS on Ruby 3.1, PostgreSQL / PL/pgSQL, ExtJS 3.4, Solr, delayed_job): item master, contract management with rebates, requisitions and procurement, spend-analytics builds, data loads (EDI, HL7, flat files). One main DB, one centralized DB, one PostgreSQL DB per hospital organization (1,200+ org-DB migrations in the repo). My numbers: 840+ commits on the main branch, 165 PRs merged, 55+ work items, ~80 org-DB migrations, ~150 spec files. Features: Contract Rebate Management end to end, future-price discrepancy approval workflow, incremental (delta) spend-analytics build, contract archiving to S3/ClickHouse, attribute auto-match upload, nightly data-load tuning.
- **Analytics services** (Go 1.23, Echo v4, Clean Architecture, PostgreSQL, ClickHouse, Redshift, Elasticsearch 7, Kafka, S3, Secrets Manager, Lex V2, Superset, testify): ~90 REST endpoints, ~30 batch modes in one binary, ~60k lines of Go, ≈450 unit tests; ~400 of my commits. Powers Insight Dashboard, Value Analysis and Custom Report Builder.
- **Analytics front end** (React 17, TypeScript, Redux Toolkit, Redux-Saga, Ant Design 4, AntV charts, Jest/RTL): Insight Dashboard reports, export workspace, Value Analysis UI. ~270 TS/TSX files, ~54k lines, 70+ test files; 683 of my commits (top contributor, ~53% of non-merge commits).
- Do not show internal product codes or abbreviations from these notes on the site.

### 2.1 `healthcare-supply-chain` — Healthcare supply chain platform
Tag: `Healthcare supply chain`
- Context — EN: Hospitals need one system of record for every product they buy and the price they should pay. · VI: Bệnh viện cần một hệ thống gốc cho mọi sản phẩm họ mua và mức giá họ nên trả.
- Solution — EN: A multi-tenant Rails platform with one PostgreSQL database per hospital; I own features from the database to the ExtJS screens. · VI: Nền tảng Rails đa tenant, mỗi bệnh viện một database PostgreSQL; tôi phụ trách tính năng từ database tới màn hình ExtJS.
- Result — EN: **165** pull requests merged, **~80** hospital-database migrations, **~150** spec files. · VI: **165** pull request đã merge, **~80** migration cho database bệnh viện, **~150** file spec.

**Article (EN), rewritten Oct 2026 from the core-platform notes:** Problem (six domains; ~4,600 Ruby files, 230+ controllers, 1,100+ models, ~930 ExtJS files) → What I built (Contract Rebate Management, future price review, contract archiving, attribute auto-match up to 500 MB, procurement settings with quantity limit 9,999 → 99,999, nightly data-load tuning) → Architecture → Data design (DB per hospital, 1,200+ org-DB migrations, trigger audit history, rebate packaging) → Failure handling (verify-before-delete archiving, background bulk jobs, upload limits) → Security (per-hospital DBs, feature flags, staged-production flag) → Trade-offs (Rails 2.3 LTS on Ruby 3.1, shared schemas, triggers vs callbacks) → Results (840+ commits, 165 PRs, 55+ work items, ~80 migrations, ~150 spec files). Card intro/highlight in the MDX frontmatter. Older summary below kept for reference.

**Article (EN)**
- Overview: system of record for item master, contracts and rebates, requisitions and procurement, spend analytics, and data loads. Each hospital organization is a tenant with its own data and reporting needs.
- Approach: Rails monolith core with ExtJS UI; Go analytics services (Clean Architecture) and React front end beside it, reading the same org schemas. I built Contract Rebate Management end to end (DB → service → API → ExtJS UI → tests: tiers, baselines, cycles, earned rebate from invoice/PO history) and the future-price approval workflow (bulk approve/reject as background jobs).
- Architecture: diagram `platform-overview` — Clients (React, ExtJS) → Services (Go and Rails) → Org DB (PostgreSQL, one per organization); async branch: Kafka → Workers; read branch: Elasticsearch (Insight Dashboard); analytics branch: ETL → S3 → ClickHouse → Superset.
- Data design: **Database-per-organization** (one main DB, one centralized DB, one PostgreSQL DB per hospital organization). A request resolves its tenant first and the data layer receives that tenant's connection; batch jobs take the org ID and route data to the right PostgreSQL, ClickHouse and Redshift DBs. Why: hard data isolation, per-tenant backup/restore and archiving, no cross-tenant query by accident. **Audit history with PL/pgSQL triggers** (full before/after diff), so history stays correct for bulk SQL and nightly loaders too.
- Failure handling: archiving verifies the dump's row count before deleting, then deletes in batches; incremental analytics builds with checkpoints and a processing limit; impact warning before a rebate change is applied.
- Security: credentials in AWS Secrets Manager, never in code; tenant isolation at the database level; AWS S3 for archival; JWT on the Go API; single sign-on session shared with the main platform. [TODO: encryption at rest/in transit if you want to claim it]
- Trade-offs: more databases to migrate and monitor; every schema change runs against every org DB and is read by other services, so migrations are idempotent, indexed and backward compatible. Legacy 2009-era framework idioms (Rails 2.3, RSpec 1.3).
- Results: 19+ organizations, 90+ REST APIs, backward compatible across releases for React clients; 165 PRs merged, ~80 org-DB migrations, ~150 spec files on the core platform.

**Article (VI)** — same structure, translate headings: `Vấn đề · Hướng tiếp cận · Kiến trúc · Thiết kế dữ liệu · Xử lý lỗi · Bảo mật · Đánh đổi · Kết quả`.
- Thiết kế dữ liệu: **Mỗi tổ chức một database.** Mỗi request xác định tenant trước, rồi tầng dữ liệu nhận kết nối của đúng tenant đó. Lý do: cô lập dữ liệu cứng, backup/restore và lưu trữ theo từng tổ chức, không thể truy vấn nhầm chéo tenant. Lịch sử thay đổi rebate ghi bằng trigger PL/pgSQL.
- Đánh đổi: nhiều database hơn để migrate và giám sát; migration viết để chạy lại an toàn, có index và tương thích ngược.
- Bảo mật: thông tin xác thực lưu trong AWS Secrets Manager, không nằm trong mã nguồn; cô lập ở mức database; AWS S3 cho lưu trữ dài hạn; JWT cho API Go; SSO dùng chung với nền tảng chính.

### 2.2 `insight-dashboard` — Insight Dashboard
Tag: `Spend analytics`
Definition (EN): *Insight Dashboard is a module of the healthcare supply chain platform. It lets users view spend reports and analyze purchasing for each hospital organization.* (VI): *Insight Dashboard là một module của nền tảng chuỗi cung ứng y tế, giúp người dùng xem báo cáo chi tiêu và phân tích mua bán theo từng tổ chức bệnh viện.*
- Context — EN: Ten purchasing reports with heavy joins and filters took 40+ seconds to load. · VI: 10 báo cáo mua hàng với nhiều join và bộ lọc mất hơn 40 giây để tải.
- Solution — EN: PostgreSQL stays the source of truth; Elasticsearch runs the heavy aggregations. · VI: PostgreSQL giữ vai trò nguồn dữ liệu gốc; Elasticsearch chạy các phép tổng hợp nặng.
- Result — EN: Load time **40s → 1s**, database CPU **80% → 30%** per query. · VI: Thời gian tải **40 giây → 1 giây**, CPU database **80% → 30%** mỗi truy vấn.

**Article (EN)**
- Overview: KPIs (Total Spend, Contract Compliance, Spend Not Under Contract, Non-Catalog Spend, Price Variance, Price Overpayment, Price Trend); three-level drill-down (dashboard → vendor summary → item detail); filters by period, corporation, cost center, vendor, manufacturer.
- Front end (mine, React/TypeScript): filters and period in the URL, router state in Redux read via memoized selectors (shareable drill-down links); grids with resize/reorder/show-hide saved per report type, server-side sort/filter, one column-settings set across six report types; saved views; reducers and sagas loaded per route.
- Strategy — why Elasticsearch here (not just "we added a search engine"): (1) the access pattern is read-heavy aggregation with several filters and group-bys, which took the dashboard 40+ seconds across 10 reports (found with `EXPLAIN ANALYZE` per slow query); (2) data is derived from the primary database, so PostgreSQL stays the **single source of truth** and Elasticsearch is a rebuildable read model; (3) fast, consistent filtering matters more here than transactional guarantees. Alternatives considered: indexes and materialized views in PostgreSQL (limited for flexible multi-filter aggregations) [TODO: confirm alternatives you actually evaluated]; ClickHouse (chosen for a different workload, see Custom Report Builder case).
- Elasticsearch backs the price histogram and overpayment search; heavier analytics go to ClickHouse/Redshift.
- Data design: indexing runs as a batch job per organization, in parallel (goroutines, channels, worker pools); ES repositories behind Clean Architecture interfaces. One index per organization, rebuilt with fresh data once a day (owner, Oct 2026).
- Failure handling: index is rebuildable from PostgreSQL by re-running the indexing job. While data is not ready, users see a "data is being built" notice with one option: back to the main system (owner, Oct 2026).
- Security: JWT on the API; SSO session shared with the main platform (background token/user/org sync). Every ES query is filtered by tenant (owner, Oct 2026).
- Results: dashboard load 40s → 1s; database CPU 80% → 30% per query; engine replaceable behind interfaces (dependency inversion); 70+ front-end test files.

**Article (VI)** — translate. Chiến lược: vì sao Elasticsearch ở đây (khối lượng đọc/tổng hợp nặng nhiều bộ lọc; PostgreSQL vẫn là nguồn dữ liệu gốc duy nhất, Elasticsearch là bản đọc có thể dựng lại; ưu tiên tốc độ lọc hơn ràng buộc giao dịch).

### 2.3 `value-analysis` — Value Analysis
Tag: `Pricing intelligence`
Definition (EN): *Value Analysis converts different units and pack sizes into one common "each" price so items from different vendors and manufacturers can be compared fairly.* (VI): *Value Analysis quy đổi nhiều đơn vị và quy cách đóng gói về một giá "mỗi đơn vị" chung để so sánh công bằng các mặt hàng của nhiều nhà cung cấp, nhà sản xuất.*
- Context — EN: The same product is sold by box, case or pack, so prices can't be compared directly. · VI: Cùng một sản phẩm bán theo hộp, thùng hoặc gói, nên khó so sánh giá trực tiếp.
- Solution — EN: Convert every price to one "each" price, then estimate savings for a group of items. · VI: Quy mọi mức giá về một giá "mỗi đơn vị", rồi ước tính khoản tiết kiệm cho một nhóm mặt hàng.
- Result — EN: Customers compare savings at a glance, with every price broken down to the smallest package (each) by vendor and manufacturer. Hours of manual analysis saved. · VI: Khách hàng so sánh nhanh khoản tiết kiệm, với mọi mức giá được quy về quy cách nhỏ nhất (mỗi đơn vị) theo nhà cung cấp và nhà sản xuất. Tiết kiệm hàng giờ phân tích thủ công. (Owner, Oct 2026: no measured hours figure; keep "hours" qualitative.)

**Article (EN):** Glossary (unit of measure, each price, normalized vs non-normalized items); Workflow (cost-center analysis → product groups from nouns/types/attributes → item selection and multi-step item analysis → impact calculator → committees and project management, embedded Superset dashboards); Front end (mine: project wizard product groups → items → details, list/detail/item views, committee settings, own layout, leave-without-saving guard); Data design (item-master normalization: group by manufacturer and manufacturer item ID, UNSPSC and GMDN mapping, nouns/types; unit-of-measure mismatch fields in the APIs); Failure handling (normalized and non-normalized items shown separately); Security (per-user access, dedicated permission and error pages); Trade-offs (speed over scope: analyzing more than 10,000 items made users wait too long, so the business caps one analysis at 1,000 items; owner, Oct 2026); Results. No alternatives-considered paragraph (owner: drop it).
**Article (VI):** tương ứng.

### 2.4 `clickhouse-superset` — ClickHouse × Superset and Custom Report Builder
Tag: `Data & BI`
Definition (EN): *Custom Report Builder lets users build their own reports by choosing the criteria they need.* (VI): *Custom Report Builder cho phép người dùng tự tạo báo cáo theo các tiêu chí họ cần.*
- Context — EN: Users wanted their own reports over very large data, for 19+ hospitals. · VI: Người dùng muốn tự tạo báo cáo trên dữ liệu rất lớn, cho 19+ bệnh viện.
- Solution — EN: One engine, ClickHouse, behind Superset and the Custom Report Builder. · VI: Một engine duy nhất là ClickHouse, phía sau Superset và Custom Report Builder.
- Result — EN: Query time **42s → 3s** (over 90% faster); dashboards cloned to **19+** hospitals. · VI: Thời gian truy vấn **42 giây → 3 giây** (nhanh hơn 90%); dashboard nhân bản cho **19+** bệnh viện.
- Baseline (owner, Oct 2026): 42s → 3s for one query, on reports such as Contract Spend Dashboard, Contract UOM Mismatch and VIM reports.

**Article (EN)**
- Strategy — one source, one engine: Insight Dashboard uses Elasticsearch because its queries are predefined filtered aggregations. Custom Report Builder deliberately does **not** use Elasticsearch: arbitrary user-chosen criteria would require supporting two query modes (ES for some reports, another path for big data), doubling the code paths, the sync jobs, and the failure modes. Consolidating on ClickHouse gives a single data source and one query path for big-data reports. Trade-off: ClickHouse is eventually consistent via batch/incremental loads, which is acceptable for reporting.
- Problem: heavy aggregation ran on each org's transactional PostgreSQL; users wanted their own criteria over years of data; every new org needed the same dashboards.
- Data design: sync reads the PostgreSQL schema, auto-creates matching ClickHouse tables (type mapping), exports CSV to S3, loads via ClickHouse's S3 table function; Redshift via Redshift Data API (`COPY` from S3); archived contract/facility/item data into ClickHouse with year-partitioned materialized views and a Superset report. Full load for initial/backfill, incremental for ongoing.
- Superset rollout: scripted cloning of dashboards, charts, datasets per organization and across environments (prod → dev) for 19+ organizations, rewriting dataset/database references in the Superset DB or in exported ZIP bundles; bulk deletion; embedded-dashboard reloads.
- Failure handling: table existence checks before load; archive row-count verification before delete; per-job log files. (Owner: do not claim ETL retries or reconciliation.)
- Security: credentials via Secrets Manager; jobs parameterized by org ID write only to that org's DBs; each org's cloned dashboards point at its own datasets.
- Results: see card.

**Article (VI):** Chiến lược — một nguồn, một engine: Insight Dashboard dùng Elasticsearch vì truy vấn là các phép tổng hợp có bộ lọc định sẵn. Custom Report Builder cố ý **không** dùng Elasticsearch: tiêu chí do người dùng tự chọn sẽ buộc phải duy trì hai chế độ truy vấn, nhân đôi đường code, job đồng bộ và kiểu lỗi. Quy về ClickHouse cho một nguồn dữ liệu và một đường truy vấn cho báo cáo dữ liệu lớn. Đánh đổi: ClickHouse nhất quán sau (batch/incremental), chấp nhận được với báo cáo.

### 2.5 `future-price-review` — Future Price Review (replaced `kafka-exports`, Oct 2026)
Tag: EN `Contract pricing` · VI `Giá hợp đồng` · Title VI `Duyệt giá hợp đồng tương lai`
Source: core-platform notes §4.2 (Oct 2025 – Oct 2026) and CV ("cross-compare upcoming vs. active contract prices across facilities and bulk-resolve discrepancies prior to activation, proactively preventing spend leakages").
- Intro — EN: Contract prices change before they go live. Hospitals compare upcoming and current prices across every facility, then approve or reject them in bulk, before a wrong price reaches a purchase order. · VI: Giá hợp đồng thay đổi trước khi được áp dụng. Bệnh viện so sánh giá sắp áp dụng với giá hiện tại ở mọi cơ sở, rồi phê duyệt hoặc từ chối hàng loạt, trước khi một mức giá sai lọt vào đơn đặt hàng.
- Highlight — EN: Bulk approve or reject, with **best-contract** and **non-linear** pricing rules · VI: Duyệt hoặc từ chối hàng loạt, theo quy tắc **hợp đồng tốt nhất** và **giá phi tuyến**
- Context — EN: Future contract prices that differ from current ones had to be checked before they took effect, across many facilities and contracts. · VI: Các giá hợp đồng tương lai khác giá hiện tại phải được kiểm tra trước khi có hiệu lực, trên nhiều cơ sở và nhiều hợp đồng.
- Solution — EN: A two-level review grid with threshold filters and Solr search; bulk decisions run as background jobs that apply best-contract and non-linear pricing rules. · VI: Bảng duyệt hai cấp có bộ lọc ngưỡng và tìm kiếm Solr; quyết định hàng loạt chạy dưới dạng job nền, áp dụng quy tắc hợp đồng tốt nhất và giá phi tuyến.
- Result — EN: Price discrepancies resolved in bulk before activation, and a daily job applies approved future prices to items, so no one creates and applies prices by hand on the day. · VI: Chênh lệch giá được xử lý hàng loạt trước khi có hiệu lực, và một job hằng ngày áp dụng giá tương lai đã duyệt vào mặt hàng, nên không ai phải tạo và áp giá thủ công vào đúng ngày.

**Article:** Problem (future prices arrive ahead of time; one item has a price per facility and contract; several corporations; a contract update can touch thousands of items) → Approach (two-level grid item → facility/contract with GPO panel and multi-corporation, server sort/paging; percentage-change, date-range and GPO filters; Solr search incl. partial contract number; bulk approve / reject / pre-reject as background jobs; best-contract and non-linear pricing rules on approval; reviewed-prices screen) → Data design → Failure handling (background jobs) → Security (only admin users or users with full contract access can approve or reject; owner, Oct 2026) → Trade-offs (ExtJS 3.4 two-level grids tuned for 1920px and 100/110/125% zoom; jobs are not instant) → Results (bulk resolution before activation; daily job applies approved future prices to items; model and controller specs). No alternatives-considered paragraph (owner: drop it).
The Kafka export facts (1M+ rows, ~700 MB xlsx, job mode, partitions, supervisor, back-off up to 30 min, e-mail) stay in Decision D4 and the project facts above; the old article is no longer published.

### 2.6 `delta-build` — Daily Delta Build
Tag: EN `Data pipeline` · VI `Pipeline dữ liệu` · Title VI `Build dữ liệu tăng dần hằng ngày`
- Context — EN: Rebuilding all report data every day took 8 hours, though most of it had not changed. · VI: Mỗi ngày build lại toàn bộ dữ liệu báo cáo mất 8 giờ, dù phần lớn dữ liệu không đổi.
- Solution — EN: Save a checkpoint, then rebuild only the report items that changed since it. · VI: Lưu checkpoint, rồi chỉ build lại những mặt hàng trên báo cáo đã thay đổi từ đó.
- Result — EN: Build **8h → 1h**, rows rebuilt **30M → 50K**, CPU peak **90% → 50%**. · VI: Build **8 giờ → 1 giờ**, số dòng build **30M → 50K**, CPU đỉnh **90% → 50%**.

**Article (EN):** Problem (reports collect invoices, purchase orders, item and vendor data; full daily rebuild took 8h with CPU at 90%, most data unchanged); Approach (checkpoint per build; report items as the unit: collect changed items, delete their old rows, rebuild only their current data; full build fallback when no checkpoint); Data design (history tables for invoice lines and item/vendor data, delta flag, sequences and uniqueness triggers); Failure handling (processing limit per run, full build fallback); Results (8h → 1h, 30M → 50K rows rebuilt, CPU peak 90% → 50%).
**Article (VI):** tương ứng.

---
## 3. Engineering (home, `#engineering`)
Title: EN `Engineering Decisions & Practices` · VI `Quyết định & Thực hành kỹ thuật`
Subtitle: EN `The choices behind the results, and what each one cost.` · VI `Những lựa chọn phía sau kết quả, và cái giá của từng lựa chọn.`
Card labels: EN `Decision · Why · Trade-off · Outcome` · VI `Quyết định · Lý do · Đánh đổi · Kết quả`
Sub-headings: EN `Decisions` / `Practices` · VI `Quyết định` / `Thực hành`. Practice titles VI: P1 `Go sạch và xử lý đồng thời` · P2 `Kiểm thử đúng chỗ rủi ro` · P3 `Cổng chất lượng PR có AI hỗ trợ` · P4 `API tương thích ngược`.
D2 index lag: up to one day, because the index is rebuilt daily (owner, Oct 2026).

### 3.1 Decisions
**D1 — One database per organization** · VI **Mỗi tổ chức một database**
- Why — EN: Hard isolation for 19+ healthcare organizations; per-organization backup, restore, and archiving; a missed filter cannot expose another tenant's data. · VI: Cô lập cứng cho 19+ tổ chức y tế; backup, restore và lưu trữ theo từng tổ chức; quên một bộ lọc cũng không thể lộ dữ liệu tenant khác.
- Trade-off — EN: More databases to migrate and monitor. Every schema change runs against every org database and is read by other services, so migrations are idempotent, indexed and backward compatible. · VI: Nhiều database hơn để migrate và giám sát. Mỗi thay đổi schema chạy trên mọi database tổ chức và được các service khác đọc, nên migration chạy lại an toàn, có index và tương thích ngược.
- Outcome — EN: **19+** organizations on one codebase. · VI: **19+** tổ chức trên cùng một codebase.

**D2 — Elasticsearch as a read model for Insight Dashboard** · VI **Elasticsearch làm bản đọc cho Insight Dashboard**
- Why — EN: The dashboard runs predefined, filter-heavy aggregations (period, corporation, vendor). PostgreSQL stays the single source of truth; the index can be rebuilt from it. · VI: Dashboard chạy các phép tổng hợp định sẵn, nhiều bộ lọc (kỳ, tập đoàn, nhà cung cấp). PostgreSQL vẫn là nguồn dữ liệu gốc duy nhất; index có thể dựng lại từ đó.
- Trade-off — EN: A sync pipeline to run: indexing is a scheduled batch job per organization, so the index lags by up to one day. · VI: Phải vận hành pipeline đồng bộ: đánh index là batch job định kỳ theo từng tổ chức, nên index chậm hơn dữ liệu gốc tối đa một ngày.
- Outcome — EN: Report load time **40s → 1s**, database CPU **80% → 30%** per query. · VI: Thời gian tải báo cáo **40 giây → 1 giây**, CPU database **80% → 30%** mỗi truy vấn.

**D3 — One engine for Custom Report Builder: ClickHouse** · VI **Một engine cho Custom Report Builder: ClickHouse**
- Why — EN: Users choose their own criteria over big data. Adding Elasticsearch here would mean two query modes, two code paths, and two sync jobs to keep correct. One engine keeps one path. · VI: Người dùng tự chọn tiêu chí trên dữ liệu lớn. Thêm Elasticsearch ở đây nghĩa là hai chế độ truy vấn, hai đường code và hai job đồng bộ phải giữ đúng. Một engine giữ một đường duy nhất.
- Trade-off — EN: Data arrives through full and incremental loads, not in real time; acceptable for reporting. · VI: Dữ liệu đến qua nạp full và incremental, không tức thời; chấp nhận được với báo cáo.
- Outcome — EN: Query time **42s → 3s** (over 90% faster); Superset dashboards rolled out to **19+** organizations by cloning. · VI: Thời gian truy vấn **42 giây → 3 giây** (nhanh hơn 90%); dashboard Superset triển khai cho **19+** tổ chức bằng cách nhân bản.

**D4 — Exports off the request path, on Kafka** · VI **Đưa export ra khỏi request, chạy trên Kafka**
- Why — EN: Generating 1M+ rows inside an HTTP request timed out. · VI: Tạo hơn 1 triệu dòng trong một HTTP request bị timeout.
- Trade-off — EN: More moving parts: a topic, workers, and job status to track. · VI: Nhiều thành phần hơn: topic, worker và trạng thái job cần theo dõi.
- Outcome — EN: **1M+ row** exports with streaming writes, back-off up to 30 minutes and automatic retries, split into files and zipped, without timeouts; users are e-mailed if an export fails. · VI: Export **hơn 1M dòng** với ghi theo luồng, chờ giãn cách tối đa 30 phút và tự động thử lại, chia nhiều file và nén zip, không còn timeout; người dùng nhận e-mail nếu export thất bại.

### 3.2 Practices
- **P1 Clean, concurrent Go** — EN: Business logic separated from infrastructure through repository interfaces; goroutines, worker pools, bulk loading, transactions, and query tuning for high-volume processing. · VI: Tách logic nghiệp vụ khỏi hạ tầng qua repository interface; goroutine, worker pool, bulk loading, transaction và tối ưu truy vấn cho xử lý khối lượng lớn.
- **P2 Tests where the risk is** — EN: Automated tests covering multi-facility approval workflows, tiered rebate calculations, and lifecycle state transitions: about 450 Go unit tests with mocked repositories, about 150 RSpec files on the core platform, and 70+ front-end test files. · VI: Kiểm thử tự động cho luồng phê duyệt nhiều cơ sở, tính rebate theo bậc và chuyển trạng thái vòng đời: khoảng 450 unit test Go với repository giả lập, khoảng 150 file RSpec ở nền tảng lõi và hơn 70 file kiểm thử front-end.
- **P3 AI-assisted PR quality gate** — EN: Static analysis, security scan, dependency scan, then AI plus human review with checklists for code and unit tests. Review time from **30 to 5 minutes**. · VI: Phân tích tĩnh, quét bảo mật, quét dependency, rồi AI cùng người review theo checklist cho code và unit test. Thời gian review từ **30 xuống 5 phút**.
- **P4 Backward-compatible APIs** — EN: **90+** REST APIs consumed by React applications, kept compatible across releases. · VI: **90+** REST API phục vụ ứng dụng React, giữ tương thích qua các bản phát hành.

## 4. Stack & Experience (home, `#stack`)
Title: EN `Technical Stack & Experience` · VI `Công nghệ & Kinh nghiệm`
Statement — EN: I am strongest in Go, with React on the front end and Ruby on Rails on the core platform, for problems that combine heavy computation with real performance requirements: high-volume data processing, search and analytics, and long-running jobs, built so business logic stays clean and replaceable underneath. · VI: Tôi mạnh nhất ở Go, kết hợp React phía front-end và Ruby on Rails ở nền tảng lõi, cho các bài toán vừa tính toán nặng vừa đòi hỏi hiệu năng: xử lý dữ liệu khối lượng lớn, tìm kiếm và phân tích, tác vụ chạy dài, với logic nghiệp vụ sạch và dễ thay thế bên dưới.

Groups:
- Backend: Go, Echo v4, REST APIs, Clean Architecture, Kafka, Ruby, Ruby on Rails, delayed_job
- Data: PostgreSQL (PL/pgSQL), Elasticsearch, ClickHouse, Amazon Redshift, Solr
- BI: Apache Superset
- Infrastructure: Docker, Jenkins, AWS (S3, Redshift, Secrets Manager, Lex)
- Frontend: React, TypeScript, Redux Toolkit, Redux-Saga, Ant Design, ExtJS
- Testing: testify, RSpec, Jest, React Testing Library
- AI tools: Cursor, Claude Code (both on the CV, shown on the site). BMAD, Superpowers, TEA, MCP stay off the stack grid until confirmed [TODO: confirm you want these listed as skills]; they still appear in for-clients workflow card 05.
- Group labels VI: Backend · Dữ liệu · BI & Báo cáo · Hạ tầng · Front-end · Kiểm thử · Công cụ AI (EN: Backend · Data · BI & Reporting · Infrastructure · Frontend · Testing · AI tools). Sub-headings: EN `Experience` / `Certification` · VI `Kinh nghiệm` / `Chứng chỉ`.

Timeline (anonymous): EN `Software Engineer, healthcare supply chain product company · Feb 2022 – Present` · VI `Kỹ sư phần mềm, công ty sản phẩm chuỗi cung ứng y tế · 02/2022 – nay`. Three lines: Analytics backend (Go, data platform), Analytics front end (React, Insight Dashboard and Value Analysis), and Core platform (Ruby on Rails, contract rebates and price-discrepancy approval). VI: `Backend phân tích: Go, nền tảng dữ liệu` · `Front-end phân tích: React, Insight Dashboard và Value Analysis` · `Nền tảng lõi: Ruby on Rails, rebate hợp đồng và duyệt chênh lệch giá`.
Certification: AWS Certified Cloud Practitioner (CLF-C02).

## 5. Home contact (`#contact`)
Title: EN `Let's talk` · VI `Cùng trao đổi`
Text: EN `Hiring, or want to talk about a system design? Reach me here.` · VI `Bạn đang tuyển dụng, hoặc muốn trao đổi về thiết kế hệ thống? Liên hệ tôi tại đây.`
Links: Email · LinkedIn · GitHub (shown as name-only buttons; the address stays in the link) · `Download Resume` / `Tải CV` (hidden while no CV file matches `site.resume`)
Small line: EN `Looking to build something? → For clients` · VI `Muốn xây dựng sản phẩm? → Dành cho khách hàng`

## 6. For-clients page (`/{lang}/for-clients`)
**Hero**
- H1 (largest text) — client vision: EN `My success is your success.` · VI `Thành công của tôi là thành công của bạn.`. Title under it — EN: I count a project as done only when it works for your business. · VI: Tôi chỉ coi một dự án là xong khi nó thật sự hiệu quả cho doanh nghiệp của bạn.
- Vision line (same as home).
- Intro — EN: For 5 years I have built systems that hospitals rely on every day, and I bring the same care to yours. We agree on what success looks like first; then I build in small steps and show you working software every 3 days. You get a fast, reliable system, full documentation, and someone who stays until it runs smoothly. · VI: Gần 5 năm qua tôi xây dựng những hệ thống mà các bệnh viện dựa vào mỗi ngày, và tôi mang đúng sự cẩn trọng đó vào dự án của bạn. Chúng ta thống nhất thế nào là thành công trước; sau đó tôi làm theo từng bước nhỏ và cho bạn xem phần mềm chạy được sau mỗi 3 ngày. Bạn nhận được một hệ thống nhanh, ổn định, tài liệu đầy đủ, và một người đồng hành tới khi mọi thứ vận hành trơn tru.
- CTAs: Primary `Start a Project` / `Bắt đầu dự án` (mailto, same subject/body as below) · Secondary outline `See case studies` / `Xem dự án` → `/{lang}/#projects`

**What I build** — domain-neutral, for any business (rewritten Oct 2026 after a client-perspective review). Title EN `Whatever your business, I can build it` · VI `Dù bạn làm trong lĩnh vực nào, tôi đều có thể xây dựng`. Subtitle EN `You bring the problem. I turn it into software your team uses every day.` · VI `Bạn mang đến bài toán. Tôi biến nó thành phần mềm đội của bạn dùng mỗi ngày.`.
Layout: same hero as home (profile on the left; client vision, accent title, intro, chips, CTAs on the right; no status pill). Offer cards are numbered 01–04, **no tech chips**, each with a link `See it in a case study` / `Xem trong case thực tế`. Closing block shows the same Email / LinkedIn / GitHub buttons as home.
1. **Web apps & SaaS products** — EN: From idea to a working product: customer portals, internal tools, or a SaaS platform that serves many clients from one system. · VI **Ứng dụng web & sản phẩm SaaS**: Từ ý tưởng tới sản phẩm chạy được: cổng khách hàng, công cụ nội bộ, hoặc nền tảng SaaS phục vụ nhiều khách hàng trên cùng một hệ thống. → healthcare-supply-chain
2. **Business workflows & rules** — EN: Approvals, pricing, contracts, billing. The rules your team keeps in spreadsheets and heads become software that applies them the same way every time. · VI **Quy trình & quy tắc nghiệp vụ**: Phê duyệt, giá, hợp đồng, thanh toán. Những quy tắc đội bạn đang giữ trong bảng tính và trong đầu trở thành phần mềm áp dụng chúng đúng như nhau mọi lúc. → future-price-review
3. **Reports & dashboards** — EN: Bring your data together in one place, with reports and dashboards your team can explore without waiting on IT. · VI **Báo cáo & dashboard**: Gom dữ liệu về một nơi, với báo cáo và dashboard đội bạn tự khai thác mà không phải chờ bộ phận IT. → insight-dashboard
4. **Integrations & automation** — EN: Connect the tools you already use, bring in data from partners, and move slow, repetitive work into jobs that run on their own. · VI **Tích hợp & tự động hóa**: Kết nối các công cụ bạn đang dùng, nhận dữ liệu từ đối tác, và chuyển việc chậm, lặp lại sang các tác vụ tự chạy. → delta-build

**Proof strip** — domain level only, no performance numbers. Title EN `Proven in real systems` · VI `Đã chứng minh trên hệ thống thực tế`. Subtitle EN `Live products used every day, with names removed.` · VI `Sản phẩm đang vận hành, được dùng mỗi ngày, đã ẩn tên.`. Each links to its case study:
- `Healthcare supply chain` / `Chuỗi cung ứng y tế` — EN: A multi-tenant platform used by hospital systems across the US · VI: Nền tảng đa tenant được các hệ thống bệnh viện khắp nước Mỹ sử dụng → healthcare-supply-chain
- `Contracts & pricing` / `Hợp đồng & giá` — EN: Rebates, contract prices and price-change approvals with strict business rules · VI: Rebate, giá hợp đồng và duyệt thay đổi giá với quy tắc nghiệp vụ chặt chẽ → future-price-review
- `Analytics & reporting` / `Phân tích & báo cáo` — EN: Spend dashboards and self-service reports for every customer · VI: Dashboard chi tiêu và báo cáo tự phục vụ cho từng khách hàng → insight-dashboard
- `Data integration` / `Tích hợp dữ liệu` — EN: Daily data from ERPs and distributors, loaded and kept up to date · VI: Dữ liệu hằng ngày từ ERP và nhà phân phối, được nạp và cập nhật liên tục → delta-build
The 30 → 5 min review gate and 1M+ row exports stay on the home page (Practice P3, Decision D4), not on /for-clients.

**Workflow** — use section 7 below (6 cards).

**Closing CTA**
- EN `Let's make your project a success.` / `Tell me about your idea or the problem slowing your team down. I'll reply with honest next steps, what I would build first, and how we will measure success together.` · VI `Cùng làm dự án của bạn thành công.` / `Hãy kể cho tôi về ý tưởng hoặc vấn đề đang làm chậm đội của bạn. Tôi sẽ phản hồi với các bước tiếp theo rõ ràng, phần tôi sẽ làm trước, và cách chúng ta cùng đo thành công.`
- Button `Start a Project` / `Bắt đầu dự án` → `mailto:nguyenhuutri1620vn@gmail.com?subject=<i18n>&body=<i18n>`
  - subject EN `Project inquiry` · VI `Trao đổi dự án`
  - body EN `Hi Tri, I'd like to discuss a project.%0A%0AWhat we need:%0ATimeline:%0ABudget range:` · VI `Chào Trí, tôi muốn trao đổi về một dự án.%0A%0ANhu cầu:%0AThời gian:%0ANgân sách dự kiến:`
- Note: EN `Reply within 1 business day.` (confirmed by owner, Oct 2026) · VI `Phản hồi trong 1 ngày làm việc.`

## 7. Workflow (for-clients page only)
Title: EN `Services & Workflow` · VI `Dịch vụ & Quy trình`
Subtitle: EN `A clear process from first call to stable operation.` · VI `Quy trình rõ ràng từ cuộc trao đổi đầu tiên đến khi vận hành ổn định.`

| # | EN title / text | VI title / text |
|---|---|---|
| 01 | **Discovery & Scope** — Listen to the problem, analyze business requirements, and lock a clear scope. | **Khám phá & Phạm vi** — Lắng nghe bài toán, phân tích nghiệp vụ và chốt phạm vi công việc rõ ràng. |
| 02 | **Architecture & Design** — Design the database and API flows; choose technology for the best cost/performance balance. | **Kiến trúc & Thiết kế** — Thiết kế cơ sở dữ liệu, luồng API và chọn công nghệ tối ưu chi phí/hiệu năng. |
| 03 | **Agile Development** — Build in sprints with transparent progress and automated tests. A short demo video every 3 days. | **Phát triển Agile** — Phát triển theo từng chặng (sprint), tiến độ minh bạch, kiểm thử tự động. Mỗi 3 ngày có một video demo ngắn. |
| 04 | **Deployment & Handover** — Deploy to your server, hand over full documentation, and support stable operation. | **Triển khai & Bàn giao** — Triển khai lên server, bàn giao tài liệu đầy đủ và hỗ trợ vận hành ổn định. |
| 05 | **AI-Assisted Engineering** (tag `AI`) — AI speeds up coding and cuts cost and time, inside a strict process (BMAD, Superpowers, TEA) and MCP tooling, so no AI junk reaches your codebase. Example: an AI-assisted pull-request quality gate (static analysis, security and dependency scans, AI plus human review) cut review time from 30 to 5 minutes. | **Kỹ thuật có AI hỗ trợ** (tag `AI`) — AI tăng tốc coding, giảm chi phí và thời gian, trong một quy trình chặt chẽ (BMAD, Superpowers, TEA) cùng công cụ MCP, để không có "rác AI" lọt vào codebase. Ví dụ: cổng chất lượng pull request có AI (phân tích tĩnh, quét bảo mật và dependency, AI cùng review của người) giảm thời gian review từ 30 xuống 5 phút. |
| 06 | **Quality, Security & Support** (tag `Included`) — Automated tests, secure credential handling, and post-handover maintenance and monitoring support. | **Chất lượng, Bảo mật & Hỗ trợ** (tag `Đã bao gồm`) — Kiểm thử tự động, quản lý thông tin xác thực an toàn, hỗ trợ bảo trì và giám sát sau bàn giao. |

[TODO: confirm scope and duration of the "included" support period before publishing; keep wording as "Included" without promising an SLA until defined.]

## 8. SEO
- Home EN: `Tri Huu Nguyen — Software Engineer (Go, Backend & Data Systems)` · `Software Engineer with 5 years building multi-tenant backend and data systems: search, analytics, async processing. Case studies and resume.`
- Home VI: `Tri Huu Nguyen — Kỹ sư phần mềm (Go, Backend & Hệ thống dữ liệu)` · `Kỹ sư phần mềm 5 năm xây dựng backend đa tenant và hệ thống dữ liệu: tìm kiếm, phân tích, xử lý bất đồng bộ. Dự án và CV.`
- For-clients EN: `Work with Tri Huu Nguyen — Backend & Data Systems` · `APIs, analytics dashboards, data pipelines, and automation, delivered with demos every 3 days and full handover.`
- For-clients VI: `Hợp tác với Tri Huu Nguyen — Backend & Hệ thống dữ liệu` · `API, dashboard phân tích, pipeline dữ liệu và tự động hóa, có demo mỗi 3 ngày và bàn giao đầy đủ.`

## 9. Open TODO list (owner)
Answered Oct 2026: Value Analysis outcome and trade-off, Future Price Review outcome and permissions, Custom Report Builder baseline (42s → 3s), Elasticsearch index layout, lag, unavailable state and tenant scoping, reply promise, CV (one English CV for both languages). Dropped by owner: "What I'd do next" sections, alternatives considered for Value Analysis and Future Price Review, ETL retries and reconciliation.

Still open, in these docs only (nothing on the site shows them):
1. Kafka exports: before/after time (home decision D4 has no number).
2. Confirm PR-review wording (30→5 minutes ≈ 83% less; "up to 90%" only if measured).
3. Encryption claims for Security sections.
4. Support period definition for for-clients card 06.
5. Insight Dashboard: alternatives actually evaluated before Elasticsearch.
6. Optional: UI mockups (synthetic data), Calendly link, AI tools listed as skills.
