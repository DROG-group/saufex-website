---
title: "(162) Contestability Before Correction: An Epistemically Corrigible Framework for Trustworthy Human–AI Interaction"
slug: "162-Contestability-Before-Correction-An-Epistemically-Corrigible-Framework-for-Trustworthy-Human–AI-Interaction"
author: "Onno Hansen-Staszyński"
date: "2026-12-09"
updated: "2026-12-09"
description: "A framework to address premature AI assimilation."
draft: true
---
## Abstract
Trustworthy artificial intelligence (AI) requires systems that can be challenged and corrected, yet the effectiveness of correction depends partly on whether a challenge can be understood before it is evaluated. Generative AI systems may revise outputs in response to human feedback while retaining the interpretive assumptions that shaped their initial responses. They may also assimilate unfamiliar perspectives into existing categories, obscuring the very differences that could expose a limitation in their interpretation. This paper develops a framework for addressing this problem, drawing on the concept of reciprocal incompleteness and the principles of leeway, ma, and Interdemocracy. It distinguishes output correction from epistemic correctability: the capacity of a human–AI interaction process to expose and examine assumptions underlying an interpretation. The framework operationalizes this distinction through a six-stage procedure: provisional interpretation, challenge detection, preservation of alternative formulations, clarification, evidence-based evaluation, and traceable correction. It identifies premature assimilation as a candidate failure mode and proposes metrics for evaluating interpretive fidelity, correction quality, resistance to manipulation, contestability, and interaction cost. The framework also has implications for meaningful human oversight, stakeholder participation, accountability, and AI governance. It does not assume that human perspectives are inherently more reliable than AI outputs or that conversational revision demonstrates autonomous machine self-correction. Rather, it specifies conditions under which a human contribution can become an effective source of challenge. The paper contributes a testable socio-technical design framework for trustworthy generative AI and an empirical research agenda for determining when its additional procedural safeguards improve outcomes.

 ## Index Terms Trustworthy AI, human–AI interaction, contestability, epistemic corrigibility, explainability, human oversight, generative AI, socio-technical governance

## I. Introduction
This paper is a speculative outcome of a series of blog posts written within the framework of the Horizon-funded European project Saufex.\
Trustworthy artificial intelligence (AI) is not solely a technical property of a model. It also depends on the interaction procedures, institutional arrangements, and accountability mechanisms through which a system is deployed. A technically accurate system can still be difficult to contest; a system that produces explanations can still constrain how its decisions are challenged; and a system that accepts feedback can revise its outputs without adequately addressing the assumptions that produced them.\
These distinctions are particularly relevant to generative AI. Large language models can respond fluently to objections, ask clarifying questions, generate alternative interpretations, and revise previous answers. Such capabilities support useful forms of interaction. Nevertheless, the fact that a system changes its answer does not establish that it has adequately understood the objection, identified the limitation in its original interpretation, or corrected the relevant error.\
This paper addresses a specific problem within trustworthy AI: a human contribution may fail to become a source of correction because the system assimilates it into its existing interpretive framework before its distinctive significance has become accessible.\
Consider a user who asks an AI system to assess whether a conclusion follows from a set of premises. The system instead interprets the user's broader intentions, reformulates the argument, and explains what the user appears to be trying to establish. The response may be fluent and potentially insightful, but it does not perform the requested task. If the user objects, the system may apologize and produce another interpretation of the user's intention. The underlying problem persists because the system continues to treat interpretation of the person as more important than the distinction the person attempted to establish.\
This example illustrates a failure that cannot be adequately characterized as factual inaccuracy alone. The system has misrepresented the task and allowed that interpretation to govern subsequent interaction. Correction requires making the interpretation itself contestable.\
The distinction matters beyond conversational convenience. In public administration, education, healthcare, employment, and other consequential domains, an AI system may mediate how an individual's circumstances are represented. If an individual cannot effectively challenge the categories through which the system interprets their circumstances, nominal opportunities for human oversight may not provide meaningful recourse.\
Existing approaches to trustworthy AI address important aspects of this problem through explainability, human oversight, risk management, fairness assessment, and contestability. This paper does not propose replacing these mechanisms. It identifies a complementary procedural requirement: before a consequential disagreement is evaluated, the system should preserve an opportunity to determine whether the disagreement concerns the evidence, the interpretation, or the framework used to formulate the problem.\
The paper makes four contributions:
- It distinguishes output correction from epistemic correctability, understood as a property of the interaction process rather than an assumed internal capacity of the model.
- It defines premature assimilation as a candidate failure mode in which a potentially corrective contribution loses its distinctive meaning during interpretation.
- It proposes an operational interaction framework informed by reciprocal incompleteness, leeway, ma, and Interdemocracy.
- It specifies a research agenda for evaluating the framework against clarification-only and baseline interaction procedures, including measures of interpretive fidelity, correction quality, resistance to manipulation, and interaction cost.

