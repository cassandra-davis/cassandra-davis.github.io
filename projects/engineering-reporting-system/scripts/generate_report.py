"""
Example workflow used to generate the engineering report.
"""

from load_data import load_data
from clean_data import clean_data

from analyse import (
    calculate_kpis,
    engineering_assessment
)

from plots import (
    temperature_plot,
    pressure_plot,
    voltage_plot
)


def main():

    print("Loading data...")

    df = load_data()

    print("Cleaning data...")

    df = clean_data(df)

    print("Calculating KPIs...")

    kpis = calculate_kpis(df)

    print()

    print("Engineering KPIs")

    print("----------------")

    for key, value in kpis.items():

        print(f"{key}: {value}")

    print()

    print("Engineering Assessment")

    print("----------------------")

    for finding in engineering_assessment(df):

        print(f"- {finding}")

    print()

    print("Generating charts...")

    temperature_plot(df)

    pressure_plot(df)

    voltage_plot(df)

    print()

    print("Report generation complete.")


if __name__ == "__main__":

    main()