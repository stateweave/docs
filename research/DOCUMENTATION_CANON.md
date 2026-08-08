# StateWeave documentation canon

_Research and synthesis notes · 2026-07-27_

## Brief

Build a compact TypeScript SDK manual for developers who need to understand StateWeave from first principle to production integration; it should feel written by a careful human, make the causal-graph primitive inevitable rather than fashionable, and avoid both generic API-doc sprawl and inflated AI language.

## Method

This is a comparative editorial canon, not an objective ranking of all programming writing. The sources were selected for distinct teaching mechanisms: narrative explanation, executable progression, reference architecture, conceptual precision, or unusually strong compression. Scores are instruments for this project only.

Official or author-maintained editions were preferred. Every linked web source was checked during this review. Publisher pages may require browser access.

## Rubric · 100 points

| Dimension | Weight | Question |
| --- | ---: | --- |
| Mental-model transfer | 25 | Does the reader acquire a durable way to reason, not just steps to copy? |
| First useful result | 20 | How quickly can a new reader run or understand something real? |
| Learning sequence | 20 | Does each idea arrive only when its prerequisites exist? |
| Example integrity | 15 | Are examples small, executable, and honest about what they omit? |
| Retrieval | 10 | Can a returning reader find exact behavior without rereading a chapter? |
| Voice and compression | 10 | Is the prose direct, memorable, and free of ceremony? |

## Canon report

