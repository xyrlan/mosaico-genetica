# Mosaico Genética — Hub-and-Spoke Content Architecture

**Site:** https://www.mosaico.med.br  
**Médico:** Dr. Fabrício Maciel — CRM-DF 31124 / RQE 22393  
**Data de análise:** 2026-05-13  
**Total de páginas recomendadas:** 1 pillar global + 5 pillar verticais + 19 spokes = **25 páginas**

---

## 1. SERP Overlap Matrix

Metodologia: busca pairwise no Google Brasil para cada par de keywords; contagem de URLs únicas compartilhadas no top-10 orgânico. Limiares aplicados:

| Score | Decisão |
|-------|---------|
| 7–10  | Mesma página (mesmo post) |
| 4–6   | Mesmo cluster (pillar + spoke distintos) |
| 2–3   | Interlink recomendado |
| 0–1   | Separado, sem relação estrutural |

### Pares com maior sobreposição observada

| Keyword A | Keyword B | URLs Comuns Estimadas | Decisão |
|---|---|---|---|
| autismo geneticista | deficiência intelectual geneticista | 6 (Fleury, Mendelics, blog.sabin, institutoinclusaobrasil, geneclin, doctoralia) | Mesmo cluster |
| autismo infantil TEA | autismo adulto TEA | 7 (mosaico.med.br, geneclin, doctoralia, mendelics, sabin, einstein, inclusaobrasil) | Mesma pillar de autismo |
| deficiência intelectual diagnóstico genético | autismo TEA diagnóstico genético | 6 (fleury×2, mendelics, sabin, institutoinclusaobrasil, genomika) | Mesmo cluster |
| oncogenética câncer hereditário | genética preditiva doenças hereditárias | 4 (oncoguia, accamargo, inca, dasa) | Mesmo cluster |
| neurogenética epilepsia | neurogenética ataxia Huntington | 5 (mendelics, geneclin, drcarlosgenetica, neurogenetica.com.br, capcs.uerj) | Mesmo cluster |
| genética reprodutiva pré-natal | genética reprodutiva infertilidade | 4 (igenomix, maternidade brasilia, scielo, nace) | Mesmo cluster |
| interpretação exame genético | parecer genético laudo | 5 (mendelics, oncoguia, tjdft, sergiofranco, labsl) | Mesmo cluster |
| genética preditiva risco hereditário | oncogenética BRCA | 3 (oncoguia, dasa, cortesvillela) | Interlink recomendado |
| erros inatos metabolismo | neurogenética | 3 (mendelics, testedabochechinha, lifegenomics) | Interlink recomendado |
| autismo geneticista Brasília | geneticista DF consulta | 8 (mosaico.med.br, doctoralia×2, saude.df.gov.br, drpedrocastro, neurogenetica.com.br, geneclin, h9j) | Mesma página (homepage/sobre) |

---

## 2. Intent Classification

| Keyword | Intent | Manter? |
|---|---|---|
| geneticista Brasília | Comercial-Informacional | Sim |
| geneticista DF telemedicina | Comercial | Sim |
| consulta geneticista online Brasil | Comercial | Sim |
| autismo infantil geneticista | Comercial-Informacional | Sim |
| autismo adulto diagnóstico tardio genética | Comercial-Informacional | Sim |
| exame genético autismo TEA | Transacional | Sim |
| aconselhamento genético autismo | Informacional-Comercial | Sim |
| deficiência intelectual causa genética | Informacional | Sim |
| geneticista deficiência intelectual Brasília | Comercial | Sim |
| síndrome X Frágil diagnóstico | Informacional-Comercial | Sim |
| câncer hereditário aconselhamento genético | Comercial-Informacional | Sim |
| oncogenética Brasília geneticista | Comercial | Sim |
| BRCA1 BRCA2 teste genético plano saúde | Transacional | Sim |
| câncer mama hereditário rastreamento | Informacional-Comercial | Sim |
| neurogenética doenças neurológicas hereditárias | Informacional | Sim |
| doença Huntington teste genético | Comercial-Informacional | Sim |
| epilepsia genética exame Brasília | Comercial | Sim |
| ataxia cerebelar hereditária diagnóstico | Informacional-Comercial | Sim |
| genética reprodutiva casal Brasília | Comercial | Sim |
| aconselhamento genético pré-natal | Comercial-Informacional | Sim |
| aborto recorrente causa genética | Informacional-Comercial | Sim |
| genética preditiva teste hereditário | Comercial-Informacional | Sim |
| rastreamento genético risco familiar | Comercial-Informacional | Sim |
| erros inatos metabolismo criança | Informacional-Comercial | Sim |
| teste pezinho expandido diagnóstico | Informacional | Sim |
| interpretação laudo genético | Comercial-Informacional | Sim |
| second opinion genética médica | Comercial | Sim |
| parecer genético laudo complexo | Comercial | Sim |
| plano de saúde cobre geneticista ANS | Informacional | Sim |
| exame genético plano de saúde cobertura | Informacional-Transacional | Sim |
| história da genética médica | Informacional | Remover (sem intent comercial) |
| genética molecular conceitos básicos | Informacional | Remover (topo de funil puro) |

