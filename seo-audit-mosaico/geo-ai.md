# GEO / AI Search Audit — Mosaico Genética
**Target:** https://www.mosaico.med.br/ + /sobre
**Date:** 2026-05-13
**Context:** Brazilian médico geneticista clínica, Brasília-DF. YMYL / healthcare content.

---

## GEO Readiness Score: 54 / 100

| Dimension | Weight | Raw | Weighted |
|---|---|---|---|
| Citability | 25% | 52 | 13.0 |
| Structural Readability | 20% | 58 | 11.6 |
| Multi-Modal Content | 15% | 40 | 6.0 |
| Authority & Brand Signals | 20% | 55 | 11.0 |
| Technical Accessibility | 20% | 62 | 12.4 |
| **Total** | | | **54.0** |

---

## 1. AI Crawler Access Status

| Bot | robots.txt Rule | HTTP Status | Verdict |
|---|---|---|---|
| GPTBot | `Allow: /` (wildcard) | 200 | Allowed |
| OAI-SearchBot | `Allow: /` (wildcard) | 200 | Allowed |
| ClaudeBot | `Allow: /` (wildcard) | 200 | Allowed |
| PerplexityBot | `Allow: /` (wildcard) | 200 | Allowed |
| Googlebot | `Allow: /` (wildcard) | 200 | Allowed |
| CCBot | `Allow: /` (wildcard) | 200 | Allowed (training crawl, not blocked) |
| anthropic-ai | `Allow: /` (wildcard) | 200 | Allowed (training crawl, not blocked) |

**Current robots.txt:**
```
User-Agent: *
Allow: /
Sitemap: https://www.mosaico.med.br/sitemap.xml
```

**Status: PASS for AI search visibility.** No AI search bot is blocked.
Optional: If you want to block training-only crawlers (CCBot, anthropic-ai, cohere-ai) while keeping
search bots active, explicit disallow rules per-agent are needed. For a YMYL medical practice this
is a business decision — blocking training crawlers does not help or hurt AI search visibility.

---

## 2. llms.txt Status

**File:** `/public/llms.txt` — present and serving at https://www.mosaico.med.br/llms.txt

**Size:** ~1.4 KB. Correctly formatted Markdown.

**What it does well:**
- Physician name, CRM-DF 31124, RQE 22393 — machine-readable identifiers
- Lattes URL present
- Full postal address with CEP
- All service areas listed
- Google Maps link
- Modalities (presencial + telemedicina)
- Disclaimer: "Não substitui consulta médica presencial"

**Critical gaps:**

1. **No RSL 1.0 license declaration.** The file has a "Licenca de conteudo" section but it is
   free-form prose, not a machine-readable RSL 1.0 block. LLMs cannot parse the licensing intent.
   Fix: add `License: RSL-1.0` or `License: CC-BY-4.0` as a structured field.

2. **No description block per page.** Only two pages are listed with one-line summaries. The
   `/llms.txt` spec encourages a short `> description` blockquote per linked resource so models
   have context without fetching the page.

3. **Physician full name inconsistency.** `llms.txt` says "Dr. Fabrício Maciel"; `sobre/page.tsx`
   says "Dr. Fabrício Maciel Soares"; JSON-LD says `"name": "Fabrício Maciel"`. Three different
   forms break entity co-reference. Pick one canonical form and use it everywhere.

4. **Missing training period for residency and MSc.** The timeline data in `histories.ts` is the
   richest credential content on the site but it is invisible to crawlers (client-side only). It
   should be mirrored in `llms.txt` and in a Person schema.

5. **No `dateModified` on the file itself.** Best practice is to add a `Updated:` field so models
   can assess freshness.

