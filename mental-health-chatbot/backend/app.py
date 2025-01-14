from flask import Flask, request, jsonify

app = Flask(__name__)

def generate_reply(message):
    # Simple logic for generating a reply
    if "hello" in message.lower():
        return "Hello! How can I assist you today?"
    elif "help" in message.lower():
        return "I'm here to help. Please tell me more about what's on your mind."
    else:
        return "I'm not sure how to respond to that. Can you please elaborate?"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message')
    if not message:
        return jsonify({'error': 'Message is required'}), 400

    reply = generate_reply(message)
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)