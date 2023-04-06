from flask import Flask, jsonify
from flask_cors import CORS
import random

from backendthoughts import get_image_from_text, get_showerthought

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000']) 

@app.route("/showerthoughtimage")
def showerthoughtimage():
    print("received request")
    text = get_showerthought()
    
    img_link = get_image_from_text(text)
    out = {"thought":text,"image":img_link}

    print("sending out")
    return jsonify(out)

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Run the Flask app on port 5000
