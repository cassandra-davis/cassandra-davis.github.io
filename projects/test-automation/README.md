# Test Automation Reporting Tool

## Overview
Automates summarisation of test results from CSV logs into a PowerPoint report, including charts and statistics.

## Tools Used
Python, pandas, matplotlib, python-pptx

## Steps
1. Run `automation_report.py`  
2. Script generates sample `test_log.csv` if none exists  
3. Calculates summary statistics (PASS/FAIL %, average duration)  
4. Creates a pie chart of results  
5. Generates `Test_Automation_Report.pptx` with summary and chart  

## Business Value
Saves time and reduces errors by automating report creation:
- Manual: 1 hour
- Automated: 5 minutes
