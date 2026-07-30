# FAQ

## Program and onboarding

**Q: What is the Optics SI Docs?**  
A: It is the shared documentation hub for the Optics Strategic Initiative, including pipelines, standards, tooling, and model integration workflows.

**Q: Who should use this site?**  
A: Analysts, data stewards, annotation teams, model developers, and operations staff supporting optics workflows.

## Data and pipeline operations

**Q: What is the minimum pipeline flow?**  
A: Data intake -> annotation -> QA/QC -> dataset prep -> training -> evaluation -> cloud publish -> maintenance.

**Q: What dataset formats are expected?**  
A: Standard, documented formats such as COCO or YOLO for detection, plus a clear metadata schema for source and processing lineage.

**Q: Where should I store pipeline outputs?**  
A: Use OSI cloud storage conventions defined in the Cloud Storage section, then publish approved outputs to the target bucket path and register the release metadata.

## VIAME, Girder, and cloud processing

**Q: How do I get VIAME Web App access?**  
A: Follow the Cloud Processing page for account onboarding, role assignment, and environment-specific URLs.

**Q: How are privileges handled?**  
A: Roles are typically split into viewer, annotator, reviewer, and admin. Least-privilege access should be used for all production systems.

**Q: How do I upload pipeline results to Girder?**  
A: Export artifacts in the expected format, upload to the designated collection/folder path, and validate annotation visibility before marking the step complete.

## Models and integration

**Q: Can I use my own trained model in OSI?**  
A: Yes. Use the BYOM checklist in Models and Integration to verify format compatibility, validation metrics, and deployment handoff requirements.

**Q: Which model stack is preferred for quick starts?**  
A: Ultralytics-based workflows are a practical baseline, with VIAME integration used where existing pipeline components depend on it.

**Q: What acceptance metrics should I report?**  
A: At minimum include precision, recall, mAP, validation dataset description, and a short failure-mode summary.

## Troubleshooting

**Q: I cannot run a notebook due to missing packages. What should I do?**  
A: Install dependencies from requirements, verify the active environment, and rerun the notebook kernel in a clean session.

**Q: My training run failed with out-of-memory errors. What next?**  
A: Reduce batch size or image size, disable heavy augmentation first, and then retry on a larger GPU if needed.

**Q: Where should I report gaps in this documentation?**  
A: Open an issue in the repository and tag the section owner with a brief description and expected outcome.