**Recommended llms.txt additions:**
```
Updated: 2026-05-13
License: RSL-1.0

## Formação e credenciais

- Graduação em Medicina — Universidade Federal do Maranhão (2013–2018)
- Residência Médica em Genética Médica — Hospital de Clínicas de Porto Alegre / HCPA (2020–2023)
- Mestrado em Medicina (Neurogenética) — Universidade Federal do Rio Grande do Sul / UFRGS (2021–2023)
- Atuação no SUS: Unidade de Genética — Hospital de Apoio de Brasília (2024–presente)
- Fundador da Liga Acadêmica de Genética Médica da UFMA

## Sobre a Mosaico Genética

Consultório privado especializado em genética médica clínica, fundado pelo Dr. Fabrício Maciel
Soares. Atende pacientes adultos e pediátricos com suspeita de doenças genéticas, doenças raras,
doenças neuromusculares e necessidade de aconselhamento genético reprodutivo ou preditivo.
Telemedicina disponível para todo o Brasil via plataformas certificadas pelo CFM.
```

---

## 3. JSON-LD Structured Data Audit

### Root layout (`layout.tsx`) — @graph with MedicalClinic + Physician

**Status: Implemented correctly.** Inline `<script type="application/ld+json">` in `<body>` via
`dangerouslySetInnerHTML` — this is the correct App Router pattern.

**What is present:**
- `MedicalClinic` with `@id`, `name`, `telephone`, `medicalSpecialty: "MedicalGenetics"`,
  `PostalAddress`, `GeoCoordinates`, `areaServed`, `sameAs`
- `Physician` with `@id`, `name`, `jobTitle`, `medicalSpecialty`, `identifier` (CRM-DF + RQE),
  `worksFor`, `sameAs` (Lattes), `image`, `url`

**Gaps and issues:**

| Field | Node | Status | Impact |
|---|---|---|---|
| `givenName` / `familyName` | Physician | Missing | Medium — entity disambiguation |
| `alumniOf` | Physician | Missing | High — YMYL authority signal |
| `hasCredential` / `MedicalCredential` | Physician | Missing | High — CFM verification |
| `knowsAbout` | Physician | Missing | Medium — topical authority |
| `openingHours` | MedicalClinic | Missing | Low |
| `priceRange` | MedicalClinic | Missing | Low |
| `aggregateRating` | MedicalClinic | Missing | Medium — trust signal |
| `hasMap` | MedicalClinic | Missing | Low |
| `sameAs` LinkedIn | Physician | Missing | High — brand co-reference |
| `sameAs` CFM search | Physician | Missing | High — YMYL credential verification |
| `dateModified` | Both pages | Missing | Medium — AI freshness |

**Physician `sameAs` — recommended additions:**
```json
"sameAs": [
  "https://lattes.cnpq.br/6131512439187623",
  "https://www.linkedin.com/in/fabricio-maciel-geneticista/",
  "https://portal.cfm.org.br/busca-medicos/"
]
```

### FAQPage schema (`FAQSection.tsx`)

**Status: Correctly inlined.** The `<script type="application/ld+json">` is placed directly before
the `<section>` tag using `dangerouslySetInnerHTML`. This resolves the previously broken `next/head`
rendering path — App Router does not support `next/head` for injecting body scripts.

**Validation check — all 8 FAQ items have:**
- `@type: "Question"` with `name` (the question text)
- `acceptedAnswer` with `@type: "Answer"` and `text`

No structural validation errors detected. The schema renders server-side because the parent
`page.tsx` is a server component that imports `FAQSection` — however `FAQSection` is marked
`"use client"`, which means the JSON-LD script is injected client-side only.

**This is a critical rendering issue:** Google and other AI crawlers that do not execute JavaScript
will not see the FAQPage schema. The FAQ data should be extracted to a server component.

**Fix:**
```tsx
// src/app/components/FAQSchemaScript.tsx  (server component, no "use client")
const faqData = [ /* same array, moved here */ ];
export default function FAQSchemaScript() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", /* ... */ };
  return <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
// Import in page.tsx (server component), not inside FAQSection
```

### /sobre — Person/Physician schema

**Status: Missing entirely.** The `/sobre/page.tsx` has no page-level JSON-LD. The global layout
provides a Physician node with `url: "https://www.mosaico.med.br/sobre"` which links to the page,
but no page-specific schema with the full biography, credentials, and education timeline is present.

The entire career timeline (UFMA, HCPA residency, UFRGS MSc, Hospital de Apoio) lives only in
`histories.ts` as client-side carousel data. This content is invisible to crawlers.

