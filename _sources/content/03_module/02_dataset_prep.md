# Dataset Prep

## Dataset Basics:
- Images per class. | ≥ 1500 images per class recommended
- Instances per class. |  ≥ 10000 instances (labeled objects) per class recommended
- Image variety. 
    - Must be representative of the environment. 
    - recommended: images from different regions, seasons, conditions, lighting, angles, different sources
- Label consistency. 
    - All instances of all classes in all images must be labelled. 
    - Partial labelling will impact performance.
- Label accuracy. 
    - Labels must closely enclose each object. No space should exist between an object, and it's bounding box. No objects should be missing a label.
- Background images. 
    - Background images are images with no objects that are added to a dataset to reduce False Positives (FP).  

## Split Dataset for Training
- **Labeled Data** is split into three parts:
  - **Training Dataset**: Used to train the model.
  - **Validation Dataset**: Used to validate and tune model.
  - **Test Dataset**: Used to evaluate the final model.

```{mermaid}
graph TD;
    A[Labeled Data] --> B[Training Dataset]
    A --> C[Validation Dataset]
    A --> D[Test Dataset]
    
    B --> E[Used to train the model]
    C --> F[Used to validate and tune model]
    D --> G[Used to evaluate the model]
```
![](../01_module/slide_images/slide_38.png)



![](../01_module/slide_images/slide_29.png)

---

![](../01_module/slide_images/slide_30.png)


## Other Helpful Dataset Prep Tasks
- Develop a Benchmark Test Dataset
- Consider Data Augmentation
- Check Bias and Balance

## Data Consistency Checks
