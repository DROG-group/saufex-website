---
title: "(112) GetResilience – legal and architectural specification"
slug: "112-GetResilience-legal-and-architectural-specification"
author: "Onno Hansen-Staszyński"
date: "2026-04-13"
updated: "2026-04-13"
description: "The 1.3 version of the mass-flagging app architecture."
draft: false
--- 
The following is the outcome of iterative rounds of DROG brainstorming and reflections triggered by blog posts [110](https://saufex.eu/insights/110-The-ten-dilemmas-for-the-GetResilience-app/) and [111](https://saufex.eu/insights/111-The-first-draft-of-a-realistic-GetResilience-app-prototype/).

## Abstract
GetResilience is a citizen-led infrastructure designed to support enforcement and systemic risk analysis under Regulation (EU) 2022/2065 (Digital Services Act, DSA) and Regulation (EU) 2016/679 (GDPR).

The system separates two core functions:
- Track A: legally accountable notice production under the DSA 
- Track B: anonymised systemic risk intelligence 

The architecture is grounded in four principles:
- Strict separation between signal and legal claim 
- Human attribution of all legal determinations 
- Data minimisation and compartmentalisation by design 
- Co-responsibility with clear entity-level accountability 

GetResilience operates as a provider of hosting services and assumes a compliance posture that remains valid even if classified as a restricted-access online platform under the DSA.

## 1. Operating model
The platform consists of two structurally distinct but complementary tracks.

### 1.1 Track A - legal notice production
- Scope: Illegal content only 
- Purpose: Production of high-quality Art. 16 DSA notices 
- Standard: High evidentiary threshold 
- Output: Legally reasoned notices signed by identified natural persons 
- Volume: Low 

### 1.2 Track B — systemic risk intelligence
- Scope: Cross-platform content, including harmful-but-legal material 
- Purpose: Detection of coordinated manipulation (FIMI), TTPs, and amplification patterns 
- Output: Aggregated, anonymised analytical insights 
- Volume: High 

The separation ensures that:
- legal claims are deliberate and accountable, and 
- large-scale input remains non-legal and non-attributable 

## 2. Legal entity and regulatory position
Proposed entity: Stichting GetResilience (Netherlands)

### 2.1 DSA Classification
- Provider of intermediary services (Art. 3(g)) 
- Provider of hosting services (Art. 3(g)(iii)) 
- May qualify as a restricted-access online platform depending on interpretation of “dissemination” 

### 2.2 GDPR role
- Data controller for all personal data processed within the system 

## 3. Responsibility model
Responsibility is distributed but not displaced.

| **Actor** | **Role**| **Responsibility**|
| ------------- | ------------- | ------------- |
| Stichting GetResilience | Infrastructure provider | System design, compliance, and final accountability |
| RC Members | Legal assessors | Substantive legal reasoning and co-signing of notices |
| Target Platforms | Content hosts | Final enforcement decisions |

### 3.1 Legal construction
RC members act as co-notifiers under Art. 16 DSA\
The Stichting: 
- does not act as an automated notifier 
- retains ultimate responsibility for system outputs and compliance 

This structure avoids artificial liability externalisation and ensures regulatory credibility.

## 4. Signal–content classification boundary
All inputs are processed through a strict classification boundary.

| **Category** | **Legal path**|
| ------------- | ------------- |
| Illegal content | Track A (after validation) |
| Harmful but legal | Track B only |
| FIMI signal | Track B only |

No legal claim may originate below L2 (see Section 5).

## 5. Actor model and legitimacy layers
| **Layer** | **Actor** | **Function** | **Legal effect** |
| ------------- | -------------| ------------- | ------------- |
| L0 | Anonymous user | Signal output | No legal status |
| L1 | Identified user | Structured output | Limited evidentiary value |
| L2 | RC member | Legal assessment | Draft notice |
| L2 | Light RC member | Rapid threat validation | Art. 18 escalation |
| L3 | 3-of-N RC members | Validated consensus | Art. 16 notice |


### 5.1 EMoD qualification
Only EMoD-trained individuals may:
- perform legal assessments 
- participate in notice validation 
- sign notices 

## 6. Signal intake architecture (L0)
### 6.1 Data model
L0 submissions are strictly limited to:
- URL or content locator 
- Platform identifier 
- Neutral, non-legal harm classification 
### 6.2 Prohibited inputs
At L0, the system does not allow:
- legal labels of illegality (e.g. terrorism, CSAM) 
- evidentiary uploads (e.g. screenshots) 
- personal data 
- persistent identifiers 
### 6.3 Legal characterisation
L0 inputs are treated as:
- non-attributable signals 
- metadata about third-party content

They:
- do not constitute legal claims 
- do not independently establish “actual knowledge” under Art. 6 DSA 
### 6.4 Operational constraint
RC members must:
- independently verify all content 
- reconstruct evidentiary basis outside the L0 signal 

## 7. Core workflows
#### 7.1 Track A - notice production
L0 signal\
↓\
RC triage and independent verification (L2)\
↓\
Draft legal notice with reasoning\
↓\
Independent concurrence by two additional RC members\
↓\
3-of-N consensus (L3)\
↓\
Notice signed by RC members\
↓\
Submission to target platform (Art. 16)

**Properties**:
- No automated legal claims 
- Full human accountability 
- Documented reasoning and audit trail 

### 7.2 Internal Notice Handling (Art. 16 and 17 DSA)
The platform maintains:
- Notice submission mechanism 
- Sufficiency assessment 
- Content restriction/removal where appropriate 
- Statements of reasons issued to affected users 

### 7.3 Art. 18 - criminal threat reporting
**Legal principle**\
As a hosting provider, GetResilience must directly inform competent law enforcement authorities when aware of information giving rise to a suspicion of a criminal offence involving a threat to life or safety.

**Workflow**\
Signal enters system\
↓\
Automated pre-filter (non-decisional)\
↓\
Priority review queue\
↓\
Rapid human assessment by RC member (L2-light)\
↓\
IF reasonable suspicion:\
   ↓\
Direct notification to:
 - competent national authority (e.g. Dutch law enforcement)
  - or Europol, where appropriate\
   ↓\
Optional parallel notification to target platform\
ELSE:\
   ↓\
Reclassified as Track B signal

**Safeguards**
- Mandatory human validation 
- “Reasonable suspicion” standard 
- Time-bound review 
- Full audit logging 
- Jurisdiction-aware routing 

### 7.4 Track B - intelligence aggregation
**Inputs**:
- L0 and L1 signals\

**Processing**:
- clustering 
- pattern detection 
- cross-platform correlation\

**Output**:
- aggregated, anonymised reports\

**Constraints**
- No legal claims 
- No individual attribution 
- No enforcement actions 

## 8. DSA Compliance Position
**Art. 6 - safe harbour**
Maintained because:
- no active role in content creation 
- knowledge arises only after human validation 
- expeditious action pathways exist\

**Art. 8 - no general monitoring**
- event-driven processing only 
- no proactive scanning obligations\

**Art. 16 - notice and action**
- high-quality, structured notices 
- identifiable human notifiers 
- substantiated legal reasoning\

**Art. 17 - statement of reasons**
- implemented for internal moderation decisions\

**Art. 18 - criminal offences**
- direct reporting to law enforcement 
- human-in-the-loop validation\

**Art. 23 - misuse prevention**
- rate limiting 
- anti-abuse safeguards 
- structured escalation 

## 9. GDPR Compliance Framework
### 9.1 Legal basis (Art. 6)
- Art. 6(1)(f) — Legitimate interest

### 9.2 Special Categories of Data (Art. 9)
**Track A**
- Art. 9(2)(f) — establishment, exercise, or defence of legal claims

**Track B**
- Art. 9(2)(g) — substantial public interest 
- Conditional on applicability under Dutch law (UAVG) 

### 9.3 Safeguards
- Data minimisation by layer 
- Functional separation of processing contexts 
- Restricted access to sensitive data (L2+) 
- Anonymisation before aggregation 
- No automated decisions with legal effects (Art. 22) 

## 10. Anti-abuse and trust model
**L0 safeguards**
- rate limiting 
- CAPTCHA / proof-of-work 
- entropy and anomaly detection

**System-level protections**
- cluster-based adversarial detection 
- no persistent behavioural profiling 
- no reputation scoring

**Trust Model**\
Trust is derived from:
- structured validation 
- human expertise 
- consensus mechanisms 

## 11. Liability and risk acknowledgement
**RC members**
- act as co-signatories 
- contribute legal reasoning 
- operate under explicit informed consent

**Stichting GetResilience**\
Retains ultimate responsibility for: 
- system operation 
- compliance 
- procedural integrity 

## Conclusion
Version 1.3 establishes GetResilience as:
- a human-centred DSA enforcement support system 
- a privacy-preserving intelligence infrastructure 
- a legally grounded, co-responsible architecture

While preserving its core innovation: **The structural separation of anonymous signal generation from accountable legal action.**
