import pandas as pd
from textblob import TextBlob

def perform_sentiment_analysis_and_save_to_csv(input_csv, output_csv):
    # Load the dataset
    df = pd.read_csv(input_csv)

    # Perform sentiment analysis on the "Comments" column and add it as a new column
    df['Sentiment'] = df['Comments'].apply(lambda comment: TextBlob(comment).sentiment.polarity)

    # Save the updated dataset to a new CSV file
    df.to_csv(output_csv, index=False)

# Specify the input and output file paths
input_csv = 'tasks_data_0.csv'
output_csv = 'processed_tasks_data_0.csv'

# Call the function to perform sentiment analysis and save to the output file
perform_sentiment_analysis_and_save_to_csv(input_csv, output_csv)
