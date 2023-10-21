from flask import Flask, request, jsonify
from sentiment_analysis import analyze_sentiment
from data_handling import store_tasks_data, get_tasks_data, analyze_and_store_sentiment_analysis, get_sentiment_analysis_data
from chatbot import chat_with_gpt4

app = Flask(__name__)

@app.route("/tasks", methods=["POST"])
def receive_tasks_data():
    data = request.json
    store_tasks_data(data)
    
    # Perform sentiment analysis and store results
    analyze_and_store_sentiment_analysis(data)
    
    return "Data received and stored successfully"

@app.route("/get_tasks_data", methods=["GET"])
def get_tasks_data_route():
    data = get_tasks_data()
    return jsonify(data)

@app.route("/get_sentiment_data", methods=["GET"])
def get_sentiment_data_route():
    data = get_sentiment_analysis_data()
    return jsonify(data)

@app.route("/analyze_sentiment", methods=["POST"])
def analyze_sentiment_route():
    data = request.json
    text = data.get("text", "")
    sentiment_score = analyze_sentiment(text)

    # Return sentiment score without storing it in sentiment_data
    return jsonify({"sentiment_score": sentiment_score})

@app.route('/chatbot', methods=['POST'])
def chatbot_endpoint():
    data = request.get_json()
    if 'prompt' in data:
        prompt = data['prompt']
        response = chat_with_gpt4(prompt)
        return jsonify({'response': response})
    else:
        return jsonify({'error': 'Missing prompt'})

if __name__ == "__main__":
    app.run(debug=True)
