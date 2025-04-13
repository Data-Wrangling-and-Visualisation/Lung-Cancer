# Lung Cancer Visualization Project

## Project Overview

Lung cancer is a significant global health concern. Early detection and awareness play a crucial role in improving survival rates. This project aims to create six interactive visualizations to analyze the relationship between lung cancer symptoms, age, and gender.

By providing a clear understanding of how lung cancer manifests across demographic groups, we hope to raise awareness and encourage early testing. The visualizations will help answer critical questions such as:

- How do lung cancer symptoms vary across different age groups?
- What patterns can be identified in lung cancer symptoms across all ages?
- What are the main symptoms leading to lung cancer?

## Dataset

We use an external dataset from Kaggle, which provides detailed information on lung cancer symptoms across different age groups and genders.

**Dataset Details:**

- **Demographics:** Gender (M/F), Age (30-80)
- **Symptoms & Risk Factors:** Smoking, alcohol consumption, peer pressure, chronic disease, allergies, anxiety, fatigue, yellow fingers
- **Lung Cancer Presence:** YES/NO
- **Dataset Size:** 3,000 patients (51% diagnosed with lung cancer)

[Dataset Link](https://www.kaggle.com/datasets/akashnath29/lung-cancer-dataset) 

## Technologies Used

- **Frontend:** D3.js, Three.js, P5.js
- **Backend:** Flask / FastAPI
- **Database:** SQLite / PostgreSQL
- **Data Processing:** Pandas, NumPy, Scikit-learn
- **Deployment:** Vercel (frontend), Heroku/AWS Lambda (backend), Redis (caching)

## Checkpoints

### Checkpoint 1: Data Preprocessing, EDA & Baseline Frontend

In the first phase of the project, we focused on getting to know our dataset and ensuring it was clean and ready to be visualized. Here's what we did:

- **Preprocessing** the raw Kaggle dataset to remove duplicates, handle missing values, and convert categorical fields.
- **Exploratory Data Analysis (EDA)** to identify patterns, distributions, and outliers.
- **Baseline frontend structure of website**.

### Checkpoint 2: Interactive Bubble Visualization

Our second milestone was all about creating usefull visualizations using D3 and Three.js, here is what we did:

- **3D Bubble Visualization** using `Three.js`.
![Alt text](Bubble-Diagram-threejs\BubbleDemo.png)

- **Circular Treemap** using `D3`.
![Alt text](Circular-Treemap-D3\CircularTreemapDemo.png)

- **Parallel Coordinate Chart** using `D3`.
![Alt text](parallel-visualisation\ParallelDemo.png)

- **Interactive Heatmap** using `D3`.
![Alt text](heatmap-visualisation\HeatmapDemo.png)

- **Radar Chart** using `D3`.
- **Sankey Diagram** using `D3`.
- **Finilized our frontend**
<p align="center">
  <img src="SiteDemo1.png" width="45%" alt="Final Frontend Screenshot 1"/>
  <img src="SiteDemo2.png" width="45%" alt="Final Frontend Screenshot 2"/>
</p>
---

### What's Next

- **Perfect the existing visualizations**: We have made the majority of our visualizations, but some of them need a little more work. Like, creating more interactions and styling them.
- Polish the **GitHub repository** with more thorough documentation and code comments.
- **Host the deployed version**.

---

## Contributors

- **Ekaterina Akimenko**
- **Sofia Goryunova**
- **Yasmina Mamadalieva**

## License

This project is licensed under the MIT License.
