# Schema.org Validation Report — Mosaico Genética
Date: 2026-05-13

---

## 1. Detection Results

### https://www.mosaico.med.br/ — 2 JSON-LD blocks found

| Block | @type | Source |
|---|---|---|
| 1 | @graph: MedicalClinic + Physician | layout.tsx (server, ships site-wide) |
| 2 | FAQPage (8 Questions) | FAQSection.tsx (client component, inline script) |

### https://www.mosaico.med.br/sobre — 1 JSON-LD block found

| Block | @type | Source |
|---|---|---|
| 1 | @graph: MedicalClinic + Physician | layout.tsx (site-wide) |

FAQPage is absent on /sobre — correct, FAQSection is only rendered on the homepage.

---

## 2. Validation Results

### Block 1: @graph (MedicalClinic + Physician) — PASS with warnings

**@context**: `https://schema.org` — PASS  
**@graph rendering**: Both nodes present on both pages — PASS  
**JSON parse**: Valid — PASS  
**Absolute URLs**: All — PASS  
**No placeholder text**: PASS  

#### MedicalClinic node

| Field | Status | Note |
|---|---|---|
| @type MedicalClinic | PASS | Valid Google-supported type |
| @id (URL fragment) | PASS | `#clinic` correctly anchored |
| name | PASS | |
| url | PASS | |
| logo | PASS | |
| image | PASS | |
| telephone | PASS | E.164 format |
| medicalSpecialty | PASS | Value `MedicalGenetics` is a valid Schema.org MedicalSpecialty enumeration |
| address (PostalAddress) | PASS | All sub-fields present |
| geo (GeoCoordinates) | PASS | |
| areaServed | PASS | Country node |
| sameAs | PASS | 3 URIs |
| openingHoursSpecification | MISSING (recommended) | Add when hours are known |
| priceRange | MISSING (optional) | Useful for LocalBusiness knowledge panel |
| hasMap | MISSING (optional) | Direct Maps URL as string property |
| currenciesAccepted | MISSING (optional) | |
| paymentAccepted | MISSING (optional) | |

#### Physician node

| Field | Status | Note |
|---|---|---|
| @type Physician | PASS | Subtype of MedicalBusiness; Google-supported |
| @id | PASS | |
| name | PASS | |
| jobTitle | PASS | |
| medicalSpecialty | PASS | |
| identifier (CRM-DF + RQE) | PASS | PropertyValue array correct |
| worksFor | PASS | @id reference to #clinic — correct pattern |
| sameAs | PASS | |
| image | PASS | Absolute URL |
| url | PASS | |
| honorificPrefix | MISSING (recommended) | Add `"Dr."` |
| alumniOf | MISSING (recommended) | Medical school / residency institution |
| description | MISSING (recommended) | Short bio for knowledge panel |
| award | MISSING (optional) | |
| knowsLanguage | MISSING (optional) | `"pt-BR"` |

### Block 2: FAQPage — PASS (with eligibility caveat)

**Parse**: Valid JSON — PASS  
**@context**: `https://schema.org` — PASS  
**@type**: FAQPage — PASS  
**mainEntity**: Array of 8 Question nodes — PASS  
**Each Question.name**: Non-empty string — PASS  
**Each Question.acceptedAnswer.@type**: Answer — PASS  
**Each Question.acceptedAnswer.text**: Non-empty string — PASS  

**Google Rich Results eligibility**: INFO (not Critical)  
Google restricted FAQPage rich results to government and healthcare sites in August 2023. Mosaico qualifies as a healthcare site (medical clinic). Eligibility is plausible but not guaranteed — Google applies discretion. The FAQ data remains fully indexed and benefits AI/LLM citation (GEO value). No action required; monitor Search Console Rich Results report.

**Structural issue — FAQPage is a sibling block, not inside the @graph**  
This is valid Schema.org but means the FAQ is a standalone document separate from the MedicalClinic/Physician graph. Consider whether to merge it into the @graph in a future refactor (not urgent).

---

## 3. @graph Rendering Confirmation

Both nodes render correctly on every page (site-wide via layout.tsx):

```
https://www.mosaico.med.br/#clinic   → MedicalClinic  ✓
https://www.mosaico.med.br/#fabricio → Physician       ✓
```