The central research question is:\
*Under what conditions can a structured interval between interpretation and evaluation improve the contestability and correction of generative AI outputs without undermining factual reliability, safety, or operational efficiency?*
## II. Conceptual foundations
### A. Representation and reciprocal incompleteness
Human beings encounter reality through organizations of concepts, experiences, similarities, distinctions, and values. These organizations enable orientation and action, but they do not contain every potentially relevant distinction or relation.\
A similar limitation applies to the representations through which an AI system processes a task, although the nature of computational and human limitations differs. An AI system's existing representation may be inadequate for a particular interaction, and the system cannot establish the completeness of that representation merely by producing a coherent response within it.\
This observation does not imply epistemic equality between human beings and AI systems. Human contributions may be mistaken or manipulative, and computational systems may possess relevant information unavailable to a particular user. The relevant principle is narrower: neither the human contribution nor the system's initial interpretation should be presumed complete solely on the basis of its origin.\
The concept of reciprocal incompleteness captures this relation. A human may need the system to expose a factual error or an inconsistency. The system, in turn, may need the human to identify a missing distinction, an incorrect framing, or a relation that its initial interpretation did not adequately represent.\
The purpose of the interaction is not to privilege one perspective in advance. It is to preserve the possibility that either perspective can be corrected.
### B. Output correction and epistemic correctability
Output correction refers to a change in a particular response, classification, or decision following new information or feedback.\
Epistemic correctability refers to something different: whether the interaction process enables an existing interpretation to be examined and, where warranted, revised in light of a challenge.\
The distinction can be illustrated by three responses to the same objection.
- Surface revision: The system changes its wording without addressing the user's objection.
- Task-level correction: The system identifies an error in the answer and produces a better answer.
- Interpretive correction: The system identifies that its initial representation of the task or the user's contribution was inadequate, and changes the relevant interpretation before proceeding.

These categories are analytical distinctions, not mutually exclusive computational states. A single response may involve more than one form of correction. Nor can a model's internal change be inferred from conversational text alone. The third category should therefore be evaluated through observable behavior: whether the system preserves the user's intended distinction, identifies its earlier assumption, and produces an answer that addresses the actual challenge.\
Epistemic correctability is thus a property of a system embedded in an interaction procedure, evaluation protocol, and governance context. It is not a claim that the model possesses human-like self-awareness or an autonomous motivation to correct itself.
### C. Premature assimilation
This paper defines premature assimilation as the loss of a potentially relevant distinction when a contribution is interpreted through existing categories before the adequacy of those categories has been sufficiently examined.\
The term does not imply that assimilation is always undesirable. Computational systems must classify, summarize, and translate information to perform many tasks. Assimilation becomes problematic when the contribution challenges the categories through which it is being interpreted.\
Three conditions distinguish premature assimilation from ordinary interpretation:
- A contribution contains, or may contain, a distinction relevant to the task.
- The system's initial interpretation does not adequately represent that distinction.
- Subsequent evaluation or action proceeds as if the initial interpretation were settled, without a meaningful opportunity to correct it.

The third condition is particularly important. A system can misunderstand a user without creating a consequential failure if the misunderstanding is quickly exposed and repaired. Premature assimilation becomes a concern when the initial interpretation constrains the subsequent interaction and prevents the relevant correction from taking place.\
This failure mode is potentially relevant to explainability, fairness, human oversight, and recourse. An explanation may accurately describe how a system arrived at a decision while leaving the affected person unable to challenge the framing through which their case was represented.
### D. Leeway and ma
The concept of leeway denotes the room required for an interpretation to remain open to alternatives before a judgment becomes decisive. Leeway is not an absence of standards. It is the opportunity to establish what is being evaluated before determining whether it is correct.\
The Japanese concept of ma provides a complementary conceptual resource. In this paper, ma denotes a meaningful interval between interpretations in which their difference can remain accessible without being immediately eliminated. It is not simply a delay, and it does not guarantee insight. It describes a condition that an interaction procedure may help make possible.\
These concepts lead to a practical distinction between two operations:
- Making a contribution sufficiently accessible to evaluate.
- Evaluating the contribution against appropriate evidential, logical, normative, or safety criteria.

