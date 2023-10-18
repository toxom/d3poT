import requests
from bs4 import BeautifulSoup

def initiate_scraper(url, search_text=None, endpoint=None):
    # Using fetch_title as an example
    try:
        response = requests.get(url)
        response.raise_for_status() 
        soup = BeautifulSoup(response.content, 'html.parser')
        title = soup.title.string 
        return {"data": title}
    except requests.RequestException as e:
        return {"error": str(e)}

def fetch_title(url):
    try:
        response = requests.get(url)
        response.raise_for_status() 
        soup = BeautifulSoup(response.content, 'html.parser')
        title = soup.title.string 
        return {"data": title}
    except requests.RequestException as e:
        return {"error": str(e)}

def fetch_products(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    products = soup.find_all('div', class_='product')
    data = []
    for product in products:
        name = product.find('h2', class_='product-name').text
        price = product.find('span', class_='product-price').text
        data.append({'name': name, 'price': price})
    return data
