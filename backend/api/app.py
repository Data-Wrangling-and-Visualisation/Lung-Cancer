from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/heatmap", methods=["GET"])
def get_heatmap_data():
    with open("datasets/heatmap_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/cleaned", methods=["GET"])
def get_cleaned_data():
    with open("datasets/cleaned_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/parallel_data", methods=["GET"])
def get_parallel_data():
    with open("datasets/parallel_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/sankey_data", methods=["GET"])
def get_sankey_data():
    with open("datasets/sankey_data.json") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/radarchart_data", methods=["GET"])
def get_radarchart_data():
    with open("datasets/radarchart_data.json") as f:
        data = json.load(f)
    return jsonify(data)

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)