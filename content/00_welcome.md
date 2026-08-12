# Welcome to the Optics SI Docs (DRAFT)

The Optics Strategic Initiative (OSI) Docs is a centeralized working knowledge base for shared documentation, repeatable workflows, and implementation guidance across optics-focused projects.

## Notes on this version
This site is being migrated from an older template into an OSI-first structure. Some pages are intentionally structured placeholders and will be expanded with production details in iterative updates.

## Vision: 
The Optics Strategic Initiative (OSI) envisions fostering a transformative shift in the National Marine Fisheries Service's (NMFS) approach to optical data collection and processing, reshaping the landscape of resource management and environmental stewardship. We aim to catalyze the transition from traditional ship-based and aerial surveys to platform-agnostic, scalable automated systems, thereby enriching the value and applicability of optics. This journey involves investment in the development of low-cost acquisition hardware, AI-bearing payloads and Uncrewed Systems (UxS), machine learning-assisted image processing, and hybrid cloud processing. Striving to equalize access to these tools across diverse regions, our endeavor is to establish efficient, accessible, and smart optical data acquisition and analysis pipelines, capable of swiftly transforming vast volumes of data into accurate, management-relevant products. In a world grappling with climate change and resource scarcity, the OSI stands at the forefront of NOAA's commitment to a resilient Blue Economy and a Climate Ready Nation.

## OSI Working Group Members:
- Matthew Campbell - (SEFSC - SI lead)
- Derek Bolser - (OST -co-lead)
- Jennifer Fisher - (NWFSC- memeber)
- Erin Moreland - (AFSC- memeber)
- Kresimir Williams - (AFSC- memeber)
- Peter Chase - (NEFSC- memeber)
- Andrew Leising - (SWFSC- memeber)
- Tom Oliver - (PIFSC- memeber)
- Ben Richards - (PIFSC- memeber)
- Conor McManus - (NEFSC- memeber)
- Rick Methot - (SDD - SI Advisor)
- Elizabeth Clarke - (retired)

## What to do first
1. Read the Overview section to understand scope and ownership.
2. Walk through Pipelines to align on expected process and QA gates.
3. Use Hardware and Software sections for implementation choices.
4. Follow Cloud Storage and Cloud Processing for operational setup.
5. Use Models and Integration for training, evaluation, and model intake.

## Core workflow
1. Collect and stage source data.
2. Annotate and run QA checks.
3. Prepare training and validation datasets.
4. Train and evaluate candidate models.
5. Publish results to cloud storage and annotation systems.
6. Document releases and maintain the model lifecycle.


## Useful references
- [National PAM Network](https://nmfs-ost.github.io/PAM_National_Network/)
- [Ultralytics documentation](https://docs.ultralytics.com/)
- [ESIP AI Ready Data Checklist](https://github.com/ESIPFed/data-readiness/blob/main/checklist-published/ai-ready-data-checklist-v.1.0.md)
