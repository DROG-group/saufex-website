---
title: "(111) The first draft of a realistic GetResilience app prototype"
slug: "111-The-first-draft-of-a-realistic-GetResilience-app-prototype"
author: "Onno Hansen-Staszyński"
date: "2026-04-10"
updated: "2026-04-10"
description: "Taking a legally realistic approach to designing a mass-flagging app."
draft: false
---
## Introduction
While the preliminary outline of the [GetResilience app]( https://getresilience.eu/) provocatively proposes a simplification of the current challenging flagging process under the DSA, a realistic prototype needs to adhere to both the DSA and the Saufex objectives and results, and solve ten major dilemmas (see: [blog post 110](https://saufex.eu/insights/110-The-ten-dilemmas-for-the-GetResilience-app/)).\
Below a first draft of the architecture of the GetResilience app prototype is presented.
## Architecture draft
### Core design principle: layered legitimacy pipeline
The system enforces graduated evidentiary weight while strictly avoiding:
- user profiling 
- automated legal attribution 
- automated generation of legally valid notices

| **Layer** | **Actor**| **Legal weight**|**Liability**|
| ------------- | ------------- | ------------- | ------------- |
| L0 | Anonymous / low-friction user | Signal only | None |
| L1 | Identified user | Weak notice | User |
| L2 | Resilience Council (RC) member | Structured notice | Shared (user + RC) |
| L3 | RC validated notice | DSA-compliant notice | RC + platform |
| L4 | System-assisted RC notice | DSA-compliant notice (enhanced) | RC (primary), system (tooling only) |\

**Key principles**
-	No automated system generates legally meaningful notices independently
-	All legally relevant notices originate from identifiable human actors 
- The system operates strictly as decision-support tooling, not a legal actor 
### Content Classification Boundary
To prevent legal ambiguity and liability leakage, all content is strictly routed:
| **Category** | **Legal path**|
| ------------- | ------------- | 
| Illegal content | Eligible for DSA Art. 16 notice |
| Harmful but legal | Not eligible for notice; systemic risk only |
| FIMI signal | Intelligence pipeline only |

### Enforcement at schema level
legal_eligibility: {eligible, not_eligible, requires_rc_override}

**RC override requires**:
- explicit legal reasoning 
- multi-member consensus attestation 
### End-to-End Flow
**A. Intake layer (frictionless but controlled)**\
→ DSA Art. 16 (Notice & Action Mechanism)

**Relevant provisions**:
- Art. 16(1–2): submission mechanisms 
- Art. 16(3): sufficiently precise and substantiated notice

**Flow**
- URL submission (no login required) 
- Lightweight classification: harm type (illegal / harmful / FIMI signal); optional AI suggestion (strictly non-binding, non-authoritative) 
- Minimal structured input: guided reasoning templates 
- Optional identity: anonymous (default); logged-in (email / eID optional)

**Safeguards**
- adaptive rate limiting 
- progressive friction (CAPTCHA, cooldowns) 
- duplicate clustering 
- non-identity-based cost imposition (proof-of-work, entropy checks)

**Constraint**
- No submissions at this stage are transmitted to platforms 

**B. Normalisation and structuring layer**\
→ Art. 16(3)(a–d)

**Requirements enforced**
- explanation of illegality 
- precise location 
- identity (if applicable) 
- good faith statement

**Flag unit**\
Flag {
  content_id
  url
  platform
  jurisdiction
  harm_type
  legal_basis
  legal_eligibility
  narrative_reasoning
  structured_tags (TTPs, actors, narratives)
  confidence_score
  provenance
  evidence_origin
  ai_influence_flag
}

**Key features**
- Dual taxonomy: Legal (DSA); Analytical (FIMI/TTP) 
- Jurisdiction resolver ensures legal basis validity 
- Structured good-faith record stored per flag

**C. Aggregation Layer**\
→ Art. 20, 23, 34]

**Purpose**
- Mitigate abuse while preserving anonymity

**Operations**
- cluster similar flags 
- compute: volume; diversity (session-level only); consistency; temporal patterns

**Metrics**
- cluster integrity score 
- semantic variance 
- burst anomaly detection

**Output**
- Signal strength score (content-level only)

**Constraints**
- no identity-based weighting 
- no persistent reputation systems 
- no cross-session user linkage

**D. Triage layer**\
→ Art. 34–35

**Functions**
- severity classification 
- urgency detection (virality, time sensitivity) 
- deduplication refinement 
- queue prioritisation

**Output**\
Priority tiers:
- Critical 
- High 
- Standard 
- Low

**Additional controls**
- cluster integrity affects priority 
- backpressure mechanism when RC capacity is exceeded

**Constraint**
- no legal determinations

**E. Resilience Council (RC) layer**\
→ Art. 16, 20, 22

**Structure**
- jurisdiction-specific 
- domain-specific 
- certified, identifiable members

**Governance hardening**
- randomised case assignment 
- conflict-of-interest declaration (mandatory) 
- shadow review system 
- cross-RC calibration

