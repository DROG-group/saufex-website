---
title: "(149) Beyond content"
slug: "149-Beyond-content"
author: "Onno Hansen-Staszyński"
date: "2026-11-11"
updated: "2026-11-11"
description: "Establishing the responsibilities and accountabilities of data applications."
draft: true
---
## Introduction
The checklists presented in blog post 150 could be applied beyond the scope of content to the scope of user data in general. In that case the roles are more general: data actor and application. The question of responsibility then translates to a question of sovereignty, being defined as whether a data actor is in control or needs to trust an application that is in control.

## Sovereignty checklist
Can the data actor exercise control over their data or must they trust an application?
- Data sovereignty (data): Does the data actor have to trust the application: 
  - with custody of the data?
  - to release/ transfer the data when the data actor changes provider?
- User sovereignty (decision): Does the data actor have to trust the application: 
  - to ask for their authorisation before performing computations on their data?
- Governance sovereignty (execution/ accountability): Does the data actor have to trust the application: 
  - to respect specific computations authorised by the data actor?
  - to interpret the authorisation correctly?
  - to execute the authorised computations correctly?
  - to execute consequential computations correctly?
  - to check its own process correctly?
  - to report accurately what it has done?

## Risk accountability checklist
How is responsibility for downstream risks distributed? Ask of an application:
- Create: Does its architecture create risks that downstream actors inherit?
- Amplify: Does it amplify risks already present downstream?
- Transfer: Does it transfer risks to another actor?
- Constrain: Does it constrain risks that would otherwise arise?
- Observe: Does it make downstream risks observable and auditable?
- Inform: Does it provide downstream actors with the information necessary to assess and mitigate those risks?