The operations are related but should not be collapsed. If evaluation begins before a consequential difference has become accessible, the process may evaluate a reformulation of the contribution rather than the contribution itself.\
The interval must nevertheless remain bounded. Unsupported claims must still be rejected, evidence must still be examined, and safety constraints must still apply. The proposal is not indefinite suspension of judgment. It is a proportionate opportunity for clarification when uncertainty about the interpretation is consequential.
### E. Interdemocracy as procedural orientation
Interdemocracy provides a procedural orientation for structuring encounters among different perspectives without requiring immediate convergence.\
Its relevance to human–AI interaction is not that participation automatically produces correct conclusions. Nor does it imply that every perspective should receive equal evidential weight.\
The relevant principle is that participants must retain the ability to articulate a perspective in terms that are not entirely determined by the interpretive framework of another participant. If a contribution must first be converted into the categories of the listener, its independent corrective potential may be diminished.\
For AI systems, this principle can be translated into three requirements:
- The system's interpretation remains provisional when consequential uncertainty persists.
- The human participant has a meaningful opportunity to correct the interpretation rather than merely choose among system-generated alternatives.
- The eventual evaluation remains evidence-based and open to disagreement.

Interdemocracy therefore informs the design of an interaction procedure; it does not guarantee that the system will understand the user or that the user will be correct.
## III. Positioning within trustworthy AI
The proposed framework complements existing trustworthy AI approaches by focusing on the transition from human challenge to system evaluation.
### A. Explainability and interpretability
Explainability seeks to make relevant aspects of a system's operation or output understandable. Interpretability concerns the extent to which those operations or outputs can be understood in meaningful terms.\
The present framework addresses a related but distinct issue: whether an explanation or interpretation can itself be challenged effectively.\
A system may provide a clear explanation of why it classified an application in a particular way. An affected individual may nevertheless need to challenge the categories through which the application was represented. If the system or the surrounding institution treats the explanation as sufficient closure, interpretability has not necessarily translated into meaningful contestability.\
Epistemic correctability therefore complements explainability by asking whether an interaction allows a challenge to alter the representation of the problem, rather than merely generating an explanation of the existing representation.
### B. Human oversight and meaningful control
Human oversight is often discussed in terms of whether a person can monitor, intervene in, or override an AI system. These capabilities are necessary in many deployments, but their practical value depends on the information and interaction options available to the human.\
A human may be able to approve or reject a recommendation while lacking the ability to challenge how the recommendation was framed. Likewise, a user may submit feedback without receiving an opportunity to establish what the system misunderstood.\
The framework treats the ability to contest an interpretation as one dimension of meaningful oversight. It does not replace human judgment or transfer responsibility to the system. Instead, it specifies an interaction condition that can help human oversight operate on the problem actually at issue.
### C. Fairness and non-discrimination
A system can fail to represent a person's circumstances adequately even when its output is consistent with its existing decision rules. The failure may arise from categories, assumptions, or proxies that do not adequately capture the circumstances of the person affected.\
A procedure that preserves alternative interpretations may help expose such problems, particularly when a user or stakeholder identifies a distinction that the system's initial framing obscures.\
This is not a substitute for statistical fairness analysis, legal assessment, representative evaluation data, or impact assessment. Nor does the framework establish that a person's account is necessarily more accurate than the system's classification. It provides an additional route through which a limitation in the framing can become visible.
### D. Accountability and governance
Epistemic correctability also has governance implications. Organizations deploying AI should be able to distinguish between a system that accepts feedback and a system whose interaction procedures allow consequential challenges to be investigated.\
A practical implementation should document the initial interpretation, the challenge, any clarification, the evidence used in the eventual evaluation, and the outcome. Such documentation can support audit, incident analysis, and the review of recurring interpretive failures.\
The records should be proportionate to the context, subject to data-protection requirements, and designed to avoid unnecessary retention of sensitive user information.\
Importantly, a record of correction does not itself establish that correction was successful. Independent evaluation remains necessary.
## IV. Proposed framework: contestability before correction
The framework operationalizes epistemic correctability through six stages. It can be implemented as an interaction layer around an existing generative AI model rather than as a new foundation model.
### Stage 1: Establish a provisional interpretation
The system forms an initial interpretation of the task and identifies assumptions that materially affect its response.\
The system does not need to expose every internal computational operation. It should make the relevant interpretation sufficiently accessible for the user to identify a consequential misunderstanding.\
For example, a system asked to evaluate an argument should distinguish between checking whether a conclusion follows from stated premises and interpreting the author's broader intentions.
### Stage 2: Detect a consequential challenge
The system identifies whether the user's response challenges:
- A factual claim.
- The interpretation of a statement.
- The framing of the task.
- A category or distinction used in the response.
- The normative or practical assumptions underlying a recommendation.

