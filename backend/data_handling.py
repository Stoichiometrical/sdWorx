from sentiment_analysis import analyze_sentiment
import pandas as pd
import os
import glob
from textblob import TextBlob

# Directory where data files are stored
DATA_DIR = "data/"

def get_latest_data_filename():
    # Get a list of existing data files
    data_files = glob.glob(DATA_DIR + "tasks_data_*.csv")
    
    # Find the latest version number
    version_numbers = [int(file.split("_")[-1].split(".")[0]) for file in data_files]
    if version_numbers:
        latest_version = max(version_numbers)
    else:
        latest_version = 0

    # Create a new data file with the next version number
    new_data_filename = os.path.join(DATA_DIR, f"tasks_data_{latest_version + 1}.csv")
    return new_data_filename

def store_tasks_data(data):
    # Determine the filename for the new data
    new_data_filename = get_latest_data_filename()

    if not os.path.exists(new_data_filename):
        # Create a new CSV file with headers if it doesn't exist
        df = pd.DataFrame(columns=["Task name", "Assignee name", "Comments"])
        df.to_csv(new_data_filename, index=False, mode="w")

    # Append new data to the CSV file
    data = pd.DataFrame(data)
    df = pd.read_csv(new_data_filename)
    df = df.append(data, ignore_index=True)
    df.to_csv(new_data_filename, index=False, mode="w")

def get_sentiment_analysis_data():
    data_files = glob.glob(DATA_DIR + "sentiment_data_*.csv")
    if data_files:
        latest_file = max(data_files, key=os.path.getctime)
        df = pd.read_csv(latest_file)
        return df.to_dict(orient="records")
    return []

def analyze_and_store_sentiment_analysis(data):
    new_data_filename = get_latest_data_filename()
    sentiment_data_filename = os.path.join(DATA_DIR, f"sentiment_data_{os.path.basename(new_data_filename)}")
    
    if not os.path.exists(sentiment_data_filename):
        # Create a new CSV file with headers if it doesn't exist
        df = pd.DataFrame(columns=["Task name", "Assignee name", "Comments", "Sentiment Score"])
        df.to_csv(sentiment_data_filename, index=False, mode="w")

    data["Sentiment Score"] = data["Comments"].apply(analyze_sentiment)
    df = pd.read_csv(sentiment_data_filename)
    df = df.append(data, ignore_index=True)
    df.to_csv(sentiment_data_filename, index=False, mode="w")
