# Mosaico Genética — SEO Action Plan

Score now: **53 / 100**. Estimated score after Critical+High items: **78–82 / 100**.

Effort key: 🟢 small (< 1 h), 🟡 medium (1–4 h), 🔴 large (1+ day).

---

## CRITICAL — fix this week

### C1. Fix canonical URL host (`src/app/layout.tsx:21`) 🟢
**Why:** Canonical says `https://mosaico.med.br`; site lives at `https://www.mosaico.med.br`. Apex 308→www, so canonical points to a redirect source. Google may demote.

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mosaico.med.br"),
  title: { default: "...", template: "%s | Mosaico Genética" },
  description: "...",
  alternates: { canonical: "/" },          // root-relative now safe
  openGraph: {
    title: "...",
    description: "...",
    url: "https://www.mosaico.med.br",
    siteName: "Mosaico Genética",
    locale: "pt_BR",
    type: "website",
    images: ["/logomosaico.png"],          // resolved via metadataBase
  },
};
```

### C2. Per-page canonical + Open Graph for `/sobre` (`src/app/sobre/page.tsx`) 🟢
**Why:** Currently `/sobre` declares the homepage as canonical → de-indexing risk.

```ts
export const metadata: Metadata = {
  title: "Dr. Fabrício Maciel — Geneticista Brasília",
  description: "Conheça o Dr. Fabrício Maciel, médico geneticista (CRM 31124 / RQE 22393) em Brasília. Formação, áreas de atuação e trajetória profissional.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o Dr. Fabrício Maciel — Mosaico Genética",
    description: "Trajetória, formação acadêmica e áreas de atuação em genética médica.",
    url: "https://www.mosaico.med.br/sobre",
    type: "profile",
    images: ["/fabri2.jpeg"],
  },
};
```

### C3. Render FAQ JSON-LD correctly (`src/app/components/FAQSection.tsx`) 🟢
**Why:** `next/head` is silently ignored in App Router. FAQPage schema currently never reaches HTML.

Replace the `<Head>` block with a direct `<script>` tag rendered inline:

```tsx
// inside FAQSection return, outside <Head>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }),
  }}
/>
```

Remove `import Head from 'next/head'`.

### C4. Add Physician + MedicalClinic JSON-LD to layout 🟡
**Why:** Zero structured data today. Add once in `layout.tsx` (Server Component) so it ships on every page.

```tsx
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.mosaico.med.br/#clinic",
      name: "Mosaico Genética",
      url: "https://www.mosaico.med.br",
      logo: "https://www.mosaico.med.br/logomosaico.png",
      image: "https://www.mosaico.med.br/logomosaico.png",
      telephone: "+556121931447",
      medicalSpecialty: "MedicalGenetics",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Brasil 21 - SHS, Quadra 6, Bloco A, Sala 606 - Asa Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "70316-102",
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: -15.7933292, longitude: -47.8930172 },
      areaServed: { "@type": "Country", name: "Brasil" },
      sameAs: [
        "https://www.instagram.com/mosaico.gen",
        "https://lattes.cnpq.br/6131512439187623",
        "https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/",
      ],
      // openingHoursSpecification: [...]   // fill once hours are confirmed
    },
    {
      "@type": "Physician",
      "@id": "https://www.mosaico.med.br/#fabricio",
      name: "Fabrício Maciel",
      jobTitle: "Médico Geneticista",
      medicalSpecialty: "MedicalGenetics",
      identifier: [
        { "@type": "PropertyValue", propertyID: "CRM-DF", value: "31124" },
        { "@type": "PropertyValue", propertyID: "RQE", value: "22393" },
      ],
      worksFor: { "@id": "https://www.mosaico.med.br/#clinic" },
      sameAs: ["https://lattes.cnpq.br/6131512439187623"],
      image: "https://www.mosaico.med.br/fabri2.jpeg",
    },
  ],
};

// inside <html>:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
```

Validate with https://validator.schema.org and Google Rich Results test.

---

## HIGH — fix this month

### H1. Fix mashed heading text (`src/app/components/ContactSection.tsx:63-65`) 🟢
**Why:** Headings render as `Compartilheseucasocomagente!` etc. Bad for tokenization by Google + AI.

The `text.split(" ")` pattern is used because `H3Card` animates each word. Pass through spaces:
```tsx
// inside H3Card render
{text.map((w, i) => (
  <span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}>{w}</span>
))}
```
Or render words with explicit `&nbsp;`/space separator.

### H2. Single H1 per page (`src/app/components/HeroDescription.tsx:40`) 🟢
Drop the second `<h1 className="sr-only">Mosaico Genética Médica</h1>` or convert it to `<h2 className="sr-only">`. Also fix "Brasilia" → "Brasília" at line 24.

### H3. Expand `/sobre` content + add reviewer/last-updated 🟡
Target ≥ 600 words. Sections to add: formação completa, residência, fellowship, publicações (ou link a Lattes), áreas de atuação, abordagem clínica, sociedades médicas (SBGM), conselhos. Add at top:
```
Última revisão: 2026-05-13. Conteúdo revisado por Dr. Fabrício Maciel (CRM 31124 / RQE 22393).
```

### H4. Build out service pages (one route per area) 🔴
Split `ServicesSection` H3s into routes:
- `/servicos/autismo`
- `/servicos/genetica-preditiva`
- `/servicos/deficiencia-intelectual`
- `/servicos/erros-inatos-metabolismo`
- `/servicos/neurogenetica`
- `/servicos/genetica-reprodutiva`
- `/servicos/oncogenetica`
- `/servicos/interpretacao-exames-geneticos`
- `/servicos/pareceres`

Each page: 600–900 words, FAQ, `MedicalProcedure` or `MedicalCondition` schema, internal link back to `/` and `/sobre`, contact CTA. Add to sitemap.

### H5. Fix sitemap (`src/app/sitemap.ts`) 🟢
- Remove dynamic `new Date()` (use literal date constants or a `lastModifiedMap`).
- Change `changeFrequency` to `monthly` for `/` and `/sobre`.
- After H4, add every new service URL.

### H6. Add security headers (`next.config.mjs`) 🟡
```js
async headers() {
  const policies = [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  ];
  return [{ source: '/:path*', headers: policies }];
}
```
Add a CSP after auditing third-party origins (GTM, boaconsulta, emailjs, wa.me, instagram, lattes, google maps).

### H7. Add `/llms.txt` 🟢
Create `public/llms.txt`:
```
# Mosaico Genética — Dr. Fabrício Maciel
> Consultório médico em Brasília-DF dedicado a genética médica clínica: diagnóstico, acompanhamento e aconselhamento genético para famílias com doenças raras. Atendimento presencial em Brasília e telemedicina em todo o Brasil.

