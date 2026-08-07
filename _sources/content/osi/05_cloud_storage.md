# Cloud Storage

## Cloud Storage Types & What to Pick
There are three primary storage types offered by every major cloud provider:
- Object Storage (aka buckets. Google Cloud Storage)
- Block Storage (Google Persistent Disks)
- File Storage (Google Filestore)

For a deeper decision guide on storage types, tradeoffs, and architecture patterns, see [Understanding Cloud Storage for OSI](05a_cloud_storage.md).

## Dedicated Optics GCS Buckets for each FMC
- nmfs-dev-uc1-afsc
- nmfs-dev-uc1-nefsc
- nmfs-dev-uc1-nwsc
- nmfs-dev-uc1-pifsc
- nmfs-dev-uc1-sefsc
- nmfs-dev-uc1-swsc

## Tool Quick Links
- [Google Cloud CLI cheat sheet](https://docs.cloud.google.com/static/sdk/docs/images/gcloud-cheat-sheet.pdf)
- [Optics SI cloud tools repository](https://github.com/MichaelAkridge-NOAA/optics-si-cloud-tools)
- [Jetstream repository](https://github.com/MichaelAkridge-NOAA/jetstream)

## Storage design goals
- Predictable folder conventions
- Clear environment separation (dev/test/prod)
- Traceable data lineage and release history
- Access controls by role and least privilege

- [Google Cloud reauthentication guide](https://docs.cloud.google.com/docs/authentication/reauthentication)

## Optics SI Data Management Working Group (todo)
- https://github.com/csbrown-noaa/optics-data-spec/
- https://github.com/csbrown-noaa/optics-data-spec/blob/main/data_spec/spec.md

## Proposed Standard Path: gs://[bucket-name]/[Year]/[Region]/[Survey_ID]/[sha256_hash].[ext]

## Example bucket layout
- raw/
- staged/
- annotations/
- training/
- evaluation/
- releases/
- archive/

## Upload and validation flow
1. Upload source data to the raw path.
2. Validate checksums and metadata manifests.
3. Promote curated data to staged paths.
4. Publish approved outputs to releases paths.
5. Record release notes and ownership metadata.

## Access and governance
- Define owners for each top-level path.
- Apply role-based access by environment.
- Enable lifecycle policies for archive retention.

## Recommended implementation references
- Use [optics-si-cloud-tools](https://github.com/MichaelAkridge-NOAA/optics-si-cloud-tools) for scripts and workflow helpers that support bucket operations and cloud-side processing tasks.
- Use [jetstream](https://github.com/MichaelAkridge-NOAA/jetstream) for additional cloud workflow utilities and project-specific storage automation patterns.
- Track standards and conventions in [Optics-SI-Main](https://github.com/nmfs-ost/Optics-SI-Main) to keep storage layout and metadata practices aligned with broader SI governance.

## Placeholder actions
- Add exact bucket names and project IDs.
- Add storage IAM group mappings.
- Add retention periods per data class.