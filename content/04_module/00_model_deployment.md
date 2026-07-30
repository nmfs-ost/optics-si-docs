# Model Deployment

Once a model is trained, it can then be **deployed**. Deployment strategies vary based on use cases and needs. Some examples:  

- **In Applications**  – Models can be integrated into mobile, desktop, or web apps for real-time predictions. 
- **On Edge (on device) Deployment**  – Running models on local devices without needing internet connectivity.  
- **API Deployment**  – Hosted on a server, allowing external applications and users to send requests and receive predictions via an API.  
- **Via Batch Processing Pipelines**  – Running large datasets through the model at scheduled intervals.
- **In Active Learning & Model-Assisted Labeling Systems** – Humans **review model-generated predictions**, verifying or correcting them to **quickly build more ground truth data**. This feedback loop helps retrain and improve the model over time.   
- **In a Semi-Supervised Learning Pipeline** A mix of labeled and unlabeled data is used to improve performance, reducing the need for fully annotated datasets.  
- **Self-Supervised Learning Pipeline** The model learns patterns from data without human-labeled annotations, useful for feature extraction and pretraining.  

Each deployment approach has trade-offs in terms of **latency, cost, scalability, and human oversight**. 