---

## 3. Arquitetura Hub-and-Spoke

```
                        /servicos (Pillar Global)
                             |
       ┌──────────┬──────────┼──────────┬──────────┐
       |          |          |          |          |
  /autismo  /neurogenética /oncogenética /genetica  /servicos/
                                        -preditiva  interpretacao
       |          |          |          |          |
  ┌────┤      ┌───┤      ┌───┤      ┌───┤      ┌───┤
  |    |      |   |      |   |      |   |      |   |
spoke spoke spoke spoke spoke spoke spoke   spoke spoke
```

### Diagrama detalhado (Markdown)

```
/servicos (Pillar Global — "Geneticista Brasília")
├── CLUSTER A: /autismo
│   ├── /autismo/infantil
│   ├── /autismo/adulto
│   └── /autismo/exames-geneticos-tea
│
├── CLUSTER B: /deficiencia-intelectual
│   ├── /deficiencia-intelectual/causas-geneticas
│   └── /deficiencia-intelectual/sindrome-x-fragil
│
├── CLUSTER C: /oncogenetica
│   ├── /oncogenetica/cancer-hereditario
│   ├── /oncogenetica/brca-cancer-mama-ovario
│   └── /oncogenetica/rastreamento-familiar
│
├── CLUSTER D: /neurогenetica
│   ├── /neurогenetica/epilepsia-genetica
│   ├── /neurогenetica/doenca-huntington
│   └── /neurогenetica/ataxias-miopatias
│
├── CLUSTER E: /genetica-reprodutiva
│   ├── /genetica-reprodutiva/aconselhamento-pre-natal
│   └── /genetica-reprodutiva/aborto-recorrente-genetica
│
├── CLUSTER F: /genetica-preditiva
│   ├── /genetica-preditiva/rastreamento-risco-familiar
│   └── /genetica-preditiva/exames-plano-de-saude-ans
│
└── CLUSTER G: /interpretacao-laudos-geneticos
    ├── /interpretacao-laudos-geneticos/como-interpretar-laudo
    └── /interpretacao-laudos-geneticos/segundo-parecer-genetico

NOTA: /erros-inatos-metabolismo → interlink de /neurогenetica e /deficiencia-intelectual.
Cobre-se via conteúdo nos spokes relevantes (não página separada); evita desperdício de crawl budget.
```

---

## 4. Inventário Completo de Páginas (25 páginas)

### Pillar Global

| # | URL | Keyword Primária | Intent | Tipo SERP | Palavra-Alvo |
|---|-----|-----------------|--------|-----------|-------------|
| P0 | `/servicos` | geneticista Brasília | Comercial-Informacional | Clinic + Q&A | 3000 palavras |

