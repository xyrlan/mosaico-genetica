# Local SEO Audit — Mosaico Genética
**URL:** https://www.mosaico.med.br/  
**Audit date:** 2026-05-13  
**Vertical:** Healthcare — Genética Médica (YMYL)  
**Business type detected:** Hybrid (presencial Brasília + telemedicina nacional)

---

## Local SEO Score: 52 / 100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| GBP Signals | 25% | 60 | 15.0 |
| Reviews & Reputation | 20% | 55 | 11.0 |
| Local On-Page SEO | 20% | 55 | 11.0 |
| NAP Consistency & Citations | 15% | 35 | 5.3 |
| Local Schema Markup | 10% | 65 | 6.5 |
| Local Link & Authority Signals | 10% | 35 | 3.5 |
| **Total** | | | **52.3** |

---

## 1. Business Type & Industry Vertical

**Detected:** Hybrid — brick-and-mortar (Brasil 21, SHS Asa Sul) + SAB (telemedicina nacional)  
**Industry:** Healthcare / Genética Médica  
**Signals found:** Visible street address, Google Maps embed, GBP link, "Atendemos Presencial e Online em todo o Brasil", telemedicina language in H1 and service area copy.

The hybrid model is correctly signaled on-page but is NOT reflected in schema — `areaServed` only declares `{ "@type": "Country", name: "Brasil" }` without a secondary `GeoShape` or `City` node for Brasília local pack targeting. This weakens the Brasília proximity signal.

---

## 2. NAP Consistency Audit

| Source | Name | Address | Phone (landline) | Phone (WhatsApp) |
|--------|------|---------|-----------------|-----------------|
| **Schema (layout.tsx)** | Mosaico Genética | Brasil 21 - SHS, Quadra 6, Bloco A, Sala 606 - Asa Sul, Brasília, DF, 70316-102 | +556121931447 | NOT present |
| **ContactSection.tsx** | — | Brasil 21 - SHS, QD 06, Bl A, sala 606 - Asa Sul - Brasília - DF CEP 70316-102 | (61) 2193-1447 | (61) 9 9857-0759 |
| **WebFetch (rendered page)** | Dr. Fabrício Maciel / Mosaico Genética | Brasil 21 - SHS, QD 06, Bl A, sala 606 - Asa Sul - Brasília - DF CEP 70316-102 | (61) 2193-1447 | (61) 9 9857-0759 |

### Discrepancies flagged

1. **Address abbreviation inconsistency.** Schema uses full form ("Quadra 6, Bloco A") while rendered HTML uses abbreviated form ("QD 06, Bl A"). Google's NLP parser tolerates this but Bing and citation scrapers may flag mismatch. Canonicalize to one form across schema and visible HTML.

2. **WhatsApp number missing from schema.** The `telephone` field in MedicalClinic only includes the landline (+556121931447). Schema.org allows multiple `telephone` values as an array. The WhatsApp number (the primary patient-facing contact) should be added.

3. **Copyright year in footer:** "© 2024" — stale; signals low update frequency to crawlers. Update to 2026.

4. **Canonical URL inconsistency:** `homepage_parsed.json` shows canonical as `https://mosaico.med.br` (no www), but `layout.tsx` sets `metadataBase` to `https://www.mosaico.med.br` (with www). The rendered canonical resolves to the non-www variant. Confirm a single canonical and set 301 redirect from non-www to www (or vice versa) at Vercel edge config.

5. **`/sobre` canonical** in `sobre_parsed.json` shows `https://mosaico.med.br` (homepage URL), not `https://www.mosaico.med.br/sobre`. This is a critical duplicate content signal — the /sobre page is broadcasting the homepage as its canonical.

---

## 3. GBP Signals

| Signal | Status |
|--------|--------|
| Google Maps embed in footer | Present (iframe with place ID `0x935a39b3c89c5d11:0xb1cebe83250b16ac`) |
| GBP direct link in ContactSection | Present |
| GBP link in sameAs schema | Present (partial — URL is a search-based URL, not the stable place ID URL) |
| "Ver todas as avaliações" CTA to GBP | Present |
| Review count/rating from GBP on-page | "Somos uma empresa 5 estrelas" (text only, no numeric count) |
| GBP posts indicators on site | Not detected |
| Photo evidence linking to GBP | Not detected |
| GBP booking integration | Not detected |

### GBP sameAs URL issue
The `sameAs` entry is:
```
https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/
```
This is a search-by-name URL, not a stable place URL. Replace with the canonical CID-based URL:
```
https://maps.google.com/?cid=12816516001249809068
```
(CID derived from place ID `0x935a39b3c89c5d11:0xb1cebe83250b16ac` = decimal `12816516001249809068`)

