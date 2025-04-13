from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/heatmap", methods=["GET"])
def get_heatmap_data():
    with open("../heatmap-visualisation/heatmap_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/cleaned", methods=["GET"])
def get_cleaned_data():
    with open("../cleaned-lung-cancer-dataset/cleaned_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/parallel_data", method=["GET"])
def get_parallel_data():
    with open("../parallel-visualisation.json") as f:
        data = json.load(f)
    return jsonify(data)

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)