### Cluster A — Autismo (TEA)

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| A0 | `/autismo` *(pillar)* | geneticista autismo Brasília | Comercial-Informacional | Clinic + Medical resource |
| A1 | `/autismo/infantil` | autismo infantil geneticista diagnóstico | Comercial-Informacional | Medical resource |
| A2 | `/autismo/adulto` | autismo adulto diagnóstico tardio genética | Comercial-Informacional | Medical resource |
| A3 | `/autismo/exames-geneticos-tea` | exame genético autismo TEA | Transacional-Informacional | Medical resource + Q&A |

### Cluster B — Deficiência Intelectual

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| B0 | `/deficiencia-intelectual` *(pillar)* | geneticista deficiência intelectual Brasília | Comercial-Informacional | Clinic + Medical resource |
| B1 | `/deficiencia-intelectual/causas-geneticas` | deficiência intelectual causa genética diagnóstico | Informacional-Comercial | Medical resource |
| B2 | `/deficiencia-intelectual/sindrome-x-fragil` | síndrome X Frágil diagnóstico genético | Informacional-Comercial | Medical resource |

### Cluster C — Oncogenética

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| C0 | `/oncogenetica` *(pillar)* | oncogenética Brasília geneticista | Comercial-Informacional | Clinic + Medical resource |
| C1 | `/oncogenetica/cancer-hereditario` | câncer hereditário aconselhamento genético | Comercial-Informacional | Medical resource |
| C2 | `/oncogenetica/brca-cancer-mama-ovario` | BRCA1 BRCA2 teste genético câncer mama | Transacional-Informacional | Medical resource + Q&A |
| C3 | `/oncogenetica/rastreamento-familiar` | rastreamento genético familiar câncer | Comercial-Informacional | Medical resource |

### Cluster D — Neurogenética

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| D0 | `/neurогenetica` *(pillar)* | neurogenética doenças neurológicas hereditárias | Comercial-Informacional | Clinic + Medical resource |
| D1 | `/neurогenetica/epilepsia-genetica` | epilepsia genética exame diagnóstico Brasília | Comercial-Informacional | Medical resource |
| D2 | `/neurогenetica/doenca-huntington` | doença de Huntington teste genético aconselhamento | Informacional-Comercial | Medical resource + Q&A |
| D3 | `/neurогenetica/ataxias-miopatias` | ataxia cerebelar hereditária miopatia diagnóstico | Informacional-Comercial | Medical resource |

### Cluster E — Genética Reprodutiva

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| E0 | `/genetica-reprodutiva` *(pillar)* | genética reprodutiva casal Brasília | Comercial | Clinic + Medical resource |
| E1 | `/genetica-reprodutiva/aconselhamento-pre-natal` | aconselhamento genético pré-natal casal | Comercial-Informacional | Medical resource |
| E2 | `/genetica-reprodutiva/aborto-recorrente-genetica` | aborto recorrente causa genética | Informacional-Comercial | Medical resource + Q&A |

### Cluster F — Genética Preditiva

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| F0 | `/genetica-preditiva` *(pillar)* | genética preditiva teste hereditário Brasil | Comercial-Informacional | Medical resource |
| F1 | `/genetica-preditiva/rastreamento-risco-familiar` | rastreamento genético risco doenças hereditárias | Comercial-Informacional | Medical resource |
| F2 | `/genetica-preditiva/exames-plano-de-saude-ans` | exame genético plano de saúde ANS cobertura | Informacional-Transacional | Q&A + Medical resource |

### Cluster G — Interpretação de Laudos e Pareceres

| # | URL | Keyword Primária | Intent | Tipo SERP |
|---|-----|-----------------|--------|-----------|
| G0 | `/interpretacao-laudos-geneticos` *(pillar)* | interpretação laudo genético geneticista | Comercial-Informacional | Medical resource + Clinic |
| G1 | `/interpretacao-laudos-geneticos/como-interpretar-laudo` | como interpretar resultado exame genético | Informacional-Comercial | Q&A + Medical resource |
| G2 | `/interpretacao-laudos-geneticos/segundo-parecer-genetico` | segundo parecer genético parecer médico | Comercial | Clinic page |

---

## 5. Oportunidades de Keyword por Cluster (pt-BR, Brasil)

