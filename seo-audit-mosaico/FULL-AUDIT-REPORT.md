# Mosaico Genética — Full SEO Audit

- **URL audited:** https://www.mosaico.med.br/
- **Date:** 2026-05-13
- **Stack:** Next.js 14.1.4 (App Router) on Vercel
- **Business type:** Local Service — Healthcare (Medical Practice / Médico Geneticista). Hybrid: presencial em Brasília-DF + telemedicina nacional.
- **Industry vertical:** Healthcare / Medical practice (genética clínica)
- **Locale:** pt-BR

> Note: PageSpeed Insights and CrUX field data were unavailable this session — shared anonymous Google API quotas were exhausted. Performance section is heuristic (asset weight + render path). Add a Google API key (`scripts/google_auth.py`) to enrich next run with real CWV field data.

---

## Executive Summary

**SEO Health Score: 53 / 100**

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 50 | 11.0 |
| Content Quality | 23% | 60 | 13.8 |
| On-Page SEO | 20% | 55 | 11.0 |
| Schema / Structured Data | 10% | 10 | 1.0 |
| Performance (heuristic) | 10% | 75 | 7.5 |
| AI Search Readiness | 10% | 50 | 5.0 |
| Images | 5% | 75 | 3.75 |
| **Total** | 100% | — | **53.05** |

### Top 5 Critical Issues

1. **Canonical points to wrong host on every page.** `<link rel="canonical" href="https://mosaico.med.br">` but live host is `https://www.mosaico.med.br` (apex 308→www). Canonical = redirect source = confuses Google about the preferred URL. (`src/app/layout.tsx:21`)
2. **/sobre canonicalizes to homepage.** Same canonical inherited from `layout.tsx`. `/sobre` declares the homepage as canonical → Google may drop `/sobre` from the index.
3. **Open Graph metadata is static and homepage-only.** `og:url`, `og:title`, `og:description` on `/sobre` still show the homepage values. Hurts social previews and signals duplicate-page metadata.
4. **All JSON-LD is missing.** `FAQSection.tsx:67-72` injects FAQPage via `next/head`, which is silently ignored in the App Router. Result: zero schema in served HTML (`grep -c application/ld+json` = 0). No `Physician`, `MedicalClinic`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`.
5. **Sitemap only lists 2 URLs.** `/` and `/sobre`. No services pages, no FAQ anchor pages, no blog, no review page. Limits indexable surface for high-intent queries ("geneticista Brasília", "aconselhamento genético autismo", etc.).

### Top 5 Quick Wins

1. Fix canonical: change `alternates.canonical` in `layout.tsx` to `https://www.mosaico.med.br` and set per-page canonicals via `generateMetadata` for `/sobre`.
2. Add `metadataBase` + per-page `openGraph` in `app/sobre/page.tsx` so social cards differ per route.
3. Inject FAQ JSON-LD by replacing `next/head` with a Server Component `<script type="application/ld+json" dangerouslySetInnerHTML>` rendered in `layout.tsx` or page-level Server Component — or use Next's `JsonLd` pattern.
4. Add `Physician` + `MedicalClinic` JSON-LD with full NAP, CRM/RQE, location, openingHours, sameAs (Instagram, Lattes, Google Maps).
5. Expand sitemap with services anchor pages (or split each service into its own route): autismo, neurogenética, oncogenética, genética reprodutiva, exames, etc.

---

## 1. Technical SEO

### Crawlability — OK
- `robots.txt` returns 200, no disallows, sitemap linked. ✅
- All AI bots tested return 200 (Googlebot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot). ✅
- Apex domain 308→www (correct). ✅
- HTTP → HTTPS redirect present. ✅

### Indexability — Issues
- **Canonical bug (critical).** Homepage canonical = `https://mosaico.med.br` (apex, no www). Live URL = `https://www.mosaico.med.br/`. Mismatch with `og:url`, `sitemap.xml`, and the actual served origin.
- **Per-page canonical missing.** `/sobre` inherits `https://mosaico.med.br` canonical → /sobre tells Google it is the homepage. High risk of de-indexing.
- No `metadataBase` declared in root layout → relative URLs in `openGraph` fall back to Next defaults.

