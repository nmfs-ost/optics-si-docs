# Shared Vocabulary: Optics SI AI/ML and Computer Vision

This page defines shared terms used across Optics SI workflows.
Use these definitions to keep language consistent in SOPs, model cards, notebooks, reviews, and implementation docs.

## How to use this page

- Prefer these terms in documentation and issue templates.
- If a term can be interpreted two ways, add a short qualifier.
- Keep definitions operational so teams can act on them.

## Data and annotation terms

## Annotation

Human-created markup on data used for training or evaluation, such as boxes, polygons, classes, or attributes.

## Label

The class or attribute assigned to an annotation or sample, such as species, behavior, or object type.

## Label schema

The controlled list of labels, definitions, and rules that annotations must follow.

## Ground truth

The best-available reference labels used as the standard for training, QA, and evaluation.

## Dataset manifest

A structured record of dataset contents, versions, paths, and metadata used for traceability.

## Train, validation, test split

A partition of data into training, tuning, and final evaluation subsets to measure generalization.

## Class imbalance

A condition where some classes have far fewer examples than others, which can bias model learning.

## Data leakage

Unintended sharing of information between splits or stages that inflates performance metrics.

## Model and inference terms

## Model

A trained parameter set that maps input data to predicted outputs under a defined task.

## Model artifact

A versioned, shareable model package used for inference, evaluation, or deployment.

## Model image

In Optics SI docs, this should mean an input image processed by a model.
If discussing deployment containers, use the term container image to avoid ambiguity.

## Inference

Running a trained model on new data to generate predictions.

## Prediction

A model output for a sample, such as class, location, confidence score, or segmentation mask.

## Confidence score

A model-estimated likelihood tied to a prediction, used for thresholds and review prioritization.

## Epoch

One full pass through the training dataset during optimization.

## Evaluation and performance terms

## Precision

The fraction of predicted positives that are correct.

## Recall

The fraction of actual positives that are correctly detected.

## mAP

Mean Average Precision, a detection metric summarizing precision and recall behavior across classes and thresholds.

## IoU

Intersection over Union, the overlap ratio between predicted and reference regions.

## Drift

A change in data characteristics or relationships over time that can reduce model performance.

## Workflow and orchestration terms

## DAG

Directed Acyclic Graph, a workflow representation where tasks run in dependency order without cycles.

## Pipeline gate

A quality checkpoint between workflow stages that must be passed before progressing.

## Human-in-the-loop

A review pattern where people validate or correct predictions before final use or retraining.

## Related pages

- [Overview](01_overview.md)
- [Pipelines](02_pipelines.md)
- [OSI Project Lifecycle](../01_module/02_ml_model_lifecycle.md)
- [Annotation and QA Best Practices](../02_module/01_best_practices_for_annotation.md)
- [Model Evaluation Guidance](../04_module/04_model_eval.md)
- [Deployment Patterns](../04_module/00_model_deployment.md)