Cross-reference via `worksFor: { "@id": ".../#clinic" }` is correctly structured.

---

## 4. Issues Summary

| Priority | Issue | Action |
|---|---|---|
| High | FAQPage not inside @graph | Low risk now; unify in future refactor |
| Medium | Physician missing `honorificPrefix`, `description`, `alumniOf` | Add to layout.tsx Physician node |
| Medium | MedicalClinic missing `openingHoursSpecification` | Add when hours confirmed |
| Low | MedicalClinic missing `hasMap`, `priceRange` | Optional but improves knowledge panel |
| Low | Physician missing `knowsLanguage` | Optional |
| Info | FAQPage Google eligibility uncertain | Monitor Search Console |

---

## 5. Service Page Schema Templates

### Strategy per page

Each service page gets a 3-block @graph:
1. `BreadcrumbList` — navigation signal
2. `MedicalCondition` or `MedicalProcedure` — the clinical entity
3. `MedicalWebPage` — page-level metadata linking back to `#clinic` and `#fabricio`

Use `MedicalCondition` for condition/diagnosis-oriented pages (autismo, deficiência intelectual, erros inatos do metabolismo, neurogenética).  
Use `MedicalProcedure` for intervention/service-oriented pages (genética preditiva, genética reprodutiva, oncogenética, interpretação de exames, pareceres).

---

### Template A: MedicalCondition page (autismo, deficiência intelectual, etc.)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://www.mosaico.med.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Autismo e Genética",
          "item": "https://www.mosaico.med.br/autismo"
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.mosaico.med.br/autismo#condition",
      "name": "Transtorno do Espectro Autista (TEA)",
      "alternateName": "Autismo",
      "description": "Avaliação genética e aconselhamento para famílias de pessoas com Transtorno do Espectro Autista, incluindo investigação de causas genéticas e orientação sobre riscos de recorrência.",
      "url": "https://www.mosaico.med.br/autismo",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Sistema Nervoso Central"
      },
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "MedicalGenetics"
      },
      "recognizingAuthority": {
        "@type": "MedicalOrganization",
        "name": "Conselho Federal de Medicina"
      },
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Aconselhamento Genético"
      }
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.mosaico.med.br/autismo#webpage",
      "url": "https://www.mosaico.med.br/autismo",
      "name": "Autismo e Genética | Mosaico Genética",
      "description": "Avaliação genética para Transtorno do Espectro Autista em Brasília.",
      "isPartOf": { "@id": "https://www.mosaico.med.br/#clinic" },
      "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "author": { "@id": "https://www.mosaico.med.br/#fabricio" },
      "about": { "@id": "https://www.mosaico.med.br/autismo#condition" },
      "inLanguage": "pt-BR"
    }
  ]
}
```

---

### Template B: MedicalProcedure page (genética preditiva, interpretação de exames, pareceres)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://www.mosaico.med.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Genética Preditiva",
          "item": "https://www.mosaico.med.br/genetica-preditiva"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.mosaico.med.br/genetica-preditiva#procedure",
      "name": "Genética Preditiva",
      "description": "Avaliação do risco genético individual para doenças hereditárias antes do aparecimento de sintomas, com aconselhamento sobre prevenção e vigilância.",
      "url": "https://www.mosaico.med.br/genetica-preditiva",
      "procedureType": "https://schema.org/DiagnosticProcedure",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "MedicalGenetics"
      },
      "performedBy": { "@id": "https://www.mosaico.med.br/#fabricio" },
      "bodyLocation": "Genoma",
      "preparation": "Trazer histórico familiar de pelo menos 3 gerações quando disponível.",
      "followup": "Aconselhamento genético pós-resultado com elaboração de plano de vigilância personalizado."
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.mosaico.med.br/genetica-preditiva#webpage",
      "url": "https://www.mosaico.med.br/genetica-preditiva",
      "name": "Genética Preditiva | Mosaico Genética",
      "description": "Avaliação de risco genético preditivo com Dr. Fabrício Maciel em Brasília.",
      "isPartOf": { "@id": "https://www.mosaico.med.br/#clinic" },
      "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "author": { "@id": "https://www.mosaico.med.br/#fabricio" },
      "about": { "@id": "https://www.mosaico.med.br/genetica-preditiva#procedure" },
      "inLanguage": "pt-BR"
    }
  ]
}
```

