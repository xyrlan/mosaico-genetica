# Content Brief — `/sobre` (Improve Existing Page)

**Target URL:** https://www.mosaico.med.br/sobre
**Mode:** improve existing (current: 122 visible words; tabbed timeline hides 3 of 4 panels from crawlers)
**Page type:** Author / About-the-doctor (YMYL healthcare)
**Locale:** pt-BR (Brasília-DF + nacional via telemedicina)
**Last updated baseline:** 2026-05-13

---

## Search Intent

Mixed **navigational + informational + commercial**. Users searching for "Dr. Fabrício Maciel" or "geneticista Brasília Fabrício" want to verify credentials before booking. Secondary intent: research "geneticista Brasília" as a category and assess if this doctor fits. SERP format Google rewards: a credibility-dense doctor profile page with formal credentials, formação acadêmica, áreas de atuação, sociedades médicas, abordagem clínica, contato, plus E-E-A-T trust signals (CRM/RQE, Lattes, datas de atualização).

**Target audience:** pacientes adultos buscando aconselhamento genético, pais buscando avaliação infantil (autismo / atraso de desenvolvimento), familiares de portadores de doenças raras, colegas médicos para referência. Mid-knowledge: já sabem que precisam de um geneticista, querem verificar credenciais antes de agendar.

---

## Competitor Analysis

| # | URL | Key sections | Est. words (visible) | Score (Depth/Format/SEO/UX) | Main gap |
|---|---|---|---:|---|---|
| 1 | https://geneticamedicabrasilia.com.br/ (Dra. Renata Lazari Sandoval — Sírio-Libanês) | "Quem sou eu", formação, especialidade, atuação, contato | ~600 | 9/8/8/9 = 34/40 | Lacks last-updated date and patient-facing FAQ |
| 2 | https://hospitalsiriolibanes.org.br/especialidades-medicas/brasilia/genetica | Sobre o núcleo, equipe, endereço, contato | ~400 | 7/8/9/8 = 32/40 | Generic hospital tone; not personal |
| 3 | https://www.doctoralia.com.br/fabricio-maciel-soares/geneticista/brasilia | Bio curta + reviews + agendamento | ~250 | 5/7/8/9 = 29/40 | Directory page, low ownership signal |
| 4 | https://www.catalogo.med.br/doutor/fabricio-maciel-2688932.htm | Listagem catálogo | ~200 | 4/6/7/7 = 24/40 | Directory only |
| 5 | https://www.boaconsulta.com/especialista/fabricio-maciel-soares-... | Perfil + reviews | ~250 | 5/7/7/8 = 27/40 | Booking platform |

**Competitor word-count average for real medical practice bio pages: ~550 words.** Mosaico is at 122. Target ≥ 700 words to win on Depth.

---

## Content Gaps and Opportunities

**Topic gaps (competitors miss):**
- "Última revisão" date + reviewer name — almost no Brazilian doctor pages do this (Google + AI Overviews reward it for YMYL)
- Inline FAQ: "Quais convênios aceita?", "Atende crianças com autismo?", "Atende telemedicina em qual estado?"
- Explicit areas-of-clinical-focus matched to the 9 service areas advertised on the homepage
- Languages spoken (Dr. Fabrício is fluent in English — useful for international and expat patients in Brasília)
- Public-sector affiliation (Hospital de Apoio de Brasília) → strong trust signal for SUS referrals

**Depth gaps (competitors cover shallow):**
- Doctor's clinical philosophy / approach to patient + family (most competitors omit; only Renata Lazari touches it)
- Why the doctor chose the specialty (humanizes; AI search loves this for "about Dr. X" queries)
- Specific research lines / master's thesis topic (Mosaico has neurogenetics + neuromuscular — strong differentiator)