## Principais
- [Página inicial](https://www.mosaico.med.br/): visão geral, serviços, FAQ, contato
- [Sobre o Dr. Fabrício Maciel](https://www.mosaico.med.br/sobre): formação, CRM 31124, RQE 22393

## Contato
- WhatsApp: +55 61 9 9857-0759
- Telefone: +55 61 2193-1447
- Endereço: Brasil 21 - SHS, QD 06, Bloco A, sala 606 - Asa Sul - Brasília/DF, CEP 70316-102
```

### H8. Replace anchor "links" with real internal links 🟡
Service H3s on homepage currently are not clickable. Convert each to a `<Link href="/servicos/...">` once H4 lands.

### H9. Add openingHours to `MedicalClinic` schema and visible on page 🟢
Confirm office hours and display them in the footer + JSON-LD `openingHoursSpecification`.

---

## MEDIUM — within 1–3 months

### M1. Improve title tags with primary keyword 🟢
- `/`: `Médico Geneticista em Brasília | Mosaico Genética — Dr. Fabrício Maciel` (≤ 60 chars).
- `/sobre`: `Sobre Dr. Fabrício Maciel — Geneticista em Brasília`.

### M2. Trim `/sobre` meta description to ~155 chars 🟢

### M3. Improve alt text 🟢
- `LogoImage` → `Logo Mosaico Genética`
- `Especialista` → `Dr. Fabrício Maciel, médico geneticista`
- `Mulher com criança` → `Mãe e filha em consulta de aconselhamento genético`
- `linktree-logo` (Lattes icon) → `Lattes` (it's not Linktree)

### M4. Add Google Business Profile review schema 🟡
If reviews are surfaced via your `ReviewSectionGoogle` component, expose `AggregateRating` on the `MedicalClinic` schema (only if permitted by review-platform ToS).

### M5. Add breadcrumbs on `/sobre` (and future service pages) 🟢
Use `BreadcrumbList` schema + visible breadcrumb component.

### M6. Convert PNG hero to AVIF on disk 🟢
`image3.png` is sent as WebP via Next/Image, but storing an AVIF base would cut hero LCP bytes further. Convert in `public/`.

### M7. Audit `framer-motion` + `@splinetool/react-spline` impact 🟡
Confirm both are dynamic-imported and only mount when needed. Otherwise bundle bloat hurts INP on low-end mobiles (your target users likely on mid-tier Android).

### M8. Drop `prefer_related_applications: true` from manifest 🟢
Without `related_applications` declared, this property is ignored at best, a Lighthouse warning at worst.

### M9. Add `last-reviewed`/`dateModified` to medical pages 🟢

### M10. Run real CWV measurement 🟡
Set up Google API key (`scripts/google_auth.py --setup`), then re-run `pagespeed_check.py`. Add the resulting LCP/INP/CLS to the report.

---

## LOW — backlog

- L1. Add a `Blog` (`/blog`) with conditions explainers (genetics 101, autism genetics, hereditary cancer, etc.). Each post 1,000–1,500 words. Pillars: autismo, oncogenética, genética reprodutiva.
- L2. Add referral-friendly "Para colegas médicos" page → triggers physician-to-physician links.
- L3. Submit clinic to Brazilian medical directories (DoctoraLia, Catalogo.med.br, Conexa Saúde, etc.) for citation diversity.
- L4. Add `aria-label` to icon-only buttons in WhatsAppWidget + MobileContactButtons.
- L5. Consider `/contato` standalone page rather than only homepage anchor.
- L6. Add Vercel Speed Insights or @vercel/analytics for ongoing CWV monitoring.

---

## Suggested implementation order (2 sprints)

**Sprint 1 (week 1):** C1, C2, C3, C4, H1, H2, H5, H7, M1, M2 → unblocks indexing + adds schema. Expected score: ~70.

**Sprint 2 (weeks 2–4):** H3, H4, H6, H8, H9, M3, M5, M9, M10 → expands surface + hardens platform. Expected score: ~80.