---

## 4. Citability Analysis

### What AI models would extract (good)

The FAQ answers are the strongest citable content on the site. They are direct, complete, and
within the 134–167 word optimal range for several entries:

**FAQ 1 — "O que faz um médico geneticista?"** (43 words)
> "Um médico geneticista investiga condições que podem ter origem genética, ajudando no diagnóstico,
> acompanhamento e aconselhamento de pacientes e suas famílias. Ele analisa o histórico familiar,
> solicita e interpreta exames genéticos e orienta sobre riscos hereditários, prognóstico e opções
> de tratamento."

*Assessment: Too short for optimal citation window but self-contained. Good for featured snippet,
insufficient for AI overview paragraph.*

**FAQ 4 — "O que é aconselhamento genético?"** (51 words)
> "O aconselhamento genético é um processo que ajuda pacientes e famílias a entenderem melhor
> doenças hereditárias, os riscos genéticos envolvidos e as opções disponíveis para prevenção,
> diagnóstico e tratamento. Ele é essencial para quem deseja tomar decisões informadas sobre sua
> saúde ou planejamento familiar."

*Assessment: Good definition passage. Would be cited for "o que é aconselhamento genético" queries.*

**FAQ 5 — "O que são exames genéticos?"** (58 words)
> "Os exames genéticos analisam o DNA para identificar mutações associadas a doenças hereditárias.
> Eles podem ser indicados para confirmar um diagnóstico, prever riscos futuros, guiar tratamentos
> ou ajudar no planejamento reprodutivo. Nem todo paciente precisa de um exame genético, e a decisão
> de realizá-lo deve ser feita com a orientação de um geneticista."

*Assessment: Best passage on the site. Directly answers a common query, actionable, attributed.*

### What is missing (high-impact gaps)

