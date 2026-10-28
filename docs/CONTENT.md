# CONTENT — Bilingual copy (EN / VI)

Rules: only use facts below. `[TODO: ...]` = owner must supply; do not guess. Employer and product names are never shown (see CLAUDE.md).
Each block is `EN` then `VI`. Move these into `src/content/ui/{en,vi}.json` and `src/content/case-studies/{en,vi}/*.mdx`.

---
## 0. Global
- Name: Tri Huu Nguyen
- Title: EN `Software Engineer` · VI `Kỹ sư phần mềm`
- Experience badge: EN `Nearly 5 years` · VI `Gần 5 năm`
- Location: Ho Chi Minh City, Vietnam
- Email: nguyenhuutri1620vn@gmail.com
- LinkedIn: https://linkedin.com/in/tri-nguyen-huu
- GitHub: https://github.com/nguyenhuutri1620vn
- Resume: `/resume/Tri-Nguyen-CV-EN.pdf`, `/resume/Tri-Nguyen-CV-VI.pdf` [TODO: VI file]
- Nav: EN `Projects · Services · Stack · Contact` · VI `Dự án · Dịch vụ · Công nghệ · Liên hệ`
- Phone is NOT shown on the site.

## 1. Hero
**Vision**
- EN: Build systems that make your business win.
- VI: Xây dựng hệ thống giúp doanh nghiệp của bạn thắng.

**Positioning**
- EN: Software Engineer with nearly 5 years of experience building high-performance backend systems, automating data pipelines, and delivering complete web applications. I work with AI professionally inside a standard SDLC: planning, review, tests, and quality gates come first, so AI speeds up delivery without adding noise.
- VI: Kỹ sư phần mềm với gần 5 năm kinh nghiệm xây dựng hệ thống backend hiệu năng cao, tự động hóa dữ liệu và phát triển ứng dụng web trọn gói. Tôi sử dụng AI một cách chuyên nghiệp trong quy trình SDLC chuẩn: lập kế hoạch, review, kiểm thử và cổng chất lượng đi trước, để AI giúp giao hàng nhanh hơn mà không sinh ra rác.

**Tech chips (mono):** Go · React · PostgreSQL · Elasticsearch · ClickHouse · Kafka · Superset · AWS · Docker

**CTAs**
- Primary: EN `Start a Project` · VI `Bắt đầu dự án` → `mailto:nguyenhuutri1620vn@gmail.com?subject=<i18n>&body=<i18n>`
  - subject EN `Project inquiry` · VI `Trao đổi dự án`
  - body EN `Hi Tri, I'd like to discuss a project.%0A%0AWhat we need:%0ATimeline:%0ABudget range:` · VI `Chào Trí, tôi muốn trao đổi về một dự án.%0A%0ANhu cầu:%0AThời gian:%0ANgân sách dự kiến:`
- Secondary: EN `Download Resume (PDF)` · VI `Tải CV (PDF)`; text link `GitHub`
- Microcopy under CTAs: EN `Reply within 1 business day.` [TODO: confirm promise] · VI `Phản hồi trong 1 ngày làm việc.`

## 2. Featured Case Studies
Section title: EN `Featured Case Studies` · VI `Dự án tiêu biểu`
Subtitle: EN `Real systems, anonymized. Results first; the technical write-up is one click away.` · VI `Hệ thống thực tế, đã ẩn danh. Kết quả ở ngay trên thẻ; bài phân tích kỹ thuật nằm trong phần chi tiết.`
Button: EN `View details` · VI `Xem chi tiết`

### 2.1 `healthcare-supply-chain` — Healthcare supply chain platform
Tag: `Healthcare supply chain`
- Context — EN: Hospitals need one place to track procurement spend, vendor performance, and savings across many organizations. · VI: Bệnh viện cần một nơi duy nhất để theo dõi chi tiêu mua sắm, hiệu quả nhà cung cấp và khoản tiết kiệm của nhiều tổ chức.
- Solution — EN: Multi-tenant SaaS backend in Go (Clean Architecture) with a separate PostgreSQL database per organization, plus search, analytics, and async export layers. · VI: Backend SaaS đa tenant bằng Go (Clean Architecture), mỗi tổ chức một cơ sở dữ liệu PostgreSQL riêng, kèm các lớp tìm kiếm, phân tích và export bất đồng bộ.
- Result — EN: **19+** organizations isolated on one platform, **90+** REST APIs in production. · VI: **19+** tổ chức được cô lập trên cùng một nền tảng, **90+** REST API đang vận hành.

