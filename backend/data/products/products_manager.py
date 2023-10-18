from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)  # Initialize CORS

# Path to the CSV file
CSV_PATH = os.path.join("data", "products", "3dp.csv")

@app.route('/add-product', methods=['POST'])
def add_product():
    data = request.json
    # Append data to CSV
    with open(CSV_PATH, 'a', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=data.keys())
        writer.writerow(data)
    return jsonify({"message": "Product added successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