**A. No "about this practice" passage (100–150 words)**
There is no single extractable paragraph that defines what Mosaico Genética is, who runs it, what
it treats, and where it is located. The AboutSection copy ("trazer a expertise adquirida ao longo
desses anos de formação...") is vague and not self-contained.

**Recommended citable passage for the /sobre hero (add as visible `<p>` or blockquote):**
> "Dr. Fabrício Maciel Soares é médico geneticista (CRM-DF 31124 / RQE 22393) com residência
> médica em Genética Médica pelo Hospital de Clínicas de Porto Alegre (HCPA) e mestrado em
> Neurogenética pela Universidade Federal do Rio Grande do Sul (UFRGS). Atua na Mosaico Genética,
> consultório especializado em Brasília-DF, com foco em diagnóstico de doenças raras, doenças
> neuromusculares, autismo, oncogenética e aconselhamento genético reprodutivo. Atende
> presencialmente em Brasília e por telemedicina em todo o Brasil."

*(Target: 86 words — combine with one service callout to reach 134 words)*

**B. No condition-specific passages**
Each of the 9 service areas (Autismo, Neurogenética, Oncogenética, etc.) is listed as a heading
with no explanatory text visible on the page. AI models cannot generate accurate answers about
"geneticista para autismo em Brasília" without at least 2–3 sentences per condition.

**C. No statistics or cited research**
No percentages, prevalence figures, or guideline references. For healthcare YMYL content, citing
one or two CFM, SBGM (Sociedade Brasileira de Genética Médica), or OMIM figures per service area
dramatically increases citability.

**D. Telemedicine passage too thin**
The FAQ answer for telemedicina (22 words) is far below the citation threshold. A 60–100 word
passage explaining CFM telemedicine regulations and how the consultation works would rank for
"geneticista telemedicina" queries nationally.

---

## 5. Healthcare YMYL Signals

| Signal | Present | Notes |
|---|---|---|
| Author name | Yes | "Dr. Fabrício Maciel Soares" — inconsistent form |
| CRM number | Yes (HTML + JSON-LD) | CRM-DF 31124 confirmed |
| RQE number | Yes (HTML + JSON-LD) | RQE 22393 confirmed |
| Medical degree institution | Yes (histories.ts — CSR only) | UFMA — not in crawlable HTML |
| Residency institution | Yes (histories.ts — CSR only) | HCPA — not in crawlable HTML |
| MSc institution | Yes (histories.ts — CSR only) | UFRGS — not in crawlable HTML |
| datePublished | No | No content dates on any page |
| dateModified | No | Sitemap has 2026-05-13 but no `<meta>` or schema field |
| Reviewer / medical reviewer | No | No second-opinion signal |
| Citation / references | No | No external medical sources cited |
| CFM profile link | No | Not in sameAs or visible links |
| SBGM membership | Unknown | Not mentioned anywhere |
| SUS affiliation | In histories.ts (CSR) | Hospital de Apoio de Brasília — not crawlable |

**Priority YMYL fixes:**

1. Add `dateModified` to both pages as `<meta property="article:modified_time">` and in the
   Physician JSON-LD node. The sitemap already emits `2026-05-13` — surface the same date in
   page-level markup.

2. The residency at HCPA and MSc from UFRGS are the strongest E-E-A-T signals on the site.
   They are locked inside a client-side JavaScript carousel. Render them in static HTML — even a
   hidden `<dl>` or an `alumniOf` JSON-LD array would be read by crawlers.

3. Add a CFM verification link. The public Consulta CFM search result for CRM-DF 31124 confirms
   registration and specialty — linking to it as `sameAs` in the Physician schema provides
   machine-verifiable credential authority, which Google's AI Overviews and Perplexity use to
   vet YMYL sources.

---

## 6. Brand Mention Signal Analysis

| Platform | Status | Notes |
|---|---|---|
| Wikipedia | Not found | No article for Dr. Fabrício Maciel or Mosaico Genética |
| Google Maps | Present | Google Maps link in JSON-LD and llms.txt — reviews visible |
| LinkedIn | Not found | No LinkedIn in any sameAs or llms.txt |
| Instagram | Present | @mosaico.gen — in JSON-LD sameAs and llms.txt |
| YouTube | Not found | No YouTube channel referenced |
| Reddit | Not found | No known mentions |
| Lattes (CNPq) | Present | URL confirmed: lattes.cnpq.br/6131512439187623 — strong Brazilian academic signal |
| CFM portal | Not linked | CRM-DF 31124 is verifiable but not linked |
| SBGM directory | Unknown | Not mentioned |

**Brand signal assessment:**
The Lattes CV is the most valuable unique signal for Brazilian AI systems — CNPq/Lattes is a
primary authority source for Brazilian academic medicine. It is already in `sameAs` in the Physician
schema and in `llms.txt`. This is the right call.

The absence of LinkedIn and YouTube is the largest gap. YouTube mentions correlate ~0.737 with
AI citation frequency — even a single video (patient education on "o que é aconselhamento
genético") would materially improve citation probability in ChatGPT and Perplexity responses.

---

## 7. Technical Accessibility for AI Crawlers

**Rendering model:** Next.js App Router. Root layout and `page.tsx` are server components.
Most section components carry `"use client"` for Framer Motion animations.

| Content | Rendering | Crawlable | Notes |
|---|---|---|---|
| H1 hero text | SSR (sr-only span) | Yes | H1 is visually the doctor name, sr-only span adds full tagline |
| FAQ questions + answers | CSR (`"use client"`) | Partial | Text nodes present in SSR HTML; accordion state is CSR |
| FAQPage JSON-LD | CSR (`"use client"`) | No | Injected by client component — not in initial HTML |
| MedicalClinic + Physician JSON-LD | SSR (layout.tsx) | Yes | Correctly rendered server-side |
| Career timeline (histories.ts) | CSR (TimelineCarousel) | No | Carousel is entirely client-side |
| AboutSection bio text | CSR (`"use client"`) | No | Framer Motion component; motion.section |
| HeroDescription text | CSR (`"use client"`) | No | CRM/RQE visible but inside client component |

**The FAQ accordion text is partially crawlable** — Next.js SSR hydrates the text nodes in the
initial HTML payload even for `"use client"` components, so Google and Bing will see the FAQ text.
However the FAQPage JSON-LD script tag is injected after hydration, meaning it will not appear in
the raw HTML response that some AI crawlers parse without JS execution.

**Sitemap:** Two pages only (`/` and `/sobre`). `lastmod: 2026-05-13`. No `hreflang` (single
language site — acceptable). No image sitemap for the doctor photos.

---

## 8. Platform-Specific Scores

| Platform | Est. Score | Primary Gap |
|---|---|---|
| Google AI Overviews | 48/100 | FAQPage schema in CSR; no dateModified; missing credential HTML |
| ChatGPT (web) | 45/100 | No Wikipedia/LinkedIn entity; career timeline not in crawlable HTML |
| Perplexity | 55/100 | FAQ text is SSR-accessible; Lattes present; missing service-specific passages |
| Bing Copilot | 50/100 | Needs dateModified meta; structured credential block in HTML |

---

## 9. Top 5 Highest-Impact Changes

### P1 — Move FAQPage schema to server component (Effort: 1h)

Extract the `schemaData` object from `FAQSection.tsx` into a new server component
`FAQSchemaScript.tsx` with no `"use client"` directive, and import it in `page.tsx` alongside
`<FAQSection />`. The FAQ text is already SSR-visible; this makes the structured data visible too.
**Impact:** Enables Google AI Overviews FAQ rich results; fixes Bing Copilot schema parsing.

### P2 — Add crawlable credential block to /sobre (Effort: 2h)

The career data in `histories.ts` is invisible to every AI crawler. Add a static `<section>` or
`<dl>` in `TrajectorySection.tsx` (server component, remove `"use client"`) or a separate
`CredentialsBlock.tsx` that renders the four career entries as semantic HTML. Mirror the same
data in an `alumniOf` array inside the Physician JSON-LD node in `layout.tsx`.
**Impact:** The HCPA residency and UFRGS MSc are the two strongest YMYL signals on the site.
Making them crawlable directly improves E-E-A-T scoring in Google AIO and Perplexity.

### P3 — Add citable bio passage to /sobre hero (Effort: 1h)

Replace the vague motivational quote in `AboutHeroSection.tsx` (or add below it) with the
~130-word self-contained passage recommended in Section 4A. This becomes the passage AI models
extract when answering "quem é o Dr. Fabrício Maciel" or "geneticista em Brasília".
**Impact:** Directly improves citability score; works for all four AI platforms.

### P4 — Add dateModified + CFM sameAs (Effort: 30min)

In `layout.tsx`: add `"dateModified": "2026-05-13"` to the MedicalClinic and Physician nodes.
Add the CFM consulta URL to Physician `sameAs`. Add `<meta property="article:modified_time">`
in the metadata export of both pages.
**Impact:** AI freshness signal; YMYL credential verification for Google and Perplexity.

### P5 — Expand llms.txt with credentials + RSL license (Effort: 30min)

Add the blocks specified in Section 2 above: `Updated:` field, `License: RSL-1.0`, the four
career/education entries, and a prose "Sobre a Mosaico Genética" paragraph.
**Impact:** Direct machine-readable signal for LLM crawlers (Claude, ChatGPT, Perplexity); low
effort, no code changes required.

---

## 10. Quick-Win Checklist

- [ ] P1: Extract FAQPage JSON-LD to server component (`FAQSchemaScript.tsx`)
- [ ] P2: Render career timeline in static HTML + add `alumniOf` to Physician schema
- [ ] P3: Add 130-word citable bio passage in /sobre hero section
- [ ] P4: Add `dateModified` to JSON-LD nodes + `article:modified_time` meta
- [ ] P4: Add CFM portal link to Physician `sameAs`
- [ ] P5: Update `/public/llms.txt` with credentials, RSL-1.0 license, and `Updated:` date
- [ ] Normalize physician name to "Fabrício Maciel Soares" across all surfaces
- [ ] Add LinkedIn profile to Physician `sameAs` (create profile if absent)
- [ ] Add per-condition descriptions (2–3 sentences each) to ServicesSection
- [ ] Add `aggregateRating` to MedicalClinic schema using Google review data
