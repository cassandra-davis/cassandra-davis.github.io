# Predictive Maintenance Reporting System

An automated engineering reporting workflow that analyses vehicle validation data, generates engineering charts and KPIs, and produces professional reports in HTML, PDF and Microsoft Word using Quarto.

This project demonstrates how Python automation can replace repetitive manual engineering reporting with a reproducible, standardised workflow.

---

## Overview

Modern vehicle validation testing produces thousands of sensor measurements every minute. Reviewing this data manually is time-consuming, inconsistent and difficult to reproduce.

This project demonstrates an automated reporting pipeline that:

* imports engineering test data
* validates and cleans datasets
* calculates engineering KPIs
* generates engineering charts
* performs basic engineering assessment
* produces professional reports in multiple formats

The workflow is designed to resemble the type of reporting process used within automotive validation and testing teams.

---

## Features

* Automated data loading
* Data cleaning and validation
* KPI calculation
* Statistical summaries
* Engineering plots
* Standardised report generation
* HTML, PDF and Word output
* Reusable LaTeX and Word templates

---

## Technologies

* Python
* Quarto
* Pandas
* Matplotlib
* LaTeX
* Microsoft Word templates
* Git

---

## Project Structure

```text
engineering-reporting-system/

├── _quarto.yml
├── report.qmd
├── requirements.txt
├── data/
├── scripts/
├── templates/
└── output/
```

---

## Example Report

The generated report includes:

* Executive Summary
* Engineering Background
* Test Configuration
* Acceptance Criteria
* Dataset Analysis
* Engineering Charts
* KPI Summary
* Risk Assessment
* Recommendations
* Appendices

Example outputs are available in the `output/` folder.

---

## Skills Demonstrated

* Engineering reporting
* Python automation
* Data analysis
* Data visualisation
* Technical documentation
* Process optimisation
* Reproducible reporting workflows
* Quarto publishing
* LaTeX document templating

---

## Installation

### Prerequisites

* Python 3.10 or later
* Quarto
* A LaTeX distribution (TinyTeX or TeX Live)

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

---

## Generate the Report

Render all output formats:

```bash
quarto render
```

Or render a specific format:

```bash
quarto render report.qmd --to html
```

```bash
quarto render report.qmd --to pdf
```

```bash
quarto render report.qmd --to docx
```

Generated files are written to the `output/` directory.

---

## Future Improvements

Possible enhancements include:

* Machine learning anomaly detection
* SQL database integration
* Interactive dashboards
* Automatic email distribution
* Continuous Integration (CI) report generation
* Multi-project reporting

---

## Author

**Cassandra Davis**

Senior Automotive Engineer specialising in engineering automation, reporting workflows and data analysis.
