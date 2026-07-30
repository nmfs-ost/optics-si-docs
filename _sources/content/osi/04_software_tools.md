# Software and Tools

## Tool categories
- Annotation: VIAME, CVAT, Label Studio
- Training: Ultralytics, PyTorch workflows
- Data management: DVC, cloud object storage, Git
- Review and visualization: notebooks, dashboards, QA reports

## Selection criteria
- Compatibility with OSI pipeline outputs
- Export format support (COCO, YOLO, custom)
- Multi-user collaboration and review capability
- Reproducibility and automation support

## Recommended baseline stack
1. Annotation: VIAME or CVAT with documented schema
2. Training: Ultralytics for baseline iterations
3. Tracking: Git for code and DVC/object storage for data
4. Reporting: notebook-based summaries with versioned outputs

## Integration notes
- Keep schema definitions versioned and centralized.
- Standardize export naming and folder layout.
- Use a compatibility checklist when switching tools.

## Placeholder actions
- Add environment bootstrap commands per tool.
- Add approved version matrix.
- Add tool owner contacts.
