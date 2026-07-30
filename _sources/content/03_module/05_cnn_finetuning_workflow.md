# Vision CNN Models for Fisheries

This short notebook outlines a practical workflow for fine-tuning a foundational vision model on fisheries imagery. It is designed for a one hour hands-on session.

## 1. Environment Setup
- Install the **Ultralytics** package, which provides the YOLO11 framework.

```bash
pip install ultralytics
```

- (Optional) Use a GPU-enabled environment (local CUDA workstation, Google Colab, etc.) for faster training.

## 2. Prepare the Dataset
- Organize your data using the YOLO directory structure:

```text
datasets/
  fish_detection/
    images/
      train/  # training images
      val/    # validation images
    labels/
      train/  # label files in YOLO format
      val/    # validation label files
```

- Create a `data.yaml` file containing class names and paths to the image and label directories.

## 3. Fine-Tune a Baseline Model
- Start from a pretrained checkpoint (e.g., `yolo11n.pt`).
- Run training with a command similar to:

```bash
yolo task=detect mode=train model=yolo11n.pt data=data.yaml epochs=50 imgsz=640
```

- Monitor metrics such as mAP, precision, and recall. Adjust the number of epochs or learning rate if necessary.

## 4. Evaluate & Export
- Evaluate on the validation set:

```bash
yolo mode=val model=runs/detect/train/weights/best.pt data=data.yaml
```

- Export the model for deployment:

```bash
yolo mode=export model=runs/detect/train/weights/best.pt format=onnx
```

## 5. Key Takeaways
- Fine-tuning leverages pretrained models to reduce data requirements and shorten training time.
- Maintain a consistent dataset structure and ensure labels are accurate.
- Ultralytics provides simple commands to train, validate, and export models for fisheries detection tasks while streamline the process.
