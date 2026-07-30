# Cloud Processing: VIAME Web App

## Access and login
1. Request access through the OSI onboarding channel.
2. Confirm role assignment (viewer, annotator, reviewer, admin).
3. Validate access to target projects and collections.

## User privileges
- Viewer: read-only access to collections and results
- Annotator: create and edit annotations
- Reviewer: approve or reject annotation batches
- Admin: manage projects, users, and permissions

## Upload pipeline results to Girder
1. Export pipeline outputs in approved format.
2. Upload artifacts to the designated Girder collection.
3. Attach metadata fields required for traceability.
4. Run post-upload verification checks.

## View annotations in Girder/VIAME
- Open the project collection and verify asset linkage.
- Confirm annotation layers render as expected.
- Spot-check class labels and geometry consistency.
- Record review findings and rework actions.

## Standing up VIAME Web App
1. Provision infrastructure and dependency services.
2. Configure authentication and project defaults.
3. Connect storage backends and processing workers.
4. Run smoke tests with sample uploads.

## Integrate with Kitware GitHub fixes
- Track upstream issues and patch notes.
- Validate fixes in a non-production environment.
- Document regression checks before rollout.
- Pin known-good versions for release windows.

## Useful repositories for implementation
- [Optics-SI-Main](https://github.com/nmfs-ost/Optics-SI-Main): program-level docs, workflows, and standards to align VIAME/Girder processing operations.
- [optics-si-cloud-tools](https://github.com/MichaelAkridge-NOAA/optics-si-cloud-tools): cloud helper scripts and setup resources for local-to-cloud operational handoffs.

## Placeholder actions
- Add OSI environment URLs and access request forms.
- Add exact upload schema with required metadata keys.
- Add change-management checklist for production updates.
