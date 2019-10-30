import requests
import bs4
import csv

FILE_NAME = "tax_table_attempt_2.csv" # CONSTANTS - Validation criteria to check for in HTML 

# CONSTANTS - Validation criteria to check for in HTML 
PAGE_CRITERIA = "January 30, 2019"
INFO_CRITERIA = "tbody"

tableHeadings = []
tableBody = []
tempRow = []

# Fetch the page to investigate
response = requests.get("https://taxfoundation.org/sales-tax-rates-2019/") 

# Only continue if the page has been successfully obtained
if response.status_code == 200 :
  parsedResponse = bs4.BeautifulSoup(response.text, "html.parser")  # Parse Page into HTML-based parse tree
  tableBody = parsedResponse.find_all(INFO_CRITERIA)             # Find the table body

# Check to be sure that the criteria is present => proceed to store date in CSV
  if parsedResponse.find(string=PAGE_CRITERIA) != None and len(tableBody) == 1:
    # Getting Table Headers
    tableHead = parsedResponse.find("thead")
    if tableHead != None:
      for header in tableHead.find("tr").find_all("th"):
        tableHeadings.append(header.text) 

    # Setup CSV
    fileObj = csv.writer(open(FILE_NAME, 'w', newline=''))     
    fileObj.writerow(tableHeadings) 

    # Store Data
    for row in tableBody[0]:
      for col in row:
        if isinstance(col, bs4.element.Tag):
          tempRow.append(col.text)
      fileObj.writerow(tempRow)
      tempRow = []


  
  
