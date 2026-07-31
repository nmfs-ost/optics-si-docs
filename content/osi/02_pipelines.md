# Pipelines

## End-to-end pipeline
1. Intake source imagery and metadata.
2. Stage datasets in approved storage paths.
3. Annotate with agreed label schema.
4. Run QA/QC checks and resolve defects.
5. Prepare train/validation/test splits.
6. Train and evaluate candidate models.
7. Publish outputs to cloud and Girder.
8. Create release notes and maintenance plan.

## Pipeline gates
- Gate 1: Data completeness and metadata validation
- Gate 2: Annotation quality and inter-review agreement
- Gate 3: Split integrity and leakage checks
- Gate 4: Model acceptance metrics and failure mode review
- Gate 5: Deployment readiness and rollback plan

## Required artifacts
- Dataset manifest and schema version
- Annotation guideline version and changelog
- Training configuration and hyperparameters
- Evaluation report with metric summary
- Release record with storage paths and ownership

## Reference architecture diagram

```{mermaid}
flowchart LR
	%% OSI end-to-end workflow aligned to docs sections and pipeline gates.

	subgraph S1[Data Intake and Staging]
		A1[Source imagery and metadata intake]
		A2[Checksum and metadata validation]
		A3[Cloud raw path]
		A4[Cloud staged path]
		A1 --> A2 --> A3 --> A4
	end

	subgraph S2[Annotation and QA]
		B1[Web App annotation]
		B2[Human-in-the-Loop Reviewer approval]
		B3[Cloud annotations path]
		A4 --> B1 --> B2 --> B3
	end

	subgraph S3[Dataset Prep and Training]
		C1[Train validation test split prep]
		C2[Training config and hyperparameters]
		C3[Model training Ultralytics or VIAME]
		C4[Evaluation metrics and failure mode review]
		B3 --> C1 --> C2 --> C3 --> C4
	end

	subgraph S4[Publish and Operations]
		D1[Release package model data reports]
		D2[Cloud releases path]
		D3[Girder collection upload and verification]
		D4[Deployment and maintenance plan]
		C4 --> D1 --> D2 --> D3 --> D4
	end

	subgraph S5[Governance and Standards]
		E1[Optics SI Main standards and policy updates]
		E2[Role based access and ownership]
		E3[Versioned artifacts and release notes]
	end

	E1 -. informs .-> A2
	E1 -. informs .-> B2
	E1 -. informs .-> C4
	E2 -. controls .-> A3
	E2 -. controls .-> D2
	E3 -. records .-> D1

	C4 -- retrain loop --> C1
	B2 -- relabel loop --> B1
	D4 -- maintenance feedback --> A1
```

## Placeholder actions
- Add thresholds for each gate.
- Add escalation path for blocked pipeline stages.