---

### All 9 service pages — slugs, types, and entity names

| Slug | Schema @type | Entity name |
|---|---|---|
| `/autismo` | MedicalCondition | Transtorno do Espectro Autista (TEA) |
| `/genetica-preditiva` | MedicalProcedure | Genética Preditiva |
| `/deficiencia-intelectual` | MedicalCondition | Deficiência Intelectual |
| `/erros-inatos-metabolismo` | MedicalCondition | Erros Inatos do Metabolismo |
| `/neurогенetica` → `/neurogenetica` | MedicalCondition | Neurogenética Clínica |
| `/genetica-reprodutiva` | MedicalProcedure | Genética Reprodutiva e Aconselhamento Pré-concepcional |
| `/oncogenetica` | MedicalProcedure | Oncogenética — Câncer Hereditário |
| `/interpretacao-exames-geneticos` | MedicalProcedure | Interpretação de Exames Genéticos |
| `/pareceres` | MedicalProcedure | Parecer Médico Especializado em Genética |

---

### Template C: Oncogenética (MedicalProcedure with richer MedicalCondition about)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.mosaico.med.br/" },
        { "@type": "ListItem", "position": 2, "name": "Oncogenética", "item": "https://www.mosaico.med.br/oncogenetica" }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.mosaico.med.br/oncogenetica#procedure",
      "name": "Oncogenética — Avaliação de Câncer Hereditário",
      "description": "Identificação de variantes genéticas associadas a síndromes de câncer hereditário (BRCA1/2, Lynch, Li-Fraumeni, entre outras) com aconselhamento e plano de vigilância personalizado.",
      "url": "https://www.mosaico.med.br/oncogenetica",
      "procedureType": "https://schema.org/DiagnosticProcedure",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "MedicalGenetics" },
      "performedBy": { "@id": "https://www.mosaico.med.br/#fabricio" }
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.mosaico.med.br/oncogenetica#webpage",
      "url": "https://www.mosaico.med.br/oncogenetica",
      "name": "Oncogenética | Mosaico Genética",
      "description": "Avaliação genética para síndromes de câncer hereditário em Brasília.",
      "isPartOf": { "@id": "https://www.mosaico.med.br/#clinic" },
      "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "author": { "@id": "https://www.mosaico.med.br/#fabricio" },
      "about": { "@id": "https://www.mosaico.med.br/oncogenetica#procedure" },
      "inLanguage": "pt-BR"
    }
  ]
}
```

---

## 6. Recommended Improvements to layout.tsx

Add these two fields to the Physician node now (no data unknown):

```json
{
  "honorificPrefix": "Dr.",
  "description": "Médico geneticista com CRM-DF 31124 e RQE 22393, especializado em genética clínica, doenças raras e aconselhamento genético em Brasília.",
  "knowsLanguage": "pt-BR"
}
```

Add to MedicalClinic once hours are confirmed:

```json
{
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "hasMap": "https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/"
}
```

---

## 7. WebSite Schema (add to layout.tsx — missing site-wide)

This enables the Sitelinks Searchbox in Google and anchors the WebSite entity:

```json
{
  "@type": "WebSite",
  "@id": "https://www.mosaico.med.br/#website",
  "url": "https://www.mosaico.med.br",
  "name": "Mosaico Genética",
  "description": "Consultório de genética médica em Brasília — Dr. Fabrício Maciel",
  "inLanguage": "pt-BR",
  "publisher": { "@id": "https://www.mosaico.med.br/#clinic" }
}
```

Add this as a third node inside the existing `@graph` array in `layout.tsx`.

---

## 8. Implementation Checklist

- [ ] Add `honorificPrefix`, `description`, `knowsLanguage` to Physician node in layout.tsx
- [ ] Add WebSite node to @graph in layout.tsx
- [ ] Add `hasMap` to MedicalClinic node in layout.tsx
- [ ] Add `openingHoursSpecification` when hours confirmed
- [ ] Create `/src/app/[slug]/schema.ts` export per service page using templates above
- [ ] Validate each service page at https://search.google.com/test/rich-results after deploy
- [ ] Monitor FAQPage eligibility in Search Console > Rich Results
