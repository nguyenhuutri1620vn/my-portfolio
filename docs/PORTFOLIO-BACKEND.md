# PORTFOLIO-BACKEND — Content principles for the home page

The home page is for Tech Leads and recruiters. It must read like an engineer explaining real systems, not like a landing page.

## Principles
1. **Architecture first.** Diagram before prose, decision before result.
2. **Every claim is verifiable.** Only facts and numbers in `CONTENT.md`. Anything else is `[TODO]`. Never write "zero incidents", "dead-letter queue", "circuit breaker", "TDD", or similar unless `CONTENT.md` states it.
3. **Show trade-offs.** Each decision states what it cost, not only what it gained.
4. **Numbers with context.** Always "from X to Y" or "N+ items", never "much faster".
5. **AI as tooling, not authorship.** AI appears inside a review process (PR gate), never as "AI built this".
6. **Calm visuals.** No animations beyond subtle fades, no screenshot collages, no decorative illustrations.

## What a Tech Lead should conclude after 2 minutes
- Understands multi-tenant isolation and why it was chosen.
- Picks storage engines by access pattern (Elasticsearch for predefined aggregations, ClickHouse for user-defined reports over big data) and avoids unnecessary query modes.
- Moves slow work off the request path (Kafka exports).
- Keeps code maintainable (Clean Architecture, tests on risky logic, backward-compatible APIs, review gate).

## Home vs /for-clients
| Belongs on home | Belongs on /for-clients |
|---|---|
| Decisions, trade-offs, practices | Offerings ("what I can build for you") |
| Case-study deep dives | Result metrics as proof |
| Stack detail, timeline, certification | 6-step workflow, demo every 3 days |
| Resume, GitHub, LinkedIn | Start a Project (mailto), response note |

## Strengthening the portfolio later (v2)
- 2–3 short technical articles (500–800 words) expanding the Decisions cards.
- A public GitHub project (e.g. the planned microservice system) with a README, architecture diagram, and tests, added as a 6th case study. Pin it on the GitHub profile.