This classification should be treated as provisional. A user's challenge may involve several of these dimensions, and the system may not be able to determine the relevant dimension immediately.\
The objective is to avoid treating all objections as requests for factual correction or stylistic revision.
### Stage 3: Preserve alternative formulations
When a consequential interpretive challenge is detected, the system retains its initial interpretation and the user's alternative in a form that allows their differences to be examined.\
It should not immediately replace the user's formulation with a more fluent reformulation if doing so would remove the disputed distinction.\
The procedure need not maintain an unlimited number of alternatives. It should preserve the alternatives relevant to resolving the current uncertainty and identify when the evidence does not support a definitive interpretation.
### Stage 4: Clarify without imposing a frame
The system asks questions designed to expose the difference between interpretations without requiring the user to adopt the system's categories.\
Examples include:
- Which distinction in my interpretation fails to capture your point?
- Am I treating two concepts as equivalent or similar that you regard as different?
- Does your objection concern my conclusion or the way I framed the problem?
- What would I need to understand differently to assess your objection fairly?

These questions are illustrative. Their effectiveness depends on the task, the user, and the context. A system should not ask for clarification after every minor ambiguity. The additional interaction is justified when the unresolved interpretation is consequential.
### Stage 5: Evaluate the clarified contribution
Once the relevant difference is sufficiently accessible, the system evaluates the competing claims using appropriate standards.\
Depending on the task, these may include factual verification, source quality, logical consistency, domain-specific criteria, legal requirements, safety constraints, or human review.\
The system may conclude that the user's objection is correct, partly correct, unsupported, or mistaken. It may also conclude that the available evidence does not settle the matter.\
Preserving a difference does not require accepting it. It requires avoiding its premature elimination as the basis for evaluation.
### Stage 6: Report and document the outcome
The system identifies the outcome of the interaction, distinguishing where possible among:
- A factual correction.
- A correction to the interpretation of the task or contribution.
- A clarification that does not require changing the original conclusion.
- A continuing disagreement.
- An unresolved issue requiring additional evidence or human review.

The system should not claim that its underlying model has learned or changed persistently merely because it revised a response.\
Where appropriate, the interaction record should identify the initial interpretation, the challenge, the decisive evidence, and the reason for the outcome. In high-stakes settings, this record may support institutional review, provided that privacy and retention requirements are respected.
### A. Reference architecture
The six stages can be implemented through the following functional components:
| ** Component ** | ** Function **| ** Output **|
| ------------- | ------------- | ------------- |
| Interpretation| Establish the initial task representation| Provisional interpretation|
| Challenge detection| Identify consequential disagreement| Challenge classification|
| Alternative representation| Preserve competing formulations| Comparison of interpretations|
| Clarification| Expose the relevant difference| Clarified task or contribution|
| Evaluation| Apply evidence and domain constraints| Supported judgment or unresolved status|
| Audit and correction| Record outcome and rationale| Traceable interaction record|

