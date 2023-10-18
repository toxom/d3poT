import tkinter as tk
from tkinter import simpledialog
from scrapingbee import ScrapingBeeClient
from bs4 import BeautifulSoup
import csv

def get_url():
    root = tk.Tk()
    root.withdraw()
    url = simpledialog.askstring("Input", "Please enter the URL:")
    print("Starting script...")
    root.destroy()
    return url

client = ScrapingBeeClient(api_key='MZ13G1AVV8C5MEYVOIMIGJEPUH0PBSJPYTCO6IUWRZS3BXNOLA4TUP27ZGQ97LS8NRBCO66WF3ZUKSEX')

url_to_scrape = get_url()
response = client.get(url_to_scrape)
print("Fetching URL...")

# Check if the response is successful
if response.status_code == 200:
    print("Successful response from ScrapingBee!")
else:
    print(f"Failed response from ScrapingBee. Status code: {response.status_code}")
    exit()

soup = BeautifulSoup(response.content, 'html.parser')
print("Parsing content...")

# Extract product details
product = {}

# Price
price_element = soup.find('span', {'id': 'priceblock_ourprice'})
product['price'] = price_element.text.strip() if price_element else "Not Found"

# Extract details from the product details table
details_table = soup.find('table', {'id': 'productDetails_techSpec_section_1'})
if details_table:
    for row in details_table.find_all('tr'):
        header = row.find('th')
        value = row.find('td')
        if header and value:
            key = header.text.strip()
            product[key] = value.text.strip()

# Save to CSV
with open('backend/scraper/test.csv', 'a', newline='') as csvfile:
    fieldnames = ['Brand', 'Product Dimensions', 'Material', 'Color', 'Item Weight', 'Price', 'Style']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow(product)
    print("Saved product details to CSV.")
