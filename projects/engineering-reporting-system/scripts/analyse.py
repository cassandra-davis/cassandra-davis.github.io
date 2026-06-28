import pandas as pd


def summary(df: pd.DataFrame):

    return df.describe().round(2)


def calculate_kpis(df):

    return {

        "Samples": len(df),

        "Maximum Temperature": round(df["temperature"].max(), 1),

        "Minimum Temperature": round(df["temperature"].min(), 1),

        "Average Temperature": round(df["temperature"].mean(), 1),

        "Maximum Pressure": round(df["pressure"].max(), 2),

        "Average Pressure": round(df["pressure"].mean(), 2),

        "Voltage Drift": round(
            df["voltage"].max() -
            df["voltage"].min(),
            3
        ),

        "Missing Values": int(df.isna().sum().sum())

    }


def engineering_assessment(df):

    findings = []

    if df["temperature"].max() > 95:
        findings.append("High temperature warning.")

    if df["voltage"].max() - df["voltage"].min() > 0.10:
        findings.append("Voltage drift exceeds threshold.")

    if len(findings) == 0:
        findings.append("All engineering acceptance criteria satisfied.")

    return findings