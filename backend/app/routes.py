from flask import request, jsonify
from app import app
import csv
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "..", "data", "products", "3dp.csv")

@app.route('/api/add-product', methods=['POST'])
def add_product():
    product_data = request.json

    with open(CSV_PATH, 'a') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=[
            'brand', 'model', 
            # ... Other fields ...
        ])
        writer.writerow(product_data)

    return jsonify({"message": "Product added successfully!"})