### Cluster A — Autismo
- `geneticista autismo Brasília` — alta prioridade, intenção comercial clara
- `geneticista autismo DF` — variante geo
- `aconselhamento genético autismo infantil`
- `exame microarray autismo TEA`
- `autismo adulto diagnóstico tardio genética`
- `geneticista TEA telemedicina Brasil`

### Cluster B — Deficiência Intelectual
- `geneticista deficiência intelectual Brasília`
- `causa genética deficiência intelectual criança`
- `síndrome X Frágil diagnóstico genético`
- `exame CGH array deficiência intelectual`
- `aconselhamento genético deficiência intelectual`

### Cluster C — Oncogenética
- `oncogenética Brasília`
- `aconselhamento genético câncer hereditário Brasília`
- `BRCA1 BRCA2 teste genético plano de saúde`
- `câncer mama hereditário rastreamento DF`
- `geneticista oncologia Brasília`
- `painel multigênico câncer hereditário`

### Cluster D — Neurogenética
- `neurogenética Brasília`
- `epilepsia genética diagnóstico Brasília`
- `doença de Huntington aconselhamento genético`
- `ataxia cerebelar hereditária exame`
- `miopatia hereditária diagnóstico genético`
- `geneticista neurológico Brasília`

### Cluster E — Genética Reprodutiva
- `aconselhamento genético pré-natal Brasília`
- `genética reprodutiva casal DF`
- `aborto recorrente causa genética Brasília`
- `teste portadores casal antes de engravidar`
- `aconselhamento genético gravidez risco`

### Cluster F — Genética Preditiva
- `genética preditiva Brasília`
- `rastreamento doenças hereditárias teste genético`
- `exame genético plano de saúde ANS cobre`
- `DUT 110 ANS geneticista`
- `medicina de precisão doenças hereditárias Brasília`

### Cluster G — Interpretação e Pareceres
- `interpretação exame genético online`
- `laudo genômico interpretação médico`
- `segundo parecer genética médica`
- `parecer genético criança síndrome rara`
- `aconselhamento pós-teste genético`

---

## 6. Matriz de Links Internos

Legenda: **M** = obrigatório (bidirecional spoke↔pillar), **R** = recomendado (spoke↔spoke no cluster), **O** = opcional (cross-cluster)

### Links obrigatórios (spoke → seu pillar e pillar → spoke)

| De | Para | Tipo |
|----|------|------|
| `/autismo/infantil` | `/autismo` | M |
| `/autismo/adulto` | `/autismo` | M |
| `/autismo/exames-geneticos-tea` | `/autismo` | M |
| `/autismo` | `/autismo/infantil` | M |
| `/autismo` | `/autismo/adulto` | M |
| `/autismo` | `/autismo/exames-geneticos-tea` | M |
| `/deficiencia-intelectual/causas-geneticas` | `/deficiencia-intelectual` | M |
| `/deficiencia-intelectual/sindrome-x-fragil` | `/deficiencia-intelectual` | M |
| `/deficiencia-intelectual` | `/deficiencia-intelectual/causas-geneticas` | M |
| `/deficiencia-intelectual` | `/deficiencia-intelectual/sindrome-x-fragil` | M |
| `/oncogenetica/cancer-hereditario` | `/oncogenetica` | M |
| `/oncogenetica/brca-cancer-mama-ovario` | `/oncogenetica` | M |
| `/oncogenetica/rastreamento-familiar` | `/oncogenetica` | M |
| `/oncogenetica` | todos os spokes C | M |
| `/neurогenetica/epilepsia-genetica` | `/neurогenetica` | M |
| `/neurогenetica/doenca-huntington` | `/neurогenetica` | M |
| `/neurогenetica/ataxias-miopatias` | `/neurогenetica` | M |
| `/neurогenetica` | todos os spokes D | M |
| `/genetica-reprodutiva/aconselhamento-pre-natal` | `/genetica-reprodutiva` | M |
| `/genetica-reprodutiva/aborto-recorrente-genetica` | `/genetica-reprodutiva` | M |
| `/genetica-reprodutiva` | todos os spokes E | M |
| `/genetica-preditiva/rastreamento-risco-familiar` | `/genetica-preditiva` | M |
| `/genetica-preditiva/exames-plano-de-saude-ans` | `/genetica-preditiva` | M |
| `/genetica-preditiva` | todos os spokes F | M |
| `/interpretacao-laudos-geneticos/como-interpretar-laudo` | `/interpretacao-laudos-geneticos` | M |
| `/interpretacao-laudos-geneticos/segundo-parecer-genetico` | `/interpretacao-laudos-geneticos` | M |
| `/interpretacao-laudos-geneticos` | todos os spokes G | M |
| Todos os pillars verticais | `/servicos` | M |
| `/servicos` | Todos os pillars verticais | M |