This architecture is implementation-neutral. It may use orchestration logic, structured prompts, interface controls, external verification tools, or a combination of these methods. The proposed framework does not require direct access to a model's internal representations.\
Its distinctive feature is procedural: it separates the work of making a challenge accessible from the work of evaluating it.
## V. Socio-technical implementation and governance
The framework is not intended to operate independently of the institution deploying the system. Its effectiveness depends on the task, the interface, the user's ability to contest an interpretation, and the organization's response to recurring failures.
### A. Risk-proportionate activation
Not every interaction warrants an explicit clarification procedure. Routine requests can proceed directly when the interpretation is sufficiently clear and the consequences of misunderstanding are low.\
The procedure should be activated when a consequential challenge is detected, when the system's interpretation remains materially uncertain, or when the potential cost of premature closure justifies additional interaction.\
In high-stakes settings, activation rules should be defined through a documented risk assessment rather than left entirely to the conversational model.
### B. User control and contestability
Users should be able to indicate that the system has misunderstood them and to articulate the distinction they believe has been lost. Where feasible, interfaces should allow users to inspect and correct the system's task representation before consequential recommendations are acted upon.\
The interface should not force users to choose exclusively among categories generated by the system when the dispute concerns those categories themselves.\
For affected individuals, this interaction-level contestability must be distinguished from formal recourse. In regulated or high-stakes deployments, conversational correction cannot replace legally required explanations, appeal rights, human review, or institutional grievance mechanisms.
### C. Institutional accountability
Deploying organizations should specify who is responsible for reviewing recurrent interpretive failures, how consequential challenges are escalated, and how findings inform system or process redesign.\
The system's ability to generate a revised response should not be used to transfer accountability to the user. Nor should an interaction log be treated as sufficient evidence that an institution has discharged its obligations.\
The appropriate governance model will vary across domains. A public-sector decision-support system, for example, may require formal review and appeal procedures that would be disproportionate for a low-risk writing assistant.
### D. Privacy and proportionality
Recording interactions can support audits but may create privacy risks, particularly when users disclose sensitive personal information.\
The architecture should therefore distinguish between the information needed to resolve an immediate challenge and the information needed for system-level evaluation. Retention, access, and secondary use should be governed by the applicable legal and institutional requirements.\
The objective is traceability sufficient for accountability, not unrestricted recording of human–AI interaction.
## VI. Empirical evaluation
The framework is a conceptual and methodological proposal. Its effectiveness remains to be established empirically. This section specifies a research design through which its central claims can be tested.
### A. Research questions
The evaluation should address five questions:\
RQ1: Does the framework improve the fidelity with which a system represents a user's intended distinction?\
RQ2: Does it improve the quality of corrections when the system's initial interpretation is inadequate?\
RQ3: Does it preserve resistance to false, unsupported, or manipulative challenges?\
RQ4: Does it improve users' ability to contest consequential interpretations and understand how their challenges were handled?\
RQ5: What additional interaction cost does the framework introduce, and under which task conditions is that cost justified?
### B. Experimental conditions
A controlled study should compare at least three conditions:
- Baseline interaction: The model responds using its standard interaction procedure.
- Clarification-only interaction: The model asks clarifying questions when ambiguity or misunderstanding is detected.
- Contestability-before-correction: The model preserves the initial interpretation and the user's alternative, seeks clarification when the difference is consequential, evaluates the clarified claims, and reports the outcome.

The second condition is important. Without it, any improvement might be attributable simply to asking additional questions rather than to preserving alternative interpretations as an explicit procedural requirement.\
The study should use the same underlying model, task materials, and verification resources across conditions wherever feasible. The interaction procedure should be the principal experimental difference.
### C. Benchmark construction
The benchmark should include several categories of challenge:
- Factual correction: The initial response contains an identifiable factual error.
- Ambiguous meaning: The user's contribution permits multiple plausible interpretations.
- Framing challenge: The user disputes how the problem has been formulated.
- Missing distinction: The user introduces a distinction that materially changes the interpretation of the task.
- Valid disagreement: The user understands the system's claim but disputes it on substantive grounds.
- Adversarial challenge: The user attempts to induce an unsupported revision or bypass an appropriate safety constraint.
- Non-corrective challenge: The user objects, but the initial interpretation is adequately supported.

This range is necessary to avoid evaluating the framework solely on cases in which the human contribution is known to be correct. A method that accepts all challenges could perform well on a correction-only benchmark while being unsuitable for trustworthy deployment.\
Cases should be developed with explicit task definitions and annotation guidelines. Independent annotators should identify the relevant distinctions, acceptable interpretations, evidential requirements, and appropriate outcomes. Disagreements among annotators should be documented rather than concealed.
### D. Evaluation metrics
The following metrics are proposed for empirical validation.\
- Interpretive fidelity. The degree to which the system's final interpretation preserves the distinctions identified as relevant in the benchmark. This may be assessed through blinded human annotation and task-specific criteria.
- Premature assimilation rate. The proportion of cases in which the system's response or subsequent reasoning removes a benchmark-relevant distinction before it has been adequately examined.
- Correction quality. The proportion of cases in which a demonstrated error is appropriately corrected, with separate reporting for factual errors and interpretive errors.
- Challenge discrimination. The system's ability to distinguish corrective challenges from unsupported or misleading challenges. This should include both false acceptance and false rejection rates.
- Contestability. The extent to which users can identify, articulate, and correct a consequential misunderstanding in the system's interpretation. This can be assessed through task success and structured user evaluation.
- Interaction cost. The additional turns, latency, computational expenditure, and user effort required by the procedure.
- Outcome transparency. The degree to which the system accurately communicates whether a correction occurred, what evidence supported the decision, and what remains unresolved.

