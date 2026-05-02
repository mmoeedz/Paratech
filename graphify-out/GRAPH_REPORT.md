# Graph Report - Paratech  (2026-04-29)

## Corpus Check
- 22 files · ~4,772 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 44 nodes · 23 edges · 1 communities detected
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]

## God Nodes (most connected - your core abstractions)
1. `Layout()` - 2 edges
2. `useReveal()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Layout()` --calls--> `useReveal()`  [INFERRED]
  src\components\Layout.jsx → src\hooks\useReveal.js

## Communities

### Community 0 - "Community 0"
Cohesion: 0.5
Nodes (2): Layout(), useReveal()

## Knowledge Gaps
- **Thin community `Community 0`** (4 nodes): `Layout()`, `useReveal()`, `Layout.jsx`, `useReveal.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._