### Links recomendados (spoke↔spoke dentro do cluster)

| De | Para | Âncora sugerida |
|----|------|----------------|
| `/autismo/infantil` | `/autismo/exames-geneticos-tea` | "exames genéticos para TEA" |
| `/autismo/adulto` | `/autismo/exames-geneticos-tea` | "investigação genética no adulto" |
| `/deficiencia-intelectual/causas-geneticas` | `/deficiencia-intelectual/sindrome-x-fragil` | "síndrome X Frágil" |
| `/oncogenetica/cancer-hereditario` | `/oncogenetica/brca-cancer-mama-ovario` | "mutações BRCA1/BRCA2" |
| `/oncogenetica/brca-cancer-mama-ovario` | `/oncogenetica/rastreamento-familiar` | "rastreamento de familiares" |
| `/neurогenetica/epilepsia-genetica` | `/neurогenetica/ataxias-miopatias` | "outras condições neurogenéticas" |
| `/genetica-reprodutiva/aconselhamento-pre-natal` | `/genetica-reprodutiva/aborto-recorrente-genetica` | "causas genéticas de perdas gestacionais" |
| `/interpretacao-laudos-geneticos/como-interpretar-laudo` | `/interpretacao-laudos-geneticos/segundo-parecer-genetico` | "solicitar segundo parecer" |

### Links opcionais recomendados (cross-cluster)

| De | Para | Justificativa SERP |
|----|------|-------------------|
| `/autismo` | `/deficiencia-intelectual` | SERP overlap 6: Fleury, Mendelics cobrem TEA+DI juntos |
| `/deficiencia-intelectual` | `/autismo` | Mesmo raciocínio |
| `/oncogenetica` | `/genetica-preditiva` | SERP overlap 4: oncoguia, dasa, accamargo, inca |
| `/genetica-preditiva` | `/oncogenetica` | Rastreamento hereditário engloba oncogenética |
| `/genetica-preditiva/exames-plano-de-saude-ans` | `/interpretacao-laudos-geneticos` | Usuário que quer saber sobre cobertura também busca interpretação |
| `/neurогenetica` | `/deficiencia-intelectual` | SERP overlap 3: mendelics, testedabochechinha cobrem EIM+DI |
| Qualquer spoke | `/sobre` | Sinal E-E-A-T: credenciais Dr. Fabrício |
| Qualquer pillar | `/` (homepage) | Âncora: "Mosaico Genética" |

---

## 7. Verificação de Canonicalização (Anti-Canibalização)

| Risco identificado | Resolução |
|---|---|
| "autismo infantil" vs "autismo adulto" | URLs distintas A1 e A2; keyword primária diferente por audiência |
| "aconselhamento genético" aparece em múltiplos clusters | Cada página usa a keyword com modificador específico (pré-natal, oncológico, risco familiar); pillar `/servicos` não otimiza para esse termo genérico |
| "diagnóstico genético" broad match | Nunca é keyword primária de nenhuma página; usada apenas como keyword secundária |
| "erros inatos metabolismo" sem página própria | Coberto em `/neurогenetica` e `/deficiencia-intelectual` como seção H2; evita canibalização e mantém topical authority |
| "pareceres" e "interpretação de laudos" | Agrupados em `/interpretacao-laudos-geneticos` com spokes de intent distinct: informacional (como-interpretar) vs comercial (segundo-parecer) |
| "geneticista Brasília" / "geneticista DF" | Reservado exclusivamente para `/servicos` (pillar global) e homepage; nenhum spoke otimiza para esse termo |

