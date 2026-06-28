import pandas as pd


def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    """
    Clean engineering test data.
    """

    df = df.copy()

    # Remove duplicate rows
    df = df.drop_duplicates()

    # Remove impossible temperatures
    df = df[(df["temperature"] >= -40) &
            (df["temperature"] <= 150)]

    # Fill missing values

    df = df.interpolate()

    return df