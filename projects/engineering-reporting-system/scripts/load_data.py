import pandas as pd
from pathlib import Path

DATA_FILE = Path(__file__).resolve().parent.parent / "data" / "sample_test_data.csv"


def load_data():
    """
    Load engineering test data.

    Returns
    -------
    pandas.DataFrame
    """

    df = pd.read_csv(DATA_FILE)

    return df