---

## 8. Especificações Técnicas por Tipo de Página

| Tipo | Contagem-Alvo | Template | Schema |
|------|--------------|----------|--------|
| Pillar global `/servicos` | 3000–4000 palavras | Hub + lista de serviços + FAQ | `MedicalBusiness` + `FAQPage` |
| Pillar vertical (A0–G0) | 2500–3500 palavras | Serviço clínico + E-E-A-T Dr. Fabrício + FAQ + CTA | `MedicalWebPage` + `FAQPage` + `BreadcrumbList` |
| Spoke informacional-comercial | 1200–1800 palavras | Condição clínica + quando consultar + como é a consulta + FAQ | `MedicalWebPage` + `FAQPage` |
| Spoke transacional | 1000–1500 palavras | Exame/cobertura + passo a passo + CTA "Agendar" | `MedicalWebPage` + `HowTo` |

### Elementos obrigatórios E-E-A-T por página (YMYL médico)
- Nome, CRM e RQE do Dr. Fabrício em `<footer>` e na seção "Sobre o especialista"
- Data de publicação e data de revisão visíveis (schema `datePublished`, `dateModified`)
- Referências a diretrizes SBGM, CFM, ANS onde aplicável
- Menção explícita de plano de saúde / SUS / telemedicina (disponibilidade)
- Botão WhatsApp CTA acima da dobra em todas as páginas

---

## 9. Ordem de Implementação (Prioridade)

### Fase 1 — Infraestrutura (Semana 1–2)
| Prioridade | URL | Razão |
|---|---|---|
| 1 | `/servicos` | Base de toda a arquitetura; sem ela nenhum spoke tem pillar |
| 2 | `/autismo` | Maior volume de busca local; "geneticista autismo Brasília" = maior intenção comercial imediata |
| 3 | `/oncogenetica` | Câncer hereditário: audiência de alta conversão, BRCA = busca transacional |

### Fase 2 — Spokes de maior intent comercial (Semana 3–6)
| Prioridade | URL | Razão |
|---|---|---|
| 4 | `/autismo/infantil` | Maior volume do cluster A; pais de crianças com TEA = decisores imediatos |
| 5 | `/oncogenetica/brca-cancer-mama-ovario` | Termo transacional; ANS cobre BRCA → plano-de-saúde tem papel decisivo |
| 6 | `/neurогenetica` | Diferencial competitivo do Dr. Fabrício (Doctoralia lista neurogenética) |
| 7 | `/deficiencia-intelectual` | Alta sobreposição com autismo → reforça autoridade topical |
| 8 | `/genetica-reprodutiva` | Volume crescente; casais buscam Brasília + telemedicina |

### Fase 3 — Spokes informativos + long-tail (Semana 7–12)
| Prioridade | URL | Razão |
|---|---|---|
| 9 | `/autismo/adulto` | Diagnóstico tardio é subatendido; diferencial vs pediatras |
| 10 | `/autismo/exames-geneticos-tea` | Captura topo de funil transacional (pais buscando exame específico) |
| 11 | `/oncogenetica/cancer-hereditario` | Informacional que alimenta spoke BRCA |
| 12 | `/oncogenetica/rastreamento-familiar` | Complementa BRCA com perspectiva de família |
| 13 | `/deficiencia-intelectual/causas-geneticas` | Pergunta informacional de alta frequência |
| 14 | `/neurогenetica/epilepsia-genetica` | Epilepsia genética = crescimento de busca pós-diagnóstico |
| 15 | `/genetica-reprodutiva/aconselhamento-pre-natal` | Pré-natal genético: casais mais jovens + telemedicina |
| 16 | `/genetica-preditiva` | Pilar de diferenciação (preventivo) |
| 17 | `/interpretacao-laudos-geneticos` | Serviço único; captura pacientes com laudo em mãos |