### GBP category (Whitespark #1 factor)
Cannot validate GBP primary category without live GBP access. **Action required:** Confirm primary GBP category is "Médico geneticista" (or "Genetic counselor" equivalent in BR GBP). Secondary categories to add: "Consultório médico", "Especialista em doenças raras". Wrong category is the #1 negative local ranking factor per Whitespark 2026.

---

## 4. Review Health

| Metric | Status |
|--------|--------|
| Rating claim on-site | "5 estrelas" (unquantified) |
| AggregateRating in schema | MISSING |
| Review count visible | Not shown numerically |
| Review source | Google (via `/api/reviews` → Places API) |
| Review response rate | Cannot assess without GBP dashboard access |
| Review velocity | Cannot assess without GBP dashboard; flag 18-day rule |

### Critical: AggregateRating schema missing
The site claims 5-star status but has no `AggregateRating` in the MedicalClinic schema node. This means Google cannot generate rich star snippet in SERPs. Add only when you have a confirmed count (minimum 5 reviews required by Google for rich results eligibility):

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "N",
  "bestRating": "5",
  "worstRating": "1"
}
```

### Review velocity — 18-day rule (Sterling Sky)
Rankings cliff if no new review arrives within 18 days. Implement a post-consultation WhatsApp follow-up sequence with a direct GBP review link. This is the highest-ROI action for local pack ranking for a small-volume practice.

---

## 5. Local On-Page SEO

### What is working
- `<title>` tag: "Médico Geneticista em Brasília | Mosaico Genética — Dr. Fabrício Maciel" — geo-modified, keyword-first, correct.
- `lang="pt-BR"` on `<html>` element.
- H1 includes "Atendimento em todo o Brasil e presencialmente em Brasilia - DF" — geo signal present but note "Brasilia" missing accent (should be "Brasília").
- 9 service categories listed as H3 in ServicesSection — good topical breadth signal.
- `og:locale: pt_BR` set correctly.

### Critical gaps

**No dedicated service pages.** The 9 specialties (Autismo, Genética Preditiva, Deficiência Intelectual, Erros Inatos do Metabolismo, Neurogenética, Genética Reprodutiva, Oncogenética, Interpretação de Exames Genéticos, Pareceres) exist only as H3 cards on the homepage. Per Whitespark 2026, dedicated service pages are the #1 local organic ranking factor AND #2 AI visibility factor. Each specialty needs a URL like `/servicos/autismo-genetica`, `/servicos/oncogenetica`, etc.

**No dedicated contact/booking URL.** The contact form and agendar widget are homepage sections (`#contato`, `#agendar`). A standalone `/contato` or `/agendar` route would: (a) appear in sitemap independently, (b) allow targeting "agendar consulta geneticista brasília" queries, (c) provide a landing page for GBP booking button.

**Sitemap has only 2 URLs** (`/` and `/sobre`). As service pages are created, sitemap priority logic will need updating.

**Word count on /sobre is 122 words.** Extremely thin for a YMYL Physician page. Google's E-E-A-T guidelines for healthcare require substantive credential demonstration. Target 600-800 words covering: board certification, fellowship details, research areas, publications, approach to rare disease families.

**"Brasilia" typo in H1.** The homepage H1 reads "presencialmente em Brasilia" (missing tilde). Fix to "Brasília" — this is a geo keyword and the accent matters for Portuguese NLP.

---

## 6. Local Schema Validation

### Current implementation (layout.tsx @graph)

```
@graph[0]: MedicalClinic (#clinic)
  - name, url, logo, image, telephone (1 number), medicalSpecialty
  - address: PostalAddress (complete)
  - geo: GeoCoordinates (5 decimal precision — correct)
  - areaServed: Country (Brasil)
  - sameAs: [Instagram, Lattes, Maps search URL]
  MISSING: openingHoursSpecification, aggregateRating, priceRange,
           hasMap, currenciesAccepted, paymentAccepted, WhatsApp telephone

@graph[1]: Physician (#fabricio)
  - name, jobTitle, medicalSpecialty, identifier (CRM + RQE)
  - worksFor: {#clinic}
  - sameAs: [Lattes]
  - image, url
  MISSING: alumniOf, award, description, knowsAbout, honorificPrefix ("Dr.")
```

### Schema subtype assessment
`MedicalClinic` is the correct schema.org type for a consultório médico. `Physician` is correct (not deprecated). `medicalSpecialty: "MedicalGenetics"` is the correct schema.org MedicalSpecialty enumeration value. No subtype corrections needed.

### Required additions

**A. openingHoursSpecification** (add once hours are confirmed):
```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }
]
```

**B. WhatsApp as second telephone:**
```json
"telephone": ["+556121931447", "+5561998570759"]
```