### Sitemap (`src/app/sitemap.ts`)
- Returns valid XML, both URLs reachable (200). ✅
- Only 2 URLs (`/`, `/sobre`). 🟡
- `lastModified: new Date()` is regenerated on every build — won't reflect actual content edits, gives Google a misleading freshness signal.
- `changeFrequency: 'yearly'` for a homepage that gets reviews + content updates is wrong; use `weekly` or omit.

### Security Headers
Only `strict-transport-security: max-age=63072000` present.

| Header | Status | Recommendation |
|---|---|---|
| HSTS | ✅ 2y | OK |
| Content-Security-Policy | ❌ missing | Add CSP (allow `googletagmanager.com`, `boaconsulta-widgets.s3.sa-east-1.amazonaws.com`, `*.emailjs.com`, `wa.me`) |
| X-Content-Type-Options | ❌ missing | Add `nosniff` |
| X-Frame-Options | ❌ missing | Add `DENY` or use frame-ancestors in CSP |
| Referrer-Policy | ❌ missing | Add `strict-origin-when-cross-origin` |
| Permissions-Policy | ❌ missing | Restrict camera/microphone/geolocation |

Configure via `next.config.mjs` `headers()` or `vercel.json`.

### 404 / Error pages
- `/this-page-does-not-exist` returns proper 404. ✅
- `/favicon.ico` returns 404 (handled by `/icon.png` from `app/icon.png` — fine for modern browsers, but legacy bots/aggregators expect `/favicon.ico`).

### URL structure
- Clean, lowercased, no trailing-slash inconsistency. ✅
- No locale prefix needed (single-language pt-BR).

---

## 2. Content Quality

### E-E-A-T signals
| Signal | Status |
|---|---|
| Author name + credentials | ✅ Dr. Fabrício Maciel, CRM 31124, RQE 22393 (visible on home + /sobre) |
| Bio / about page | ✅ `/sobre` exists |
| Lattes (academic CV) link | ✅ |
| Medical specialty stated | ✅ "Médico Geneticista" |
| YMYL disclaimer / source citations | ❌ |
| Last-reviewed date on medical content | ❌ |
| Reviewer (medical reviewer / colleagues) credit | ❌ |
| Reviews / testimonials | ✅ Google reviews component |

### Page word counts
| Page | Words | Verdict |
|---|---:|---|
| `/` | 1,035 | OK for landing |
| `/sobre` | 122 | **Thin.** Doctor's bio page needs ≥500 words: formation, residências, papers, board memberships, awards, specialties, why-genetics narrative |

### Duplicate / near-duplicate content
- OG metadata duplicated across both pages (see On-Page §3).
- Page text is unique between `/` and `/sobre`.

### Topical depth
- Only one informational page. For a YMYL medical niche, Google rewards depth: dedicated pages for each condition area (autismo, neurogenética, oncogenética, erros inatos do metabolismo, deficiência intelectual, genética preditiva, genética reprodutiva, interpretação de exames, pareceres) currently are H3 anchors on the homepage, not separate pages → no chance to rank for service-specific queries.

### Readability
- pt-BR, professional clinical tone, accessible. ✅
- FAQ section delivers strong answers (visible in HTML even when collapsed). ✅

---

## 3. On-Page SEO

### Titles & meta
| Page | Title | Len | Meta description | Len |
|---|---|---:|---|---:|
| `/` | "Mosaico Genética - Dr. Fabrício Maciel" | 38 | "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras." | 118 |
| `/sobre` | "Dr. Fabrício Maciel - Mosaico Genética" | 38 | "Minha atuação é guiada pela precisão científica..." | 224 |

- Titles are short — room for a high-intent keyword: `Médico Geneticista em Brasília | Mosaico Genética — Dr. Fabrício Maciel` (under 60 chars).
- `/sobre` meta description is 224 chars; Google truncates ~160. Trim or rewrite with a hook + CTA.

