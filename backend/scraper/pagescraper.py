import requests
from bs4 import BeautifulSoup
import csv
import tkinter as tk
from tkinter import filedialog, messagebox

def start_scraping():
    url = url_entry.get()
    status_label.config(text="Scraping in progress...")
    try:
        # Fetch the webpage
        # url = 'https://top3dshop.com/path-to-product-listing'
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract product details
        product = {}

        # Product Image URL
        product['image_url'] = soup.find('img', class_='catalog-goods__item__img')['src']

        # Product Link URL and Title
        product_link = soup.find('a', class_='catalog-goods__item__title')
        product['link_url'] = product_link['href']
        product['title'] = product_link.text.strip()

        # Product Price
        product['price'] = soup.find('span', class_='catalog-goods__item__price').text.strip()

        # Product Availability Status
        product['availability'] = soup.find('span', class_='catalog-goods__item__status').text.strip()

        # Product Specifications
        specifications = {}
        for spec in soup.find_all('span', class_='catalog-goods__item__info-inner'):
            key = spec.find('span', class_='catalog-goods__item__key').text.strip()
            value = spec.find('span', class_='catalog-goods__item__val').text.strip()
            specifications[key] = value
        product['specifications'] = specifications

        # Product Description
        product['description'] = soup.find('span', class_='catalog-goods__item__descriptions').text.strip()


        # Save to CSV
        with open('backend/scraper/output.csv', 'a', newline='') as csvfile:
            fieldnames = ['image_url', 'link_url', 'title', 'price', 'availability', 'description']  # add more fields as needed
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(product)
        
        status_label.config(text="Scraping successful!")
        open_button.config(state=tk.NORMAL)
    except Exception as e:
        status_label.config(text=f"Error: {e}")

def open_csv():
    file_path = 'backend/scraper/output.csv'
    messagebox.showinfo("CSV File", f"CSV file saved at: {file_path}")

# Create the main window
root = tk.Tk()
root.title("Web Scraper")

# Create and place the widgets
url_label = tk.Label(root, text="Enter URL:")
url_label.pack(pady=10)

url_entry = tk.Entry(root, width=50)
url_entry.pack(pady=10)

start_button = tk.Button(root, text="Start Scraping", command=start_scraping)
start_button.pack(pady=10)

status_label = tk.Label(root, text="")
status_label.pack(pady=10)

open_button = tk.Button(root, text="Open CSV", state=tk.DISABLED, command=open_csv)
open_button.pack(pady=10)

root.mainloop()
