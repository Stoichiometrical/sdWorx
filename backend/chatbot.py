import openai
from flask import current_app

# Define a dictionary of prompts and their corresponding mock responses
mock_responses = {
    "Do you have examples of when this was done in the past so that I can replicate that?":
    "Yes, Joe from the design team worked on that and updated it on the folder path below:\n\nCompany/ documents/ project 1",

    "Do you know where I can find the guide on the company branding guide?":
    "Yes, Lucy from the marketing department wrote an article about the company branding and you can see it here: sdworx.com/branding",
}

def chat_with_gpt4(prompt):
    if prompt in mock_responses:
        return mock_responses[prompt]
    else:
        # Uncomment the following section if you want to use the OpenAI API
        # ! Our secret key was not working, please bear with us
        """
        response = openai.ChatCompletion.create(
            model="gpt-4.0-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            api_key=current_app.config['OPENAI_API_KEY']  # Access the API key from app config
        )

        return response.choices[0].message['content']
        """
        return "I'm sorry, I don't have that information."