**Quality gaps:**
- Current Mosaico /sobre uses a tabbed `TimelineCarousel` (`src/app/sobre/components/TimelineCarousel.tsx`). Crawlers see only the first tab. Three panels (HCPA residency, UFRGS master's, Hospital de Apoio Brasília) are invisible to bots. **Fix:** render all 4 timeline entries as plain HTML sections in addition to (or instead of) the carousel.

---

## Winning Outline

**H1:** Dr. Fabrício Maciel Soares — Médico Geneticista em Brasília
**URL Slug:** `/sobre` (no change)
**Target Word Count:** ~720 words (competitor avg ~550; we win by adding ~30% depth)
**Reading level:** B2 — accessible to non-medical readers, no jargon without parentheses

### Section breakdown

**1. Intro / Hero (≈90 words)**
> Format: 1 short paragraph + credentials row (CRM/RQE)
> Heading: H1 — "Dr. Fabrício Maciel Soares — Médico Geneticista em Brasília"
> Keyword guidance: primary keyword in first sentence; mention "Mosaico Genética", "Brasília-DF", "telemedicina em todo o Brasil"
> Body: who he is, where he attends (presencial Brasília + telemedicina BR), CRM-DF 31124 / RQE 22393, idiomas (português, inglês). One line on clinical mission.

**2. Áreas de atuação (≈90 words) — H2: "Áreas de atuação"**
> Format: bulleted list — 9 items matching the homepage services. Each item is one sentence linking to its future service page (post-H4).
> Body: autismo, neurogenética, oncogenética, genética reprodutiva, deficiência intelectual, erros inatos do metabolismo, genética preditiva, interpretação de exames genéticos, pareceres.
> Keyword: secondary keywords ("aconselhamento genético", "exames genéticos", "doenças raras") naturally seeded here.

**3. Abordagem clínica (≈110 words) — H2: "Como é o atendimento"**
> Format: 2 short paragraphs.
> Body: como é a consulta (anamnese ampliada, heredograma, revisão de exames, planejamento), perfil acolhedor para famílias com doenças raras, encaminhamentos multidisciplinares, telemedicina para pacientes fora de Brasília.
> Featured snippet target: "como funciona uma consulta com geneticista" (already partially answered in homepage FAQ).
> Keyword guidance: primary keyword 1x ("médico geneticista"); secondary ("consulta de aconselhamento genético").

**4. Trajetória profissional (≈220 words) — H2: "Formação e trajetória"**
> Format: 4 H3 subsections, one per timeline entry, rendered as plain HTML (NOT only inside the tabbed carousel — must be crawlable). Carousel can remain as a visual layer, but content must be in DOM.
>
> **H3: "Graduação — Universidade Federal do Maranhão (2013–2018)"** ≈ 55 words
> Liga Acadêmica de Genética Médica (fundador), TCC sobre Doença de Niemann-Pick.
>
> **H3: "Residência Médica em Genética Médica — Hospital de Clínicas de Porto Alegre (2020–2023)"** ≈ 60 words
> Centro de Referência em Doenças Raras (CRDR), formação em todas as áreas: neurogenética, reprodução humana, síndromes, erros inatos do metabolismo, testes genéticos, genética ocular.
>
> **H3: "Mestrado em Ciências Médicas — Neurogenética — UFRGS (2021–2023)"** ≈ 55 words
> Linha de pesquisa: interface entre transtornos do neurodesenvolvimento e distrofias musculares.
>
> **H3: "Unidade de Genética — Hospital de Apoio de Brasília (2024–atual)"** ≈ 50 words
> Serviço de referência em doenças raras e triagem neonatal; atendimento SUS; participação no DF como pioneiro em triagem neonatal para doença de Pompe.

**5. Pesquisa e publicações (≈80 words) — H2: "Pesquisa e produção acadêmica"**
> Format: 2-3 bullets linking to Lattes + DOI/PubMed when available.
> Body: linha de pesquisa em neurogenética / doenças neuromusculares. Liga Acadêmica fundadora UFMA.
> Anchor: "Currículo Lattes completo" → https://lattes.cnpq.br/6131512439187623

**6. Sociedades e participação institucional (≈60 words) — H2: "Atuação institucional"**
> Format: bullet list — Sociedade Brasileira de Genética Médica (SBGM) e qualquer outra (validar com o médico antes de publicar). Unidade de Genética — Hospital de Apoio (público). Mosaico Genética (consultório privado).

**7. FAQ embutido (≈80 words) — H2: "Perguntas sobre o atendimento"**
> Format: 3 short Q&A (will reuse `FAQPage` schema OR add Q&A schema; keep separate from homepage FAQ to avoid duplication).
> Q1: "Atende crianças e adultos?" → "Sim. Atendo a partir de 6 meses até pacientes adultos, incluindo idosos com indicação de oncogenética."
> Q2: "Atende em qual estado por telemedicina?" → "Todo o Brasil, conforme a Resolução CFM 2.314/2022."
> Q3: "Você atende plano de saúde?" → orientação real (consultar reembolso).
> **Caution:** confirm answers with the doctor before publishing; YMYL accuracy matters.

**8. Última revisão + autor (≈30 words) — bottom of page**
> Format: 1-line byline.
> Body: "Última revisão: 13 de maio de 2026. Conteúdo escrito e revisado por Dr. Fabrício Maciel Soares, médico geneticista (CRM-DF 31124 / RQE 22393)."

**Total visible word count target: 720**

---

## Recommended Meta Tags

**Title (≤ 60 chars):**
`Sobre Dr. Fabrício Maciel — Geneticista em Brasília` *(already shipped — 52 chars ✓)*

**Meta description (130–150 chars):**
`Conheça Dr. Fabrício Maciel (CRM-DF 31124 / RQE 22393), médico geneticista em Brasília. Formação no HCPA, mestrado UFRGS em neurogenética.` (143 chars)

> Replace the current description (224 chars — over limit).

---

## Unique Angle and Information Gain

**What this page can offer that competitors don't:**

1. **Public sector + private practice combined** — unique credibility framing. Dr. Fabrício atende SUS no Hospital de Apoio (Unidade de Genética / Centro de Referência em Doenças Raras) AND mantém o consultório Mosaico. This pairing is a strong E-E-A-T signal almost no competitor has.
2. **Master's research focus on neurogenetics + neuromuscular** — specific differentiator vs. Renata Lazari (oncogenetics focus) and Sírio-Libanês team (general).
3. **Inline FAQ specific to telemedicine + plano de saúde in Brazil** — directory pages omit this; only mention in homepage FAQ today.
4. **Last-updated byline** — no competitor in Brasília genetics market currently uses this.

---

## E-E-A-T Requirements (YMYL — non-negotiable)

- [ ] Full name and credentials visible above the fold (CRM-DF 31124, RQE 22393)
- [ ] Links to verifiable third-party sources: Lattes, Doctoralia profile, BoaConsulta profile (or any of the 5 already-indexed directory pages)
- [ ] Public-sector affiliation: Hospital de Apoio de Brasília (link to gov source)
- [ ] Photo of the doctor (already present)
- [ ] Specialty registration: medicalSpecialty=MedicalGenetics in Physician JSON-LD (already shipped)
- [ ] "Última revisão" date + reviewer name in plain text + `dateModified` in JSON-LD
- [ ] Links to SBGM (Sociedade Brasileira de Genética Médica) if member — validate
- [ ] No medical advice that conflicts with CFM rules; all clinical claims framed as orientation, not diagnosis

---

## Schema Requirements

**Page-level JSON-LD additions (in `app/sobre/page.tsx`):**

```ts
// Add inline <script> in the page, OR via metadata.other strategy
const sobreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.mosaico.med.br/#fabricio", // matches root @id
      name: "Fabrício Maciel Soares",
      jobTitle: "Médico Geneticista",
      medicalSpecialty: "MedicalGenetics",
      description: "Médico geneticista em Brasília (CRM-DF 31124 / RQE 22393) com formação no HCPA e mestrado em neurogenética pela UFRGS.",
      identifier: [
        { "@type": "PropertyValue", propertyID: "CRM-DF", value: "31124" },
        { "@type": "PropertyValue", propertyID: "RQE", value: "22393" }
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universidade Federal do Maranhão" },
        { "@type": "CollegeOrUniversity", name: "Hospital de Clínicas de Porto Alegre" },
        { "@type": "CollegeOrUniversity", name: "Universidade Federal do Rio Grande do Sul" }
      ],
      worksFor: [
        { "@id": "https://www.mosaico.med.br/#clinic" },
        { "@type": "Hospital", name: "Hospital de Apoio de Brasília", url: "https://www.saude.df.gov.br/" }
      ],
      knowsLanguage: ["pt", "en"],
      sameAs: [
        "https://lattes.cnpq.br/6131512439187623",
        "https://www.instagram.com/mosaico.gen",
        "https://www.doctoralia.com.br/fabricio-maciel-soares/geneticista/brasilia"
      ],
      image: "https://www.mosaico.med.br/fabri2.jpeg",
      url: "https://www.mosaico.med.br/sobre"
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.mosaico.med.br/" },
        { "@type": "ListItem", position: 2, name: "Sobre", item: "https://www.mosaico.med.br/sobre" }
      ]
    }
  ]
};
```

> Note: a slimmer Physician node already ships site-wide via `layout.tsx`. On `/sobre`, output the FULLER node with the same `@id` — Google merges by ID. Do not duplicate without same `@id`.

> Recommended additions to that Physician node when Sprint 2 lands service pages: `availableService: [{...}, {...}]` referencing each service URL.

---

## Internal Linking Opportunities

| Anchor text | Target | Why |
|---|---|---|
| `aconselhamento genético` | `/` (FAQ anchor #faq) | Pulls user back to clinic homepage CTA |
| `agendar consulta` | `/` (Contato anchor) | Conversion |
| `Currículo Lattes` | https://lattes.cnpq.br/6131512439187623 | External authority signal |
| `Hospital de Apoio de Brasília — Unidade de Genética` | https://www.saude.df.gov.br/ (or specific hospital page) | Third-party trust |
| Each of the 9 "áreas de atuação" bullets | future `/servicos/<slug>` (post-H4) | Pillar→spoke internal linking |

Add a "Voltar à página inicial" breadcrumb in the visible UI (matches the BreadcrumbList JSON-LD).

---

## Implementation Notes for Dev

1. **TimelineCarousel.tsx must not gate content from crawlers.** Two options:
   - **Option A (recommended):** render all 4 timeline entries as visible `<section>`s on the page (with H3 + paragraph). Carousel becomes a visual layer on top for desktop UX; mobile shows the linear sections. Crawlers see all 4.
   - **Option B:** server-render all panels into HTML; the JS just toggles visibility. Drawback: layout shift on hydration if not careful.
2. **Component split:** new `<DoctorAreaList />` (bulleted áreas de atuação), `<DoctorApproach />` (abordagem clínica), `<DoctorFaq />` (FAQ section + script tag), `<LastReviewed date="2026-05-13" />`.
3. **`/sobre` JSON-LD via inline `<script>` in a Server Component** (not metadata.other; that field strigifies poorly for `@graph`).
4. **Update `metadata.description`** to 143-char version above.

---

## Done-Definition Checklist

- [ ] Visible word count ≥ 700 on rendered HTML (test with `curl | parse_html.py`)
- [ ] All 4 timeline entries present in static HTML
- [ ] H1 contains primary keyword "Médico Geneticista" and city "Brasília"
- [ ] CRM-DF + RQE visible in first 100 words
- [ ] FAQ block has 3 Q&A relevant to /sobre context (not duplicating homepage FAQ)
- [ ] "Última revisão: 2026-MM-DD" byline at bottom
- [ ] Physician JSON-LD with full @graph rendered on `/sobre`
- [ ] BreadcrumbList JSON-LD rendered
- [ ] Internal links to homepage + Lattes
- [ ] Pass Rich Results test for Physician + BreadcrumbList
- [ ] Meta description = 143 chars version