**Article (EN)**
- Overview: The platform helps hospitals track procurement spending, vendor performance, and cost savings. Each hospital organization is a tenant with its own data and reporting needs.
- Architecture: diagram `platform-overview` — Client (React) → API (Go, Echo) → Org DB (PostgreSQL, one per organization); async branch: Kafka → Workers; read branch: Elasticsearch (Insight Dashboard); analytics branch: ETL → S3 → ClickHouse → Superset.
- Data design: **Database-per-organization.** Each organization has its own PostgreSQL database; a request resolves its tenant first and the repository layer receives that tenant's connection. Why: hard data isolation, per-tenant backup/restore and archiving, no cross-tenant query by accident. Trade-off: more databases to migrate and monitor; handled by [TODO: describe migration/rollout approach].
- Key decisions: Clean Architecture in Go, business rules separated from infrastructure through repository interfaces, so storage engines (PostgreSQL, Elasticsearch, ClickHouse) can change without touching use cases. Concurrency with goroutines and worker pools, bulk loading and transactions for high-volume writes.
- Failure handling: [TODO: confirm patterns, e.g. timeouts, retries, idempotency, structured errors]. Known from CV: automatic retries in Kafka export workers.
- Security: credentials in AWS Secrets Manager, never in code; tenant isolation at the database level; AWS S3 for archival. [TODO: authn/authz approach, encryption at rest/in transit if you want to claim it]
- Results: 19+ organizations, 90+ REST APIs; backward compatible across releases for React clients.

**Article (VI)** — same structure, translate headings: `Tổng quan · Kiến trúc · Thiết kế dữ liệu · Quyết định chính · Xử lý lỗi · Bảo mật · Kết quả`.
- Thiết kế dữ liệu: **Mỗi tổ chức một database.** Mỗi request xác định tenant trước, rồi tầng repository nhận kết nối của đúng tenant đó. Lý do: cô lập dữ liệu cứng, backup/restore và lưu trữ theo từng tổ chức, không thể truy vấn nhầm chéo tenant. Đánh đổi: nhiều database hơn để migrate và giám sát; xử lý bằng [TODO: cách migrate/rollout].
- Bảo mật: thông tin xác thực lưu trong AWS Secrets Manager, không nằm trong mã nguồn; cô lập ở mức database; AWS S3 cho lưu trữ dài hạn.

### 2.2 `insight-dashboard` — Insight Dashboard
Tag: `Spend analytics`
Definition (EN): *Insight Dashboard is a module of the healthcare supply chain platform. It lets users view spend reports and analyze purchasing for each hospital organization.* (VI): *Insight Dashboard là một module của nền tảng chuỗi cung ứng y tế, giúp người dùng xem báo cáo chi tiêu và phân tích mua bán theo từng tổ chức bệnh viện.*
- Context — EN: Spend analytics queries over large purchase history were too slow to use interactively. · VI: Truy vấn phân tích chi tiêu trên lượng lịch sử mua hàng lớn quá chậm để dùng tương tác.
- Solution — EN: A search and aggregation layer on Elasticsearch, with a clear single source of truth, filtered by period, corporation, and vendor. · VI: Lớp tìm kiếm và tổng hợp trên Elasticsearch, với một nguồn dữ liệu gốc rõ ràng, lọc theo kỳ, tập đoàn và nhà cung cấp.
- Result — EN: One spend-analytics API went from **15s to 1s** against direct PostgreSQL queries. · VI: Một API phân tích chi tiêu giảm từ **15 giây xuống 1 giây** so với truy vấn trực tiếp PostgreSQL.

**Article (EN)**
- Overview: users open the dashboard and filter spend by period, corporation, vendor, then drill down.
- Strategy — why Elasticsearch here (not just "we added a search engine"): (1) the access pattern is read-heavy aggregation with several filters and group-bys, which PostgreSQL handled at about 15s for one API; (2) data is derived from the primary database, so PostgreSQL stays the **single source of truth** and Elasticsearch is a rebuildable read model; (3) fast, consistent filtering matters more here than transactional guarantees. Alternatives considered: indexes and materialized views in PostgreSQL (limited for flexible multi-filter aggregations) [TODO: confirm alternatives you actually evaluated]; ClickHouse (chosen for a different workload, see Custom Report Builder case).
- Data design: index per org or per-tenant routing [TODO: confirm], mapping tuned for keyword filters and numeric aggregations; sync from PostgreSQL via [TODO: describe sync mechanism and refresh latency].
- Failure handling: [TODO: reindex strategy, behavior when ES unavailable].
- Security: tenant scoping on every query [TODO: confirm].
- Results: 15s → 1s on one API (sub-second for most filtered requests per CV: "under 1 second"). [TODO: confirm the exact percentage; 15s→1s is ~93% / ~15x]

**Article (VI)** — translate. Chiến lược: vì sao Elasticsearch ở đây (khối lượng đọc/tổng hợp nặng nhiều bộ lọc; PostgreSQL vẫn là nguồn dữ liệu gốc duy nhất, Elasticsearch là bản đọc có thể dựng lại; ưu tiên tốc độ lọc hơn ràng buộc giao dịch).

