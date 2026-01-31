---
title: "Module: Network Analysis for Detection"
slug: "Module-Network-Analysis-Detection"
author: "SAUFEX Consortium"
date: "2026-01-23"
description: "Using network analysis to identify coordinated behavior, bot networks, and influence operations through social connection patterns."
learningPath: "Detection and Verification"
moduleNumber: 4
estimatedTime: "9 minutes"
---
# Module: Network Analysis for Detection


[screen 1]

A hundred accounts follow each other in circular patterns. A network of profiles consistently amplifies the same content within seconds. Central nodes coordinate peripheral amplifiers.

These network patterns reveal manipulation that individual account analysis might miss. Network analysis provides powerful tools for detecting coordinated inauthentic behavior.

[screen 2]

## What Is Network Analysis?

Network analysis examines relationships and connections between accounts:

**Nodes**: Individual accounts in the network

**Edges**: Connections between accounts (follows, mentions, retweets)

**Network structure**: Overall pattern of connections

**Network behavior**: How information flows through connections

By visualizing and analyzing these networks, we can identify coordinated behavior, bot networks, and influence operations.

[screen 3]

## Why Networks Matter for Detection

Individual suspicious accounts are needles in haystacks. Networks reveal coordination:

• Automated accounts cluster together

• Coordinated campaigns show synchronized connections

• Influence operations create characteristic network structures

• Organic networks look fundamentally different from manipulated ones

• Network patterns are harder to fake than individual behavior

Network analysis finds the forest, not just trees.

[screen 4]

## Types of Network Structures

Different manipulation strategies create distinct network patterns:

**Star networks**: Central account surrounded by amplifiers
- One influential node, many peripheral supporters
- Common in influence operations

**Circular networks**: Accounts primarily following each other
- Insular communities
- Artificial mutual amplification

**Hierarchical networks**: Multiple layers of coordination
- Sophisticated operations with tiers
- Command-and-control structures

**Broadcast networks**: Information flowing from few sources to many
- Propaganda distribution
- Bot networks amplifying central messages

[screen 5]

## Follower Network Analysis

Who follows whom reveals manipulation:

**Suspicious follower patterns**:
• Sudden mass following events
• Accounts with identical follower sets
• Follower networks disconnected from genuine communities
• Bots following each other in clusters
• Follow/unfollow cycling patterns

**Organic follower patterns**:
• Gradual follower growth
• Diverse follower interests and connections
• Integration with broader communities
• Reciprocal relationships with real engagement

Comparing account follower networks against known genuine accounts helps identify anomalies.

[screen 6]

## Engagement Network Analysis

Who engages with whom shows coordination:

**Engagement patterns to analyze**:
• Who likes/shares whose content?
• Response timing across network members
• Reciprocal engagement patterns
• Engagement network overlap
• Asymmetric patterns (engagement given vs received)

**Coordinated engagement indicators**:
• Identical engagement sets across accounts
• Synchronized engagement timing
• Network primarily engaging with itself
• Disproportionate engagement from similar accounts

Genuine engagement shows more variation and organic timing.

[screen 7]

## Network Visualization Tools

Visualization reveals patterns invisible in raw data:

**Common tools**:
• **Gephi**: Open-source network visualization (powerful, steep learning curve)
• **NodeXL**: Excel plugin for network analysis (accessible)
• **Cytoscape**: Biological networks, adaptable to social networks
• **Python libraries**: NetworkX, igraph (programmable)
• **Platform-specific**: Twitter network analysis tools

**Visualization shows**:
• Clusters and communities
• Central influential nodes
• Connection density
• Isolated subnetworks
• Unusual structural patterns

[screen 8]

## Network Metrics for Detection

Quantitative metrics identify suspicious networks:

**Centrality measures**:
• Degree centrality: Connection counts
• Betweenness centrality: Bridge positions
• Closeness centrality: Distance to all nodes
• Eigenvector centrality: Connection to influential nodes

**Network-level metrics**:
• Clustering coefficient: How interconnected is the network?
• Network density: Connection saturation
• Average path length: Steps between nodes
• Modularity: Distinct community structure

Manipulated networks often show extreme values on these metrics.

[screen 9]

## Bot Network Detection

Bots create characteristic network signatures:

**Bot network indicators**:
• High clustering among suspected bots
• Similar follower/following patterns
• Synchronized account creation times
• Following same accounts in same order
• Engagement coordination
• Minimal connections outside bot cluster

