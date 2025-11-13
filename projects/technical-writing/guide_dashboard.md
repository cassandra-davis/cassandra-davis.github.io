# Interpreting Predictive Maintenance Dashboards

*Author: Cassandra Davis*  
*Date: 2025-11-13*

---

## Overview

This guide explains how to read and use a predictive maintenance dashboard for automotive systems. The dashboard helps engineers and managers **predict component failures** and make proactive maintenance decisions.

### Key Features:

- **Failure Probability Trends** – Shows likelihood of failure based on sensor data.
- **Correlation Heatmaps** – Displays relationships between parameters.
- **Top Predictive Parameters** – Highlights which measurements contribute most to failures.

---

## Dashboard Sections

### 1. Failure Probability by Mileage

- **Purpose:** Identify mileage ranges with higher risk of component failure.  
- **How to read:** Bars represent percentage chance of failure. Higher bars = higher risk.  
- **Action:** Schedule maintenance or inspections for vehicles in higher-risk bands.

### 2. Sensor Correlation Heatmap

- **Purpose:** Find patterns between different sensor readings.  
- **How to read:**  
  - Colours indicate correlation strength (red = high positive correlation, blue = high negative).  
  - Check which parameters tend to fail together.  
- **Action:** Focus on sensors with strong correlations for predictive alerts.

### 3. Top Predictive Parameters

- **Purpose:** Identify most important variables affecting failures.  
- **How to read:** Ranked list or chart of features by predictive weight.  
- **Action:** Monitor these variables closely for early warning signs.

---

## Practical Tips

1. **Filter by Vehicle Type:** Some vehicles may have different failure patterns.  
2. **Compare Historical vs Current Data:** Helps track trends over time.  
3. **Set Alerts:** Configure notifications for parameters exceeding thresholds.  
4. **Document Observations:** Record insights for maintenance planning.

---

## Example Use Case

1. Select “Mileage: 50,000–75,000 km” filter.  
2. Observe that vibration and engine temperature are correlated with higher failure probability.  
3. Schedule preventive inspection on vehicles in this range.  
4. Log findings in team dashboard for future reference.

---

## Tools Used

- Python (data preparation & analytics)
- Pandas (data manipulation)
- Matplotlib / Seaborn (plots)
- Power BI (dashboard)

---

## Conclusion

Understanding the predictive maintenance dashboard enables **proactive maintenance planning**, reduces downtime, and improves vehicle reliability. Always combine insights with engineering judgment for the best results.

---

*End of Guide*
