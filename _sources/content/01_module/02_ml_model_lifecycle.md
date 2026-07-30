# AI/ML Model Project Lifecycle

### Similar to Common Data Science Workflow

```{mermaid}
graph TD;
    A[Ask an Interesting Question] --> B[Get the Data];
    B --> C[Explore the Data];
    C --> D[Model the Data];
    D --> E[Communicate & Visualize Results];

    %% Indicating Iterations & Feedback Loops
    E --Refine Understanding--> A;
    C --Data Cleaning & Feature Engineering--> B;
    D --Revisit Data Exploration--> C;
```

### Simple Lifecycle Examples
![](slide_images/slide_26.png)
![](slide_images/slide_43.png)
![](slide_images/slide_44.png)

###  AI/ML is Non-Linear
#### Performance of the model and its output is not proportional to the input. Not just data input, but effort as well.
![](images/effort-success.png)
- Figure: "illustrates the uncertainty in ML development by showing the significant increase in effort but only minimal gains in model quality."[Source: Google Kaggle(AI//ML & ML competition platform) Case Study](https://developers.google.com/machine-learning/managing-ml-projects/planning)

### Experimentation is key. 
- try different architectures  
- try and tune [hyperparameters](https://docs.ultralytics.com/guides/hyperparameter-tuning/)
- test different training techniques like data augmentation or different optimizers

