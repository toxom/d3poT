# from flask import Flask, jsonify, request
# from scraper.main import initiate_scraper
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from scraper.main import main as initiate_scraper


app = Flask(__name__)

# Temporary storage
scraped_data = {}

@app.route('/scrape', methods=['POST'])
def start_scraper():
    url = request.json.get('url')
    search_text = request.json.get('search_text')
    endpoint = request.json.get('endpoint')
    
    # Your scraping logic here using the above parameters.
    data = initiate_scraper(url, search_text, endpoint)
    
    global scraped_data
    scraped_data = data
    
    return jsonify({"status": "Scraping completed."})

@app.route('/get-scraped-data', methods=['GET'])
def get_scraped_data():
    global scraped_data
    return jsonify(scraped_data)

if __name__ == "__main__":
    app.run(debug=True)
