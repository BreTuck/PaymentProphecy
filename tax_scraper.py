import requests
from bs4 import BeautifulSoup

response = requests.get('https://taxfoundation.org/sales-tax-rates-2019/');

if response.status_code == 200:
  print(response)
  parsedResponse = BeautifulSoup(response.text, 'html.parser')
  print(parsedResponse.table)
