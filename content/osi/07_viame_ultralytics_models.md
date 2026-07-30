# VIAME and Ultralytics Models for Pipeline

## Objective
Define a repeatable model workflow that supports both VIAME-integrated deployments and rapid Ultralytics-based experimentation.

## Starter repositories
- [optics-models-hello-world](https://github.com/csbrown-noaa/optics-models-hello-world): baseline starter patterns for quick model onboarding and experimentation.
- [hierarchical_yolo_vertexai](https://github.com/csbrown-noaa/hierarchical_yolo_vertexai): Vertex AI-oriented hierarchical YOLO workflows for cloud training/deployment experiments.
- [yolo_kwcoco_serializer](https://github.com/csbrown-noaa/yolo_kwcoco_serializer): conversion utilities for YOLO and kwcoco interoperability in pipeline exports.

## Build VIAME models
1. Prepare curated training data and label schema.
2. Configure model training parameters.
3. Train baseline and tuned variants.
4. Export artifacts for pipeline integration.

## Integrate VIAME GitHub fixes
- Review open and recently merged fixes affecting training/inference.
- Apply and validate patches in staging.
- Record behavioral deltas and compatibility notes.
- Promote only validated builds into production pipelines.

## Ultralytics workflow for fast iteration
1. Start from a baseline pretrained checkpoint.
2. Tune augmentation and training settings.
3. Compare runs using consistent validation data.
4. Export interoperable artifacts and docs.

## Acceptance checklist
- Reproducible training config committed
- Evaluation metrics meet target thresholds
- Inference artifacts compatible with downstream tools
- Model card updated with known limitations

## Placeholder actions
- Add target metrics per mission type.
- Add standardized experiment naming convention.
- Add release process for promoting candidate models.