**Detection approach**:
1. Identify suspicious accounts (behavioral analysis)
2. Map their networks
3. Look for clustering and coordination
4. Analyze network against organic baselines

Bot networks often visually distinct in network graphs.

[screen 10]

## Coordinated Inauthentic Behavior (CIB)

CIB detection relies heavily on network analysis:

**CIB network signatures**:
• Accounts acting in concert
• Synchronized network growth
• Coordinated content sharing patterns
• Artificial amplification structures
• Network isolation from organic communities

**Platform detection**:
• Facebook, Twitter, others detect CIB networks
• Remove entire networks simultaneously
• Publish transparency reports with network details

CIB concept shifts focus from individual accounts to coordinated networks.

[screen 11]

## Cross-Platform Network Analysis

Sophisticated operations span multiple platforms:

**Cross-platform indicators**:
• Same usernames across platforms
• Coordinated messaging across services
• Traffic directed between platforms
• Profile information linking accounts
• Synchronized activity timing

**Analysis challenges**:
• Limited API access across platforms
• Different network structures per platform
• Data integration complexity
• Privacy considerations

Most effective analysis combines platform-specific network data with cross-platform behavioral patterns.

[screen 12]

## Amplification Network Analysis

How content spreads reveals authenticity:

**Natural amplification**:
• Hub-and-spoke diffusion from influential accounts
• Gradual spread over time
• Multiple entry points
• Engagement proportional to reach
• Varied amplifiers

**Artificial amplification**:
• Synchronized amplification bursts
• Limited authentic engagement
• Amplification from coordinated network
• Disproportionate reach vs engagement
• Amplifier accounts show suspicious characteristics

Virality analysis distinguishes organic from manufactured spread.

[screen 13]

## Influence Network Mapping

Identifying key actors in information operations:

**Network analysis reveals**:
• Who are central coordinators?
• Who are primary amplifiers?
• Who bridges different communities?
• What are entry points to target audiences?
• How does information flow through network?

**Strategic value**:
• Targeting interventions at central nodes
• Understanding operation structure
• Attribution support
• Disruption strategy development

Network mapping provides strategic intelligence beyond simple detection.

[screen 14]

## Temporal Network Analysis

Networks evolve over time, revealing patterns:

**Temporal indicators**:
• Synchronized network growth events
• Coordinated following patterns
• Dormancy then simultaneous activation
• Engagement timing coordination
• Network structural changes aligned with events

**Analysis approach**:
• Snapshot networks at multiple time points
• Analyze structural evolution
• Identify coordination events
• Correlate with external events (elections, crises)

Time-series network analysis captures dynamics static analysis misses.

[screen 15]

## Community Detection Algorithms

Identifying subgroups within larger networks:

**Algorithms**:
• Louvain method: Modularity optimization
• Label propagation: Community assignment
• Infomap: Information flow-based communities
• Girvan-Newman: Edge betweenness-based

**Application**:
• Finding coordinated subgroups
• Identifying bot clusters
• Mapping influence operation structure
• Distinguishing organic from inorganic communities

Automated community detection scales network analysis.

[screen 16]

## Network Analysis Limitations

Network approaches face constraints:

• **Privacy concerns**: Tracking connections raises privacy issues

• **Incomplete data**: API restrictions limit network visibility

• **Computational complexity**: Large networks are resource-intensive

• **False positives**: Some legitimate communities show suspicious patterns

• **Evolution**: Adversaries adapt to detection methods

• **Context needed**: Network patterns require interpretation

• **Platform differences**: Each platform has different network characteristics

Network analysis complements but doesn't replace other detection methods.

[screen 17]

## Combining Network with Behavioral Analysis

Most powerful detection combines approaches:

**Network analysis identifies**: Coordinated groups and structures

**Behavioral analysis confirms**: How accounts act suspiciously

**Content analysis reveals**: What coordinated message is being pushed

**Technical analysis provides**: Objective evidence of connections

**Attribution connects**: Network to responsible actors

Convergence across methods increases confidence in detection and enables effective response.

[screen 18]

## Practical Network Analysis

You can conduct basic network analysis:

**Accessible approaches**:
• Manually map follower networks of suspicious accounts
• Track who engages with specific content
• Visualize connections using free tools (Gephi, NodeXL)
• Identify accounts that always appear together
• Monitor follow/unfollow patterns

**Advanced analysis**:
• API-based data collection
• Large-scale network visualization
• Statistical network metrics
• Machine learning for pattern detection

Start simple; sophistication comes with practice and tools.


