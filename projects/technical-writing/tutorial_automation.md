# How to Automate Test Reports with Python

## Introduction

This tutorial will guide you through automating the creation of test summary reports using Python. By the end, you'll be able to convert raw test logs (CSV/Excel) into a formatted PowerPoint report with charts and summaries.

## Prerequisites

* Python 3.8+
* Libraries:

  * `pandas`
  * `numpy`
  * `matplotlib`
  * `python-pptx`

You can install these using:

```bash
pip install pandas numpy matplotlib python-pptx
```

## Step 1: Prepare Sample Test Data

Create a sample CSV file named `test_log.csv`:

```python
import pandas as pd
import numpy as np

np.random.seed(42)
tests = pd.DataFrame({
    'TestID': range(1, 51),
    'Result': np.random.choice(['PASS', 'FAIL'], 50, p=[0.8, 0.2]),
    'Duration_s': np.random.randint(20, 300, 50)
})
tests.to_csv('test_log.csv', index=False)
```

This generates 50 test results with pass/fail outcomes and duration in seconds.

## Step 2: Load and Summarise Data

```python
# Load data
df = pd.read_csv('test_log.csv')

# Calculate summary statistics
pass_count = (df['Result'] == 'PASS').sum()
fail_count = (df['Result'] == 'FAIL').sum()
avg_duration = df['Duration_s'].mean()

print(f'Passed: {pass_count}, Failed: {fail_count}, Average Duration: {avg_duration:.2f}s')
```

## Step 3: Create a Pie Chart

```python
import matplotlib.pyplot as plt

labels = ['PASS', 'FAIL']
sizes = [pass_count, fail_count]
colors = ['#4CAF50', '#F44336']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=140)
plt.title('Test Results')
plt.savefig('test_results_pie.png')
plt.close()
```

## Step 4: Generate PowerPoint Report

```python
from pptx import Presentation
from pptx.util import Inches

prs = Presentation()
slide = prs.slides.add_slide(prs.slide_layouts[5])
slide.shapes.title.text = 'Test Summary Report'

# Add summary text
textbox = slide.shapes.add_textbox(Inches(0.5), Inches(1.5), Inches(8), Inches(2))
text_frame = textbox.text_frame
text_frame.text = f"Passed: {pass_count}\nFailed: {fail_count}\nAverage Duration: {avg_duration:.2f}s"

# Add chart image
slide.shapes.add_picture('test_results_pie.png', Inches(1), Inches(3), width=Inches(6))

prs.save('Test_Automation_Report.pptx')
```

## Step 5: Verify Report

Open `Test_Automation_Report.pptx` to see a slide summarising the test results with a pie chart.

## Next Steps

* Add multiple slides for different test modules.
* Generate weekly/monthly reports automatically using a scheduler.
* Enhance charts with matplotlib for trends and durations.

---

*End of Tutorial*