| # | Work | Score | Strongest mechanism | Why it works | Transfer | Do not copy |
| ---: | --- | ---: | --- | --- | --- | --- |
| 1 | [The Rust Programming Language](https://doc.rust-lang.org/book/) · Steve Klabnik, Carol Nichols, community | 96 | Ownership taught as a mental model | It introduces the hard idea early, then revisits it through increasingly real programs. Errors are part of the lesson. | Name the invariant, show its consequence, then let later examples depend on it. | Its book-length completeness; StateWeave needs a much shorter path. |
| 2 | [Structure and Interpretation of Computer Programs](https://sarabander.github.io/sicp/) · Harold Abelson, Gerald Jay Sussman, Julie Sussman | 96 | Programs as processes, not syntax | Each abstraction changes how the reader sees computation. Examples are vehicles for ideas rather than API inventory. | Explain StateWeave as a different runtime state model before listing methods. | Academic density and exercise volume. |
| 3 | [The C Programming Language](https://www.pearson.com/en-us/subject-catalog/p/c-programming-language/P200000000409/9780131103627) · Brian Kernighan, Dennis Ritchie | 95 | Extreme compression around working programs | Precise prose and small examples earn trust; every paragraph advances the reader. | Remove every sentence that does not change understanding or action. | Assuming historical C fluency or reproducing its terse register everywhere. |
| 4 | [Crafting Interpreters](https://craftinginterpreters.com/) · Robert Nystrom | 95 | Build the machine while explaining the machine | A running implementation makes abstract runtime concepts concrete and debuggable. | Carry one agent turn through graph append, projection, action, evidence, and commit. | Conversational length and decorative asides. |
| 5 | [Python Tutorial](https://docs.python.org/3/tutorial/) · Python contributors | 93 | Respectful, task-led introduction | It assumes the reader can program and spends time on what is distinctive about Python. | Assume TypeScript competence; teach only what is distinctive about StateWeave. | Mixing beginner language instruction into SDK instruction. |
| 6 | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) · TypeScript team | 92 | Layered conceptual entry points | It states who each document is for and distinguishes handbook learning from reference lookup. | Label pages by job: start, understand, build, reference. | Its broad page tree and language-scale surface area. |
| 7 | [The Go Tour](https://go.dev/tour/) · Go team | 91 | Immediate executable progression | The reader changes code from the first screen and concepts arrive in tiny increments. | Make the first example deterministic and key-free; keep every snippet runnable. | Playground dependence and fragmented micro-lessons. |
| 8 | [Rust by Example](https://doc.rust-lang.org/rust-by-example/) · Rust community | 90 | Example-first parallel path | It is fast to scan and complements the conceptual book without pretending examples replace explanation. | Put a minimal example immediately after every important claim. | Example accumulation without one coherent end-to-end narrative. |
| 9 | [Eloquent JavaScript](https://eloquentjavascript.net/) · Marijn Haverbeke | 90 | Concrete systems built from language ideas | The voice stays human while examples grow from values to complete systems. | Let prose sound authored, but make code carry the proof. | Literary flourishes that compete with low-level precision. |
| 10 | [Elixir Getting Started](https://elixir-lang.org/getting-started/introduction.html) · Elixir team | 89 | Philosophy expressed through ordinary code | Immutability, pattern matching, and processes appear as practical consequences, not slogans. | Show append-only state and supersession through ordinary agent use. | Language-tour breadth unrelated to StateWeave. |
| 11 | [Gleam language tour](https://tour.gleam.run/) and [Gleam Language Book](https://gleam.run/book/) · Gleam team | 89 | Warm simplicity without imprecision | Short sections, attractive defaults, and small examples reduce intimidation without diluting semantics. | Use calm pages, narrow paragraphs, and one idea per section. | Playful surface language where causal guarantees need exact terms. |
| 12 | [React Learn](https://react.dev/learn) · React team | 88 | Visual hierarchy plus carefully staged concepts | New docs separate learning from API reference and use recurring diagrams and challenges. | Repeat one causal-turn diagram as the reader descends into internals. | Card-heavy home-page patterns and framework-sized navigation. |
| 13 | [Racket Guide](https://docs.racket-lang.org/guide/) · Racket contributors | 88 | A guide distinct from reference | It explains how concepts fit together while leaving exhaustive contracts elsewhere. | Keep “Understand” prose separate from exact “Reference” contracts. | The depth and taxonomy required by a full language ecosystem. |
| 14 | [Clojure Guides](https://clojure.org/guides/getting_started) · Clojure community | 87 | Values-first onboarding | Identity, values, and state are explained as a coherent model before ecosystem detail. | Explain why stored truth is a graph before storage adapters or UI. | Community vocabulary before the reader has a working example. |
| 15 | [OCaml documentation](https://ocaml.org/docs) · OCaml community | 87 | Multiple paths with explicit audience levels | Tutorials, language concepts, and package reference are clearly separated. | Offer one short primary path and make reference visibly optional. | Multiple overlapping beginner paths. |
| 16 | [Kotlin documentation](https://kotlinlang.org/docs/getting-started.html) · JetBrains | 86 | Production-minded runnable starts | Platform and build assumptions are explicit, with direct routes to common environments. | State Node, package status, provider boundary, and persistence ownership plainly. | Tooling permutations that obscure the primitive. |
| 17 | [You Don’t Know JS Yet](https://github.com/getify/You-Dont-Know-JS) · Kyle Simpson | 86 | Correcting misleading intuitions | It starts where familiar mental models break and replaces them with a more accurate one. | Address “isn’t this just summarized chat history?” directly and concretely. | Polemical framing or treating alternatives as foolish. |
| 18 | [Effective TypeScript](https://effectivetypescript.com/) · Dan Vanderkam | 85 | Rules backed by failure modes | Advice is memorable because each item explains what goes wrong without it. | Express invariants beside the bug classes they prevent. | Itemized cookbook structure as the main learning path. |
| 19 | [Zig language reference](https://ziglang.org/documentation/master/) · Zig project | 84 | Executable specification | Examples are compiled as documentation tests, keeping claims close to truth. | Verify every public snippet against the pinned SDK commit. | Reference-first density for first-time readers. |
| 20 | [Stripe documentation](https://docs.stripe.com/) · Stripe documentation team | 84 | Retrieval and integration clarity | It excels at copyable examples, visible prerequisites, and task-oriented navigation. | Make model, tool, persistence, and streaming integration independently retrievable. | Product-dashboard chrome, excessive branching, and API-marketplace scale. |

## Patterns to carry forward

1. **Lead with the changed mental model.** The strongest works teach a way of seeing before cataloging syntax. StateWeave begins with stored truth: an immutable causal graph, not a provider transcript.
2. **Make one small program prove the claim.** A deterministic `MockModel` example should run before credentials enter the story. Later pages reuse the same state rather than inventing unrelated snippets.
3. **Sequence by dependency.** The reader sees `Agent` first, then `AgentState`, then projection, then exact read-set parents, then integration boundaries. Internals never arrive before a use for them.
4. **Separate learning from lookup.** “Understand” pages explain causality. “Reference” pages state signatures, defaults, failures, and ownership without retelling the philosophy.
5. **Teach failures as part of the contract.** Invalid imported state, protocol retries, failed tools, aborted runs, and prompt ceilings are not edge-footnotes; they define what the runtime guarantees.
6. **Use recurring notation.** One compact pipeline and one six-node turn recur across pages. A reader should recognize the system before learning every node kind.
7. **Keep examples honest.** Label package publication status, browser ownership, default filesystem tools, non-token `stream()`, and provider data boundaries exactly as implemented.
8. **Compress the prose, not the model.** Minimalism means fewer concepts per page and fewer repeated sentences, not omitting the hard causal mechanism.

## Novelty matrix

| Tension | Mechanisms combined | StateWeave expression |
| --- | --- | --- |
| Language book × field manual | Rust/SICP mental models + Stripe retrieval | A short primary reading path with exact reference tables beside it. |
| Immutable theory × ordinary actions | Elixir values + Crafting Interpreters machinery | Deep causal state explained through normal `TOOL_CALL` and `FINAL` outputs. |
| Human prose × runtime proof | K&R compression + Zig executable specification | Plain sentences followed immediately by verified TypeScript or serialized state. |
| Warm workbench × formal lineage | Gleam approachability + effective-rule failure modes | Orange builder accent, calm surfaces, uncompromising invariant and error language. |

**Anti-cliché constraints**

- No “revolutionary memory,” “AI that never forgets,” magical brain metaphors, or graph imagery used as proof.
- No purple gradient, dashboard cards, feature wall, fake benchmark number, or oversized slogan.
- No page exists only to hold three paragraphs that belong elsewhere.
- No public example names legacy `StateWeaveAgent`, `CausalWeaveAgent`, or GraphFrame as the `Agent` memory engine.
- No install command is shown as working until the npm package actually exists.
- No copying an exemplar’s phrases, chapter structure, visual trade dress, or signature metaphor.

## Divergent documentation candidates

| Candidate | Governing concept | Structure | Score | Originality check |
| --- | --- | --- | ---: | --- |
| A. The Small Language Book | Treat StateWeave like a tiny language: values, evaluation, effects, state. | One linear 12-chapter book. | 88 | Strong conceptual frame, but risks implying a DSL and over-centering syntax. |
| B. The Causal Field Manual | One invariant per page, one running turn, learning path plus exact lookup. | 10-page candidate: start 2, understand 3, build 3, reference 2. | **95** | Combines language-book causality with operational SDK clarity without resembling one source. |
| C. The Annotated Runtime | One complete `Agent.run()` trace with every layer annotated. | A long single page plus API appendix. | 90 | Distinct and concrete, but poor for returning readers and mobile retrieval. |
| D. The Lab Notebook | Every concept begins with a runnable experiment and observed state diff. | Six labs plus two reference pages. | 91 | Excellent proof, but credentials and unpublished package make first contact heavier. |
| E. The Causal Specification | Guarantees, non-guarantees, algorithms, then examples. | Normative spec with RFC language. | 86 | Precise but emotionally cold and too reference-first for adoption. |
| F. The Product Bridge | Start from a normal chat app and replace transcript pieces incrementally. | Migration narrative plus recipes. | 89 | Practical, but makes transcripts the conceptual center of gravity. |

## Selection and refinement

**Selected: B · The Causal Field Manual.**

What was removed:

- a Python tab for an SDK that does not exist;
- deploy-the-docs material from the public product manual;
- separate pages for traces, visualization, CLI, model, tool, and one coding example when those ideas fit better in three build chapters;
- legacy GraphFrame-era language and any suggestion that the model mutates the graph directly;
- repeated benefit lists.

What became ownable:

- the recurring sentence **“The graph is truth. The prompt is a view.”** It is a compact statement of the implementation, not a metaphor;
- one visible causal-turn sequence used from introduction through internals;
- an orange builder/workbench identity paired with the consumer product’s green, rather than a generic developer-docs purple;
- explicit boundary labels: **StateWeave owns**, **you own**, **the provider sees**.

What survives at small scale:

- a compact page count (the selected blueprint began as ten pages and now ships twelve after the Projection page and Models/Tools split);
- four navigation groups;
- one orange accent;
- one pipeline;
- one primary class;
- code that can be checked against one pinned SDK commit.

The memorable detail is the moving locus of truth: the complete graph remains, while each model prompt is only a bounded causal view. Every chapter reinforces that distinction without repeating the same paragraph.

## Synthesis note

The final direction combines the mental-model discipline of SICP and the Rust Book, the implementation transparency of Crafting Interpreters, the executable honesty of Zig and Go, and the retrieval discipline of TypeScript and Stripe. The result is not a language-book imitation or a generic API portal: it is a small field manual for one low-level primitive, written around the causal guarantees that make the primitive worth using.

## 2026-08 revision: blueprint alignment

Manual reworked into a compact, page-by-page "x-ray" of the exact SDK stack, keeping twelve pages and four groups but tightening the language for a first-time developer who has never used such a primitive.

Page map (as shipped):

- Start: Introduction, Quickstart
- Understand: Why StateWeave, Nodes, One turn, Projection
- Build: Tools, Models, Persist and stream, Complete agent
- Reference: Agent API, Types and exports

Changes:

- Pages renamed to match the mental model: `agent-state` -> `nodes`, `how-it-works` -> `the-turn`, `models-and-tools` split into `tools` + `models`. Old robots-path slugs keep permanent redirects in `docs.json`.
- Added `Projection` as its own Understand page, since that is the defining causal mechanism.
- Added three editorial vector diagrams generated with the image tool and stored under `docs/images/`: `causal-weave-overview.webp` (quickstart), `node-kinds.webp` (nodes), `projection-bounded-context.webp` (projection).
- Busy detail moved into expandable `<Accordion>` containers (7 pages).
- Release boundaries and deliberate limitations are flagged with visible `<Note>` callouts rather than hidden: npm publication pending (introduction, quickstart), the public Agent chooses focus automatically rather than exposing interactive zoom (projection), recognized verification patterns rather than arbitrary domain checks (nodes), and legacy GraphFrame utilities remain compatibility-only (types).

Accuracy notes

- Public examples use only the single `Agent` class backed by Causal Weave v3.
- The quickstart uses a verified source build until the npm package exists.
- These pages were checked against the SDK development tree after the Causal Weave readiness pass: public multi-resolution projection, provider token events through `streamEvents()`, recognized verification nodes, strict prompt ceilings, and strengthened state validation.
