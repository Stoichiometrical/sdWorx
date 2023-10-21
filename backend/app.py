from flask import Flask, request, jsonify
import pandas as pd
import os
from textblob import TextBlob

app = Flask(__name__)

# Function for sentiment analysis
def analyze_sentiment(text):
    analysis = TextBlob(text)
    return analysis.sentiment.polarity

# Store tasks data in a CSV file
def store_tasks_data(data):
    data_file = "tasks_data.csv"

    if not os.path.exists(data_file):
        # Create a new CSV file with headers if it doesn't exist
        df = pd.DataFrame(columns=["Task name", "Assignee name", "Comments", "Sentiment Score"])
        df.to_csv(data_file, index=False)

    # Calculate sentiment scores and append new data to the CSV file
    data["Sentiment Score"] = data["Comments"].apply(analyze_sentiment)
    df = pd.read_csv(data_file)
    df = df.append(data, ignore_index=True)
    df.to_csv(data_file, index=False)

@app.route("/tasks", methods=["POST"])
def receive_tasks_data():
    data = request.json
    # Store data in CSV file with sentiment scores
    store_tasks_data(data)
    return "Data received and stored successfully"

@app.route("/analyze_sentiment", methods=["POST"])
def analyze_sentiment_route():
    data = request.json
    text = data.get("text", "")
    sentiment_score = analyze_sentiment(text)
    return jsonify({"sentiment_score": sentiment_score})

if __name__ == "__main__":
    app.run(debug=True)
