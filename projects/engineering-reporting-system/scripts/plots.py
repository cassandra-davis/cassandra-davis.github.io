import matplotlib.pyplot as plt


def _save():

    plt.tight_layout()


def temperature_plot(df):

    plt.figure(figsize=(8,4))

    plt.plot(
        df["time"],
        df["temperature"],
        linewidth=2
    )

    plt.title("Temperature Profile")

    plt.xlabel("Time (s)")

    plt.ylabel("Temperature (°C)")

    plt.grid(True)

    _save()


def pressure_plot(df):

    plt.figure(figsize=(8,4))

    plt.plot(
        df["time"],
        df["pressure"],
        linewidth=2
    )

    plt.title("Pressure Trend")

    plt.xlabel("Time (s)")

    plt.ylabel("Pressure (kPa)")

    plt.grid(True)

    _save()


def voltage_plot(df):

    plt.figure(figsize=(8,4))

    plt.plot(
        df["time"],
        df["voltage"],
        linewidth=2
    )

    plt.title("Voltage Stability")

    plt.xlabel("Time (s)")

    plt.ylabel("Voltage (V)")

    plt.grid(True)

    _save()