### Headings
- **Two `<h1>` on the homepage** (`HeroDescription.tsx:23` and `:40`). One is `sr-only` but still a level-1. Single H1 per page is safer.
- Heading text squashes in the rendered DOM because `<span>` children are not space-separated. Parsed output shows:
  - `OnlineePresencial`
  - `Compartilheseucasocomagente!`
  - `Comopodemosteajudar?`
  - `Outroscanaisdecontato`
  This affects how Google + AI crawlers tokenize the heading. Cause: `text.split(" ")` in `ContactSection.tsx:63-65` rendered via `H3Card` without preserving spaces between word spans.
- `<H2>` component renders properly. ✅

### Internal linking
- Homepage uses scroll-to anchors (`handleScrollToElement`) instead of real links between routes.
- Only one real internal link: `/sobre`.
- No breadcrumbs anywhere.
- Services are visually represented but **non-clickable** (`ServicesSection.tsx`). Each service should link to a dedicated page.

### External links
- Google Maps, WhatsApp, Instagram, Lattes — all `target="_blank"`. ✅ Consider `rel="noopener"` (already inferred by modern browsers, but explicit is better).
- BoaConsulta widget loads from `boaconsulta-widgets.s3.sa-east-1.amazonaws.com`.

### Hreflang
- Not needed (pt-BR only). ✅

---

## 4. Schema / Structured Data — Major Gap

### Current state
- `grep -c "application/ld+json" homepage.html` → **0**
- `grep -c "schema.org" homepage.html` → **0**
- FAQPage JSON-LD exists in source (`FAQSection.tsx:52-72`) but uses `next/head` inside an App Router client component → **never injected into the document head**. Confirmed by direct HTML inspection.

