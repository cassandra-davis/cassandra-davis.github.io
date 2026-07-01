from scripts.analyse import calculate_kpis

def build_summary(df):

    kpis = calculate_kpis(df)

    rows = []

    for key, value in kpis.items():

        rows.append({
            "Metric": key,
            "Value": value
        })

    return rows