---
title: "What is a FIMI incident versus a campaign?"
slug: "What-is-a-FIMI-incident"
author: "Julian"
date: "2024-11-15"
updated: "2024-11-22"
description: "Here we discuss the difference between a FIMI Incident and a Campaign"
---
In the context of FIMI many organizations have adopted the terminology of Incident versus a campaign. This comes from the world of Cyber Security and in particular STIX (Structured Threat Information Expression). In [STIX](https://stixproject.github.io/documentation/idioms/campaign-v-actors/) terminology, an individual or group involved in malicious cyber activity is called a Threat Actor. A set of activity (Incidents) carried out by Threat Actors using specific techniques (TTP) for some particular purpose is called a Campaign. So for example every attempt to access a secure system would be an "incident" and the Incidents that use TTPs would collectively form a Campaign.

According to [Viginum](https://github.com/VIGINUM-FR/Doctrine-OpenCTI) a French organization extensively involved in collecting data on FIMI:

1.  "A campaign is defined as a planned attack over time, typically carried out by a persistent threat actor. In OpenCTI, it can be linked to a malicious actor (Threat actor), exploit tools, infrastructures or tactics, techniques and procedures (TTPs), target individuals, etc. When the campaign already has a public name, it is recommended to capitalize it and enter the possible different meanings of it as aliases. Then, the analyst must enter the campaign under precise terms." "INCIDENT An incident is an information manipulation activity circumscribed around a specific subject or a particular event. Campaigns are, in general, made up of multiple incidents linked to the same actor This object allows you to describe the basic information related to an incident (name, description, start and end dates, objectives, etc.)."