### Missing (high impact)
1. **`Physician`** — name, medicalSpecialty=MedicalGenetics, alumniOf, memberOf, identifier (CRM/RQE), sameAs (Lattes, Instagram, Google Maps profile), worksFor (the MedicalClinic).
2. **`MedicalClinic`** with embedded `LocalBusiness`/`PostalAddress` — Brasil 21 - SHS, QD 06, Bl A, sala 606 - Asa Sul - Brasília - DF, CEP 70316-102. Phone, geo, openingHours, areaServed=BR.
3. **`FAQPage`** — already authored, just needs correct rendering path.
4. **`BreadcrumbList`** on `/sobre`.
5. **`Service`** items per genetic service category, ideally on dedicated pages.
6. **`AggregateRating` / `Review`** if Google reviews are surfaced (must be the doctor's own reviews, with permission).

### Validation
- Cannot validate what is not there. After fixing render path: run Schema.org validator + Google Rich Results test.

---

## 5. Performance (Heuristic)

Lab + field data unavailable this session. Static asset audit:

| Resource | Compressed size |
|---|---:|
| HTML | 92 KB |
| Total Next.js JS chunks | ~214 KB |
| CSS | 7 KB |
| Hero image `image3.png` @1920w | 197 KB (served as WebP) |
| Logo @640w | 10 KB PNG |
| Doctor photo `fabri2.jpeg` @750w | 139 KB JPEG |
| **First-load critical bytes (approx)** | ~660 KB |

### Heuristic findings
- ✅ Next/Image serves WebP when Accept supports it. Confirmed `image/webp` returned for `image3.png`.
- ✅ LCP hero preloaded with `fetchPriority` + responsive srcset.
- ✅ Font preloaded (`woff2`).
- ✅ Vercel edge cache headers (`x-vercel-cache: HIT`).
- 🟡 No `loading="lazy"` on logo/hero images that are below the fold on small viewports.
- 🟡 BoaConsulta widget preloaded but appears blocking — confirm it is `async` or defer.
- 🟡 GTM injected via `@next/third-parties/google` — already optimized, OK.
- ❌ Spline 3D viewer (`@splinetool/react-spline`) is in deps; if rendered above the fold on any route, it adds significant JS — verify dynamic import + intersection-observer gating.
- ❌ `framer-motion` used liberally; review whether all motion components need to be client-side.

### Recommended verification
- Run with Google API key: `python scripts/google_auth.py --setup` then re-run `pagespeed_check.py` for real LCP/INP/CLS field data.

---

## 6. Images

- **All `<img>` tags have `alt` attributes.** ✅
- Alt text quality:
  - Functional/icon alt is fine (`whatsapp-icon`, `insta-icon`).
  - Several alts are too generic: `LogoImage`, `Logo`, `Especialista`, `foto-atendimento`, `linktree-logo` (it's a Lattes icon, not Linktree — misleading).
- Hero `image3.png` alt = `"Mulher com criança"` — could be more descriptive: `"Mãe e filha em consulta de aconselhamento genético"`.
- Service tiles have appropriate alt (matches the H3 label). ✅
- `mosaicologo.png` rendered twice without `loading="lazy"` (acceptable for logo).
- Missing dimensions on `lattes.png` 24×24 hero variant — `width`/`height` provided ✅.

---

## 7. AI Search Readiness (GEO)

| Signal | Status |
|---|---|
| Robots.txt allows AI bots | ✅ wildcard allow |
| GPTBot / ChatGPT-User / PerplexityBot / ClaudeBot reach 200 | ✅ |
| `llms.txt` | ❌ 404 |
| JSON-LD presence | ❌ none |
| Open Graph + Twitter Card | ✅ present (but static across routes) |
| Author entity (Person + sameAs) | ❌ no schema; visible in text only |
| Citable passages (Q&A, definitions) | 🟡 FAQ content is excellent but not in JSON-LD |
| Last-updated dates | ❌ |

### Recommendations
- Create `/llms.txt` summarizing: who the practice is, what services, location, contact, key URLs.
- Once schema is added, AI Overviews / Perplexity citability rises substantially.
- Add `last-reviewed` byline to medical content.

---

## 8. Local SEO (Healthcare)

| Signal | Status |
|---|---|
| Full street address visible in DOM | ✅ Brasil 21 - SHS, QD 06, Bl A, sala 606 - Asa Sul - Brasília - DF, CEP 70316-102 |
| Phone (local Brasília) | ✅ (61) 2193-1447 |
| WhatsApp | ✅ (61) 9 9857-0759 |
| Embedded NAP in JSON-LD | ❌ |
| Google Business Profile linked | ✅ Maps URL present |
| Service area definition | ✅ "Atendimento em todo o Brasil + presencial Brasília" |
| Opening hours | ❌ not on site |
| Driving directions / parking notes | ❌ |
| Multiple location pages (none needed) | n/a |

---

## 9. Code-level findings

| File | Line | Issue |
|---|---:|---|
| `src/app/layout.tsx` | 21 | Canonical `https://mosaico.med.br` should be `https://www.mosaico.med.br`. Add `metadataBase: new URL('https://www.mosaico.med.br')` |
| `src/app/layout.tsx` | 14-37 | OG static here — make `/sobre` override its own `openGraph` in its `metadata` export |
| `src/app/sobre/page.tsx` | 6-9 | Missing `alternates.canonical`, missing `openGraph` override |
| `src/app/sitemap.ts` | 7,12 | `lastModified: new Date()` regenerates each build — use git or file mtime; `changeFrequency: 'yearly'` is wrong |
| `src/app/components/FAQSection.tsx` | 6,67-72 | `next/head` does not work in App Router client components → FAQ JSON-LD never reaches HTML |
| `src/app/components/HeroDescription.tsx` | 23,40 | Two `<h1>` on a single page (one is `sr-only`, but still h1) |
| `src/app/components/ContactSection.tsx` | 63-65 | `text.split(" ")` → word spans rendered without spaces by `H3Card`, producing concatenated headings like `Compartilheseucasocomagente!` |
| `src/app/components/HeroDescription.tsx` | 38 | "Brasilia" missing accent (visible in `sr-only` H1: should be "Brasília") |
| `next.config.mjs` | — | No `headers()` block → missing CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| `src/app/manifest.ts` (manifest.webmanifest) | — | `prefer_related_applications:true` without `related_applications` is suspect — drop |

---

## 10. Files generated

- `seo-audit-mosaico/FULL-AUDIT-REPORT.md` (this file)
- `seo-audit-mosaico/ACTION-PLAN.md` (prioritized fix list)
- `seo-audit-mosaico/homepage.html`, `sobre.html`, `homepage_parsed.json`, `sobre_parsed.json` (raw)