**Decision model (expanded)**\
decision_type:
  - validated_illegal
  - validated_terms_violation
  - insufficient_evidence
  - non_actionable
  - systemic_risk_only

**Additional outputs**
- confidence_level: [low, medium, high]
- disagreement_flag: true/false

**F. Attestation model**\
→ Art. 16(3)(d)

**Modes**
| **Mode** | **Actor** | **Risk** |
| ------------- | ------------- | ------------- |
| User-attested | Identified user | Low |
| RC-attested | RC member | Medium |
| RC-consensus | Multiple RC | Lower |
| System-assisted RC | RC + tooling | Controlled |

**System role**
- pre-fill structure 
- validate completeness 
- maintain audit logs

**Constraint**
- system cannot assert legal claims 
- all notices require human-origin attestation

**G. Submission Layer**\
→ Art. 16 + Platform Interfaces

**Multi-channel delivery**
- API 
- structured email 
- trusted flagger channels

**Notice includes**
- legal basis 
- reasoning 
- evidence 
- attestation 
- audit metadata
- platform-specific adapters 
- platform intelligence module tracking: acceptance rates; response times; rejection patterns

**H. Post-submission lifecycle**\
→ Art. 17, 20, 21

**Processes**
- platform response tracking 
- counter-notice handling 
- complaint workflows 
- dispute resolution 
- escalation to DSC 
- structured ingestion of platform statements of reasons 
- feedback loop into RC accuracy and taxonomy

**I. SLA model**\
→ Art. 20 + Art. 34

**Dual-track SLA**
| **Track** | **Purpose**| 
| ------------- | ------------- | 
| Legal SLA | notice validation |
| Intelligence SLA | FIMI detection |

**Additional rules**
- automatic escalation 
- priority bump via virality 
- capacity-based threshold adjustment

### GDPR and identity architecture
Principles
- data minimisation 
- purpose limitation 
- privacy by design

**Identity model**
| **Layer** | **Identity**| 
| ------------- | ------------- | 
| L0 | none |
| L1 | optional|
| L2+ | required |

**Techniques**
- pseudonymous IDs 
- separate identity vault 
- strict retention policies
- strict functional data separation 
- cryptographic detachment for erasure conflicts

### Anti-Abuse Architecture
Non-Profiling Trust Model
- no persistent profiling 
- no behavioural scoring 
- trust derived from structure + aggregation

**Flag-level signals**
- completeness 
- coherence 
- evidence quality

**Aggregation metrics**
- volume 
- diversity 
- consistency 
- temporal distribution 
- cluster integrity

**Session-level safeguards**
- temporary session IDs 
- velocity limits 
- no cross-session linkage 
- short TTL

**Adversarial detection**
- burst detection 
- linguistic similarity 
- anomaly detection 
- operates at cluster level only

**RC as trust anchor**\
All legal trust derives from RC:
- identifiable 
- certified 
- accountable

### Decentralisation Model
**RC creation**
- open but governed

**Requirements**
- standard schema adoption 
- certification 
- conflict-of-interest declaration

**Additional safeguards**
- periodic audits 
- cross-RC calibration 
- meta-governance layer

### Systemic risk intelligence layer
**Capabilities**
- TTP pattern extraction 
- campaign detection 
- cross-platform signal correlation

**Outputs**
- ttp_pattern_id
- confidence
- affected_jurisdictions

**Constraint**
- no user-level linkage 
- content-level only

### Failure mode design
**False positive cascade**
- triggers audit 
- cluster re-evaluation 
- RC performance impact

**Coordinated silence attack**
- external signal ingestion 
- anomaly detection on absence

**Platform non-compliance**
- escalation to DSC 
- aggregated evidence bundles

### Key Trade-offs
- Low friction vs abuse → aggregation + cost imposition + RC gating 
- Anonymous input vs legal robustness → separation of signal and notice 
- Liability vs automation → human-only legal assertions 
- GDPR vs effectiveness → content-centric trust model 
- Scale vs expertise → triage + SLA + prioritisation

### Strategic Position
**The system functions as**:
- A distributed, human-validated evidence generation and escalation infrastructure for information integrity in the EU.

**It aligns with**:
- DSA 
- GDPR 
- Saufex objectives

### Final Note
This architecture avoids:
- automated legal claims 
- user profiling 
- uncontrolled reporting

while enabling:
- scalable signal collection 
- accountable validation 
- adversarial resilience 
- policy-grade intelligence generation 

## What the architecture does
This draft architecture enables a scalable, legally compliant pipeline that turns raw user reports into validated, actionable notices without relying on user profiling or automated legal decisions.

It works by separating:
- signal collection (open, low-friction, often anonymous),
- human validation (via a certified Resilience Council),
- and legal submission (DSA-compliant notices).

Trust is built through structured data, aggregation, and expert review, not user identity or reputation. The system itself never makes legal claims so liability stays with identifiable actors. At the same time, it generates systemic risk intelligence (e.g., coordinated campaigns) without tracking individuals.

### In summary
The draft architecture enables a privacy-preserving, human-in-the-loop infrastructure for producing reliable legal and policy-grade signals from untrusted input at scale.