### 2.3 `value-analysis` — Value Analysis
Tag: `Pricing intelligence`
Definition (EN): *Value Analysis converts different units and pack sizes into one common "each" price so items from different vendors and manufacturers can be compared fairly.* (VI): *Value Analysis quy đổi nhiều đơn vị và quy cách đóng gói về một giá "mỗi đơn vị" chung để so sánh công bằng các mặt hàng của nhiều nhà cung cấp, nhà sản xuất.*
- Context — EN: The same product is sold in boxes, cases, and packs; teams could not tell which offer was really cheaper. · VI: Cùng một sản phẩm bán theo hộp, thùng, gói; đội mua hàng khó biết đề nghị nào thực sự rẻ hơn.
- Solution — EN: Backend that normalizes units and pack sizes to a common each price, then calculates potential savings and profit/loss for a group of items. · VI: Backend chuẩn hóa đơn vị và quy cách về giá mỗi đơn vị, rồi tính khoản tiết kiệm tiềm năng và lãi/lỗ cho một nhóm mặt hàng.
- Result — EN: Apples-to-apples price comparison across vendors; [TODO: measurable outcome, e.g. hours saved per analysis or savings found]. · VI: So sánh giá minh bạch giữa các nhà cung cấp; [TODO: kết quả đo được].

**Article (EN):** Domain glossary (each price, pack size, conversion factor); Data design (conversion rules as data, precision with decimal types, never floats [TODO: confirm]); Key decisions (rules engine vs hard-coded conversions) [TODO]; Failure handling (missing or inconsistent unit data, flagged not guessed) [TODO: confirm]; Results.
**Article (VI):** tương ứng.

### 2.4 `clickhouse-superset` — ClickHouse × Superset and Custom Report Builder
Tag: `Data & BI`
Definition (EN): *Custom Report Builder lets users build their own reports by choosing the criteria they need.* (VI): *Custom Report Builder cho phép người dùng tự tạo báo cáo theo các tiêu chí họ cần.*
- Context — EN: Users wanted flexible, self-service reports over very large datasets, and dashboards for 19+ organizations had to be rolled out consistently. · VI: Người dùng muốn báo cáo tự phục vụ, linh hoạt trên dữ liệu rất lớn, và dashboard của 19+ tổ chức cần được triển khai nhất quán.
- Solution — EN: One analytics engine, ClickHouse, fed by ETL from PostgreSQL through S3 (full and incremental loads), serving both Superset dashboards and the Custom Report Builder; dashboards cloned automatically per organization. · VI: Một engine phân tích duy nhất là ClickHouse, nạp qua ETL từ PostgreSQL qua S3 (full và incremental), phục vụ cả dashboard Superset lẫn Custom Report Builder; dashboard được nhân bản tự động cho từng tổ chức.
- Result — EN: Query time down by **over 90%** [TODO: baseline and measured query], dashboards rolled out to **19+** organizations by cloning instead of rebuilding. · VI: Thời gian truy vấn giảm **hơn 90%** [TODO: mốc so sánh], dashboard triển khai cho **19+** tổ chức bằng cách nhân bản thay vì dựng lại.

**Article (EN)**
- Strategy — one source, one engine: Insight Dashboard uses Elasticsearch because its queries are predefined filtered aggregations. Custom Report Builder deliberately does **not** use Elasticsearch: arbitrary user-chosen criteria would require supporting two query modes (ES for some reports, another path for big data), doubling the code paths, the sync jobs, and the failure modes. Consolidating on ClickHouse gives a single data source and one query path for big-data reports. Trade-off: ClickHouse is eventually consistent via batch/incremental loads, which is acceptable for reporting.
- Data design: ETL PostgreSQL → S3 → ClickHouse; full load for initial/backfill, incremental for ongoing; ClickHouse models built for spend and trend analysis [TODO: engine/ordering keys if you want to show].
- Superset rollout: scripted cloning of dashboards, charts, datasets across 19+ organizations instead of manual rebuild.
- Failure handling: [TODO: ETL retries, idempotent loads, row-count checks, reconciliation].
- Security: org scoping on datasets [TODO: confirm]; credentials via Secrets Manager.
- Results: see card.

**Article (VI):** Chiến lược — một nguồn, một engine: Insight Dashboard dùng Elasticsearch vì truy vấn là các phép tổng hợp có bộ lọc định sẵn. Custom Report Builder cố ý **không** dùng Elasticsearch: tiêu chí do người dùng tự chọn sẽ buộc phải duy trì hai chế độ truy vấn, nhân đôi đường code, job đồng bộ và kiểu lỗi. Quy về ClickHouse cho một nguồn dữ liệu và một đường truy vấn cho báo cáo dữ liệu lớn. Đánh đổi: ClickHouse nhất quán sau (batch/incremental), chấp nhận được với báo cáo.