These metrics should not be collapsed automatically into a single trustworthiness score. Their trade-offs may be important. For example, a system may reduce premature assimilation while increasing interaction cost or accepting more misleading challenges.
### E. Analysis and validity
The study should report performance by challenge category, not only as an aggregate. Improvements in ambiguous or framing-sensitive cases could coexist with deterioration in routine tasks.\
Ablation tests should examine whether preserving alternatives, asking non-leading questions, and documenting the outcome each contribute to performance. Human evaluation should be blinded to the interaction condition wherever feasible.\
The analysis should also distinguish model performance from user experience. A system may improve interpretive fidelity without making the interaction feel more contestable, or users may report greater satisfaction without a measurable improvement in correction quality.\
Finally, the evaluation should avoid treating the model's self-report as proof of successful correction. The primary outcomes must be assessed against independently established task criteria.\
No empirical findings are claimed in this paper. The framework's value depends on the results of such evaluation.
## VII. Discussion
### A. Contribution to trustworthy AI
The framework adds a procedural dimension to trustworthy AI: the preservation of an opportunity to challenge an interpretation before that interpretation becomes the settled basis for evaluation or action.\
This is not equivalent to adding another general principle of fairness or transparency. It specifies a sequence of interaction operations and identifies a candidate failure mode that can be evaluated experimentally.\
Its practical contribution is to make the handling of interpretive disagreement more explicit. The system must distinguish, where relevant, between not understanding a contribution and understanding it but finding it unsupported. That distinction can improve the information available to users, reviewers, and governance processes.
### B. Relationship to robustness and security
The framework is complementary to technical robustness and security controls. It does not address every failure mode in computational systems and cannot replace adversarial testing, secure system design, provenance, or factual verification.\
Its relevance is strongest where the system's response depends on an interpretation of human input and where the interpretation itself can be contested. In these contexts, robustness against manipulation must be combined with openness to legitimate correction.\
This creates a genuine design trade-off. Excessive acceptance of user challenges can increase vulnerability to manipulation. Excessive resistance can make the system difficult to correct. The proposed evaluation is intended to establish whether a structured procedure can improve this trade-off, not to assume that it can.
### C. Limitations
First, the framework is conceptual and has not yet been validated through an implementation or controlled study.\
Second, detecting when an interpretive challenge is consequential remains difficult. A model may fail to recognize a missing distinction, misclassify a disagreement, or ask questions that subtly impose its own framing.\
Third, human evaluation of interpretive fidelity may itself be contested. Annotators can disagree about what a user intended, and benchmark designers may inadvertently privilege one interpretation. The evaluation protocol should therefore allow justified ambiguity and report inter-annotator agreement.\
Fourth, additional interaction has costs. In low-risk, routine settings, the framework may introduce unnecessary friction. Risk-proportionate activation is therefore a central design requirement.\
Fifth, an interaction procedure cannot establish that a model has changed its internal organization, acquired human-like self-correction, or assumed moral responsibility. Those claims would require separate evidence and conceptual analysis.\
These limitations narrow the claim but also make it testable. The proposal is not that a new procedure eliminates interpretive error. It is that a measurable design intervention may make certain errors more visible and correctable.
## VIII. Conclusion
Trustworthy AI requires more than the ability to revise outputs after receiving feedback. In consequential interactions, the correction process may depend on whether a challenge can be represented in its own terms before it is assimilated into the system's initial interpretation.\
This paper has proposed a framework for addressing that problem. It distinguishes output correction from epistemic correctability, defines premature assimilation as a candidate failure mode, and operationalizes the concepts of reciprocal incompleteness, leeway, ma, and Interdemocracy through a six-stage interaction procedure.\
The framework is intended to complement existing work on explainability, fairness, human oversight, contestability, and AI governance. It does not grant human contributions automatic authority, suspend evidential standards, or assume that conversational revision demonstrates genuine machine self-correction.\
Its central proposition is narrower and testable: when an interpretation is consequentially uncertain, preserving the difference between competing interpretations before evaluation may improve the quality of correction.\
The proposed experimental design provides a way to assess that proposition against baseline and clarification-only approaches, including tests of resistance to misleading challenges and measurement of interaction cost.\
If the results support the hypothesis, epistemic correctability could become a useful design and evaluation dimension for trustworthy generative AI. It would address not only whether an AI system can respond to a correction, but whether its interaction procedure gives a legitimate correction a meaningful opportunity to emerge.

### Disclaimer
AI (GPT-6) was used in this paper to enhance style fluence.
