# Understanding Cloud Storage for OSI: Object, Block, and File

Storage decisions in Optics SI directly affect training throughput, annotation workflows, release reproducibility, and monthly cloud cost. This guide helps you choose the right storage type for each workload stage before you implement bucket layouts and automation.

The three primary storage models are:
1. Object storage (Google Cloud Storage)
2. Block storage (Google Persistent Disk)
3. File storage (Google Filestore)

Cross-cloud mapping:
- GCS bucket ~= AWS S3 bucket ~= Azure Blob container
- Persistent Disk volume ~= AWS EBS volume ~= Azure Managed Disk
- Filestore share ~= AWS EFS share ~= Azure Files share

## Core Comparison Matrix

| Feature | Object Storage | Block Storage | File Storage |
| :---- | :---- | :---- | :---- |
| Data model | Flat object namespace | Fixed-size blocks | Hierarchical files and folders |
| Access mode | HTTP/REST APIs | Attached block device | NFS or SMB mount |
| Typical latency | Milliseconds to seconds | Sub-ms to low ms | Low to moderate ms |
| Scale behavior | Near-infinite, auto-managed | Provisioned capacity | Elastic managed growth |
| Shared multi-node use | Yes, API-based | Usually single-writer attachment | Yes, concurrent mounts |
| Update pattern | Rewrite object | Random byte-level writes | In-place file edits |
| Relative cost per GB | Lowest | Highest | Moderate |
| Best fit | Immutable/unstructured data at scale | Latency-sensitive stateful systems | Shared POSIX workflows |

## Framework Chooser: Scored Matrix

Most production systems use more than one storage type. Use this quick matrix to make an initial choice, then validate with the checklist below.

Scoring legend:
- 3 = strong fit
- 2 = workable fit with tradeoffs
- 1 = weak fit

| Decision Criteria | Object | Block | File |
| :---- | :----: | :----: | :----: |
| Concurrent multi-node access | 3 | 1 | 3 |
| Frequent random byte-level writes | 1 | 3 | 2 |
| Lowest-latency transactional path | 1 | 3 | 2 |
| Massive long-term scale | 3 | 2 | 2 |
| Lowest storage cost per TB | 3 | 1 | 2 |
| POSIX app compatibility | 1 | 2 | 3 |
| Operational simplicity for shared teams | 2 | 1 | 3 |

How to use it:
1. Pick your top 3 criteria.
2. Add scores for each storage type.
3. Select the highest score for the primary workload.
4. Add secondary storage if another component has different needs.

### Pre-Commit Checklist

Before finalizing a storage decision, confirm all of the following:
- IAM fit: roles and service accounts follow least privilege.
- Lifecycle fit: retention, archival, and deletion policies are defined.
- Failure mode known: outage, quota, or full-volume behavior is documented.
- Reproducibility fit: data versioning and release lineage are traceable.
- Pipeline fit: storage integrates with intake, QA, training, and release steps.

## Real-World Architectural Synergy

A typical OSI workflow combines all three models:
- Object storage for raw imagery/video, staged datasets, releases, and archives.
- Block storage for low-latency transactional services and training worker scratch volumes.
- File storage for shared team config, QA assets, and multi-user POSIX workflows.

For implementation conventions (paths, ownership, and promotion flow), see the companion guide in [05 Cloud Storage](05_cloud_storage.md).

## Storage by Pipeline Stage

Storage should align to each pipeline gate in [Pipelines](02_pipelines.md):
- Intake: land source data in object storage raw paths.
- Staging: validate checksums/manifests and promote curated assets.
- Annotation and QA: use shared access patterns that match team tooling.
- Training and evaluation: keep training splits, configs, and outputs versioned.
- Publishing and maintenance: write approved artifacts to release/archive paths with ownership metadata.

## 1. Object Storage (GCS)

### Overview

Object storage stores data as immutable objects with payload + metadata + key. It is optimized for durability, global accessibility, and cost-effective scale.

### When It Wins

- Large unstructured datasets (imagery, video, logs, model artifacts)
- Write-once/read-many workloads
- Long-term retention and archive needs

### Operational Notes

- Lifecycle management: define transitions for hot, warm, and archive data.
- Versioning and lineage: use immutable keys and release tags to preserve reproducibility.
- Training access: use service accounts and client libraries; avoid hard-coded credentials.

## 2. Block Storage (Persistent Disk)

### Overview

Block storage exposes raw volumes to compute instances. The OS manages the file system on top of those volumes.

### When It Wins

- Low-latency transactional data paths
- Random read/write-heavy workloads (databases, stateful services)
- Boot and workload-local persistent volumes

### Operational Notes

- Plan capacity and IOPS together; both can bottleneck workloads.
- Usually best for single-instance or tightly controlled attachment patterns.
- Automate snapshots and test recovery objectives before production cutover.

## 3. File Storage (Filestore)

### Overview

File storage provides shared mounted file systems over NFS/SMB, with familiar POSIX behavior.

### When It Wins

- Multi-user applications requiring shared directory access
- Legacy tools expecting mounted file paths
- Team workflows where shared write access is required

### Operational Notes

- Easier adoption for existing file-based workflows.
- Higher network overhead than block storage for latency-sensitive operations.
- At very large scale, object storage often provides better economics and elasticity.

## Security and Access Control Basics

Use role-based access and least privilege by default:
- Scope permissions by environment (dev/test/prod) and top-level data path.
- Use dedicated service accounts per automation workflow.
- Rotate credentials and enable audit logging for critical data operations.
- Align roles to OSI operating patterns (viewer, annotator, reviewer, admin) where applicable.

## Cost, Lifecycle, and Governance

Control spend by policy, not manual cleanup:
- Define retention windows per data class (raw, staged, releases, archive).
- Enable lifecycle transitions and expiration policies early.
- Track owners for each path prefix and enforce promotion workflows.
- Review storage growth monthly with project owners.

## Dataset Versioning and Lineage

Reproducible ML requires immutable data references:
- Use versioned dataset manifests and schema versions.
- Store release metadata with source paths, checksums, and approval notes.
- Preserve train/validation/test split references for each model release.
- Keep release records synchronized with pipeline artifacts.

## Backup and Disaster Recovery

Define recovery expectations per workload:
- Object storage: verify replication strategy and restore procedures.
- Block storage: enforce snapshot schedules and periodic restore tests.
- File storage: validate backup windows and point-in-time restoration capability.
- Document recovery time and recovery point targets for each service.

## Common Pitfalls

- Treating object storage as a local POSIX file system.
- Skipping lifecycle policies until storage bills spike.
- Over-provisioning block disks without utilization review.
- Embedding secrets in code instead of using service accounts.
- Running synchronous object API calls inside tight processing loops.

## Summary and Next Steps

Storage selection is a workload decision, not a one-time platform decision. In most OSI deployments, object + block + file storage are combined intentionally.

Next references:
- Implementation paths and governance: [05 Cloud Storage](05_cloud_storage.md)
- Pipeline gate alignment: [Pipelines](02_pipelines.md)
- Tooling context: [Software and Tools](04_software_tools.md)
## cloud-object-stores-are-not-real-file-systems
- https://airflow.apache.org/docs/apache-airflow/2.11.0/core-concepts/objectstorage.html#cloud-object-stores-are-not-real-file-systems