### 2.5 `kafka-exports` — Large Exports with Kafka
Tag: `Async processing`
- Context — EN: Exporting 1M+ rows to Excel timed out and blocked users. · VI: Export hơn 1 triệu dòng ra Excel bị timeout và chặn người dùng.
- Solution — EN: Kafka-based async workers with streaming writes and automatic retries; large exports are split into multiple files and zipped. · VI: Worker bất đồng bộ trên Kafka, ghi theo luồng, tự động thử lại; export lớn được chia nhiều file và nén zip.
- Result — EN: **1M+ row** exports complete without timeouts. [TODO: before/after time, hours saved] · VI: Export **hơn 1M dòng** hoàn tất không còn timeout. [TODO: thời gian trước/sau]

**Article (EN):** Flow (API enqueues job → Kafka topic → worker streams rows to file chunks → zip → store → notify); Data design (chunk size [TODO], streaming to keep memory flat); Failure handling (automatic retry; idempotent job id [TODO: confirm]; dead-letter [TODO: confirm]); Security (signed/expiring download link [TODO: confirm], tenant-scoped query); Results.
**Article (VI):** tương ứng.

---
## 3. Services & Workflow
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

## 4. Technical Stack & Experience
Title: EN `Technical Stack & Experience` · VI `Công nghệ & Kinh nghiệm`
Statement — EN: I am strongest in Go and React for problems that combine heavy computation with real performance requirements: high-volume data processing, search and analytics, and long-running jobs, built so business logic stays clean and replaceable underneath. · VI: Tôi mạnh nhất ở Go và React cho các bài toán vừa tính toán nặng vừa đòi hỏi hiệu năng: xử lý dữ liệu khối lượng lớn, tìm kiếm và phân tích, tác vụ chạy dài, với logic nghiệp vụ sạch và dễ thay thế bên dưới.

Groups:
- Backend: Go, Echo v4, REST APIs, Clean Architecture, Kafka, Ruby, Ruby on Rails
- Data: PostgreSQL, Elasticsearch, ClickHouse, Solr
- BI: Apache Superset
- Infrastructure: Docker, AWS (S3, Redshift, Secrets Manager)
- Frontend: React, TypeScript, Ant Design
- AI tooling: Cursor, Claude Code, BMAD, Superpowers, TEA, MCP [TODO: confirm you want these listed as skills]

Timeline (anonymous): EN `Software Engineer, healthcare supply chain product company · Feb 2022 – Present` · VI `Kỹ sư phần mềm, công ty sản phẩm chuỗi cung ứng y tế · 02/2022 – nay`. Two lines: Analytics team (Go, data platform) and Product team (Ruby on Rails, contract rebates and price discrepancy).
Certification: AWS Certified Cloud Practitioner (CLF-C02).

## 5. Contact
Title: EN `Let's talk` · VI `Cùng trao đổi`
- Block A — EN `Have a project?` / `Tell me what you need and I'll reply with next steps.` / button `Start a Project` · VI `Bạn có dự án?` / `Cho tôi biết nhu cầu, tôi sẽ phản hồi các bước tiếp theo.` / `Bắt đầu dự án`
- Block B — EN `Hiring?` / `Resume, GitHub, and LinkedIn are below.` / buttons `Download Resume`, `GitHub`, `LinkedIn` · VI `Bạn đang tuyển dụng?` / `CV, GitHub và LinkedIn ở bên dưới.` / `Tải CV`, `GitHub`, `LinkedIn`

## 6. SEO
- EN title: `Tri Huu Nguyen — Software Engineer (Go, React, Data Systems)` · desc: `Software Engineer with nearly 5 years building high-performance backend and data systems. Case studies, services, and resume.`
- VI title: `Tri Huu Nguyen — Kỹ sư phần mềm (Go, React, Hệ thống dữ liệu)` · desc: `Kỹ sư phần mềm gần 5 năm kinh nghiệm xây dựng backend và hệ thống dữ liệu hiệu năng cao. Dự án, dịch vụ và CV.`

## 7. Open TODO list (owner)
1. Before/after figures: Value Analysis, ClickHouse (baseline for ">90%"), Kafka exports.
2. Confirm 15s→1s percent wording (15s→1s ≈ 93%).
3. Confirm PR-review wording (30→5 minutes ≈ 83% less; "up to 90%" only if measured).
4. Sync mechanism PostgreSQL→Elasticsearch, tenancy in ES, failure/reindex strategy.
5. Auth, encryption claims for Security sections.
6. Support period definition for card 06; response-time promise.
7. Portrait, UI mockups, VI resume, optional Calendly.