### Fase 4 — Complementação (Semana 13–20)
| Prioridade | URL |
|---|---|
| 18 | `/deficiencia-intelectual/sindrome-x-fragil` |
| 19 | `/neurогenetica/doenca-huntington` |
| 20 | `/neurогenetica/ataxias-miopatias` |
| 21 | `/genetica-reprodutiva/aborto-recorrente-genetica` |
| 22 | `/genetica-preditiva/rastreamento-risco-familiar` |
| 23 | `/genetica-preditiva/exames-plano-de-saude-ans` |
| 24 | `/interpretacao-laudos-geneticos/como-interpretar-laudo` |
| 25 | `/interpretacao-laudos-geneticos/segundo-parecer-genetico` |

---

## 10. Top 3 Competidores por Cluster (URLs para Análise)

| Cluster | Competidor 1 | Competidor 2 | Competidor 3 |
|---------|-------------|-------------|-------------|
| Autismo | https://geneclin.com.br/quais-informacoes-devo-levar-para-o-geneticista-na-investigacao-de-autismo/ | https://blog.mendelics.com.br/testes-geneticos-para-autismo-tea/ | https://www.einstein.br/noticias/entrevistas/tatiana-ferreira-almeida |
| Deficiência Intelectual | https://www.fleury.com.br/medico/artigos-cientificos/investigacao-genetica-do-transtorno-do-espectro-autista-e-da-deficiencia-intelectual | https://blog.mendelics.com.br/deficiencia-intelectual/ | https://clinicageneb.com.br/genetica/ |
| Oncogenética | https://accamargo.org.br/sobre-o-cancer/tratamento-oncologico/oncogenetica | https://oncoegenetica.com.br/oncogenetica/ | https://drcarlosgenetica.com.br/especialidades/oncogenetica/ |
| Neurogenética | https://www.neurogenetica.com.br/ | https://geneclin.com.br/neurogenetica/ | https://blog.mendelics.com.br/neurogenetica-exames-geneticos-para-doencas-neurologicas-3/ |
| Genética Reprodutiva | https://schupp.com.br/medicina-fetal/aconselhamento-genetico/ | https://clinicagenics.com/aconselhamento-genetico-por-que-fazer-antes-de-engravidar/ | https://www.maternidadebrasilia.com.br/blog/aconselhamento-genetico/ |
| Genética Preditiva | https://www.dasagenomica.com/blog/aconselhamento-genetico/ | https://blog.gntech.med.br/aconselhamento-genetico/ | https://www.inca.gov.br/conteudo/aconselhamento-genetico |
| Interpretação/Pareceres | https://blog.mendelics.com.br/guia-de-consulta-sobre-testes-geneticos-o-que-saber-como-escolher-e-como-pedir-um-teste-genetico/ | https://sergiofranco.com.br/exames-geneticos | https://genetika.com.br/ |

---

## 11. Notas de Contexto Brasileiro

### Plano de saúde / SUS
- A ANS (RN 465/2021 / DUT 110) obriga planos a cobrirem exames genéticos diagnósticos quando solicitados por geneticista, neurologista, oncologista ou hematologista
- Em 2026, o Ministério da Saúde incluiu sequenciamento de exoma (WES) no SUS para doenças raras → oportunidade de conteúdo
- Toda página de spoke deve ter uma seção "Cobertura pelo plano de saúde" explicando critérios ANS para aquela condição específica

### Linguagem local
- Usar "Distrito Federal" e "DF" além de "Brasília" nas meta descriptions e H1 dos pillars verticais
- "Telemedicina para todo o Brasil" deve aparecer em fold acima em todos os pillars
- "Doenças raras" como categoria de busca está crescendo após comunicados do Ministério da Saúde (2026)

### Diferencial do Dr. Fabrício
- CRM-DF 31124 / RQE 22393: mencionar em schema `physician` e em cada página
- Doctoralia já ranqueia ele para "geneticista Brasília" e "neurogenética Brasília" — usar isso como prova social
- Mosaico.med.br já aparece nos SERPs para "geneticista autismo Brasília" e "neurogenética Brasília" — fortalecer com link building interno antes de externo