**C. hasMap for GBP linkage:**
```json
"hasMap": "https://maps.google.com/?cid=12816516001249809068"
```

**D. Physician honorificPrefix and description:**
```json
"honorificPrefix": "Dr.",
"description": "Médico geneticista com CRM-DF 31124 e RQE 22393, especializado em diagnóstico de doenças raras, neurogenética e aconselhamento genético em Brasília e telemedicina nacional.",
"knowsAbout": ["Genética Médica","Doenças Raras","Neurogenética","Oncogenética","Autismo","Erros Inatos do Metabolismo"]
```

**E. ServiceLocation for telemedicina** (hybrid business pattern):
```json
{
  "@type": "MedicalClinic",
  "@id": "https://www.mosaico.med.br/#clinic",
  ...
  "areaServed": [
    { "@type": "City", "name": "Brasília", "addressRegion": "DF", "addressCountry": "BR" },
    { "@type": "Country", "name": "Brasil" }
  ]
}
```

**F. MedicalWebPage on /sobre** for E-E-A-T signal:
```json
{
  "@type": "MedicalWebPage",
  "@id": "https://www.mosaico.med.br/sobre#webpage",
  "url": "https://www.mosaico.med.br/sobre",
  "name": "Sobre Dr. Fabrício Maciel — Geneticista em Brasília",
  "about": { "@id": "https://www.mosaico.med.br/#fabricio" },
  "author": { "@id": "https://www.mosaico.med.br/#fabricio" },
  "medicalAudience": { "@type": "Patient" },
  "reviewedBy": { "@id": "https://www.mosaico.med.br/#fabricio" }
}
```

---

## 7. Citation Presence — Brazilian Medical Directories

Cannot directly verify listing status without authenticated access. Priority citation targets for a geneticista in DF:

### Tier 1 — Maximum priority
| Directory | URL pattern | Notes |
|-----------|-------------|-------|
| CFM / Consulta Médico | https://portal.cfm.org.br/busca-medicos/ | CRM-DF 31124 must appear; verify name spelling matches site |
| Doctoralia BR | https://www.doctoralia.com.br/ | Dominant BR medical directory; E-E-A-T source for Google |
| Boavista Saúde | https://www.boavistasaude.com.br/ | High DA BR health directory |
| Google Business Profile | — | Primary citation; see GBP section |

### Tier 2 — High priority for DF/geneticista
| Directory | Notes |
|-----------|-------|
| Catálogo.med.br | BR-specific, schema-rich medical directory |
| Cliniques.com.br | Medical clinic aggregator, BR |
| Tua Saúde (médico) | High-traffic health content site with doctor profiles |
| Conexa Saúde | Telemedicine platform — critical for SAB/national coverage signal |
| iClinic Consultas | Practice management platform with public directory |
| Hospital Sírio-Libanês / referral networks | For telemedicina credibility |

### Tier 3 — General local (DF)
| Directory | Notes |
|-----------|-------|
| Yelp BR | Low relevance in BR but still a Tier 1 global signal |
| Foursquare | NAP citation, low engagement in BR |
| Apontador | Major BR local directory (LATAM equivalent of Yelp) |
| Páginas Amarelas BR | Traditional citation |

### Citation strategy note
3 of the top 5 AI visibility factors (Whitespark 2026) are citation-related. For a geneticista — a low-volume specialty — citations in specialty medical directories (Doctoralia, CFM, Catálogo.med.br) carry more weight than general directories because they pass topical authority, not just NAP consistency.

---

## 8. Service Area Definition

The current schema defines `areaServed: { "@type": "Country", name: "Brasil" }`. This is correct for telemedicina but suppresses local pack signals for Brasília. Recommended pattern for hybrid practices:

```json
"areaServed": [
  {
    "@type": "City",
    "name": "Brasília",
    "addressRegion": "DF",
    "addressCountry": "BR"
  },
  {
    "@type": "Country",
    "name": "Brasil",
    "description": "Telemedicina"
  }
]
```

On-page, the copy "Atendemos Presencial e Online em todo o Brasil" is correct. Consider adding a dedicated paragraph or callout that explicitly names the states/regions you serve via telemedicina for long-tail AI citation coverage ("geneticista telemedicina São Paulo", etc.).

---

## 9. Healthcare E-E-A-T Factors (YMYL)

Genética médica is deeply YMYL — Google's quality raters apply maximum scrutiny. Current state and gaps:

| E-E-A-T Signal | Present | Missing / Weak |
|----------------|---------|---------------|
| CRM-DF number visible on-page | Yes (ContactSection, schema) | — |
| RQE number visible | Yes (schema identifier) | Not visible in rendered HTML body text |
| Lattes CV linked | Yes (header + schema sameAs) | — |
| Medical degree institution | Yes (/sobre — UFMA) | Residency/fellowship institution not found in parsed content |
| Publications / research output | Not detected on-site | Critical gap for rare disease geneticist |
| Professional associations (SBGM, AMB) | Not detected | High-value E-E-A-T signal |
| HIPAA/LGPD privacy notice | Not detected | Required for health data contact forms |
| CFM ethics compliance statement | Not detected | Expected by Google quality raters for BR medical sites |
| Patient testimonials with full name | Reviews use first names | Full name + condition (with consent) increases trust signals |

**Priority E-E-A-T actions:**
1. Add RQE 22393 visibly in the hero or /sobre body text (not just schema).
2. Add SBGM (Sociedade Brasileira de Genética Médica) membership and any ABRAMED affiliations.
3. Add a brief publications/research section to /sobre linking to PubMed or Lattes entries.
4. Add a LGPD-compliant privacy notice (link in footer) — legally required for the contact form that collects health data.

---

## 10. Top 10 Prioritized Actions

### Critical

**1. Fix /sobre canonical URL** (seo impact: high, effort: 5 min)  
`sobre_parsed.json` shows canonical pointing to the homepage. In `/sobre/page.tsx`, `alternates: { canonical: "/sobre" }` is set — but the rendered canonical resolves to `https://mosaico.med.br` (no www, no path). Debug www/non-www redirect and verify canonical renders as `https://www.mosaico.med.br/sobre`.

**2. Resolve www vs non-www canonical conflict** (seo impact: high, effort: 15 min)  
Add a Vercel redirect rule: non-www → www (or vice versa), and confirm `metadataBase` in layout.tsx matches the chosen canonical root. Currently the deployed canonical strips www.

**3. Add AggregateRating to MedicalClinic schema** (seo impact: high — enables star snippets, effort: 10 min)  
Pull rating and count from the `/api/reviews` Places API response and inject into the @graph at build time or via ISR. Do not hardcode — must reflect live GBP rating.

**4. Confirm and optimize GBP primary category** (seo impact: very high — Whitespark #1 factor, effort: 30 min)  
Log into GBP and verify primary category is the closest match to "Médico geneticista". Add secondary categories. Ensure GBP address exactly matches schema PostalAddress.

### High

**5. Create dedicated service pages for top 3 specialties** (seo impact: very high — #1 local organic factor, effort: 2-4 hours each)  
Start with the highest-search-volume conditions: `/servicos/autismo-genetica`, `/servicos/oncogenetica`, `/servicos/neurogenetica`. Each page needs 600+ words, MedicalCondition or MedicalProcedure schema, FAQ markup, and internal links from homepage service cards.

**6. Add WhatsApp number to schema telephone array + fix sameAs GBP URL** (effort: 10 min)  
Replace name-based Maps URL in sameAs with stable CID URL. Add `+5561998570759` to telephone array.

**7. Add openingHoursSpecification once hours are confirmed** (effort: 10 min once data is available)  
Required for GBP consistency and rich results. Missing this field is a known gap per the briefing.

**8. Add LGPD privacy notice** (legal + seo, effort: 1-2 hours)  
The contact form collects name, phone, email, and health case description — this is sensitive health data under LGPD. A privacy policy page at `/politica-de-privacidade` is legally required and a trust signal for Google quality raters.

### Medium

**9. Create Doctoralia and Catálogo.med.br profiles** (seo impact: medium-high for citations + AI visibility, effort: 1-2 hours)  
These are the two highest-value citation sources for a geneticista in BR. NAP must exactly match the canonical form established in schema.

**10. Expand /sobre to 600+ words with E-E-A-T signals** (effort: 2-3 hours)  
Add: residency/fellowship details, SBGM membership, research/publications list, RQE visible in body text, and add MedicalWebPage schema to the /sobre page component.

---

## Limitations Disclaimer

The following could not be assessed without paid tools or authenticated access:

- **Live GBP data** (primary category, completeness score, Q&A, post activity, photo count, booking status) — requires Google Business Profile dashboard or DataForSEO `local_business_data`.
- **Local pack position** for target queries ("geneticista brasília", "médico genética DF") — requires DataForSEO `google_local_pack_serp` or manual geo-targeted search.
- **Citation presence verification** in Doctoralia, CFM portal, and BR directories — requires direct fetch of each directory with business name query.
- **Review velocity and response rate** — requires GBP Insights access.
- **Proximity rank modeling** — proximity accounts for 55.2% of ranking variance (Search Atlas ML study); this is outside on-site control and not auditable from the codebase.
- **GBP photo count and category-specific attributes** (e.g., telehealth availability flag in GBP) — requires GBP dashboard.
- **Competitor local pack analysis** — not performed in this audit.
