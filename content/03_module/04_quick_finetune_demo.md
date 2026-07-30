# Quick Vision CNN Demo for Fisheries

This short workflow highlights how to fine-tune an existing YOLO model for a fisheries detection task. It is designed for a 45‑minute hands‑on session.

## 1. Environment Setup
- Install the **Ultralytics** package
  ```bash
  pip install ultralytics
  ```
- (Optional) Use a GPU‑enabled environment such as Google Colab or your local workstation with CUDA installed.

## 2. Prepare Your Dataset
- Organize data using the YOLO directory structure:
  ```text
  datasets/
    fish_dataset/
      images/
        train/  # training images
        val/    # validation images
      labels/
        train/  # label files in YOLO format
        val/    # validation label files
  ```
- Keep class names in `data.yaml` and verify image paths and label paths are correct.

## 3. Fine‑Tune a Baseline Model
- Start from a pretrained checkpoint such as `yolov8n.pt`.
- Run training with a command similar to:
  ```bash
  yolo task=detect mode=train model=yolov8n.pt data=data.yaml epochs=50 imgsz=640
  ```
- Monitor metrics such as mAP, precision and recall. Adjust epochs or learning rate if needed.

## 4. Evaluate & Export
- After training, evaluate on the validation set:
  ```bash
  yolo mode=val model=runs/detect/train/weights/best.pt data=data.yaml
  ```
- Export the model for deployment:
  ```bash
  yolo mode=export model=runs/detect/train/weights/best.pt format=onnx
  ```

## 5. Key Takeaways
- Use existing checkpoints to reduce training time and data requirements.
- Maintain a consistent dataset structure and keep labels clean.
- Ultralytics provides simple commands to train, validate, and export models.

This streamlined process demonstrates how to leverage CNN‑based object detection for fisheries imagery within a short workshop session.
