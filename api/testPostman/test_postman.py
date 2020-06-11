import json
import requests

url = "http://127.0.0.1:5000/vendor_item"

payload = "{\r\n \"name\": \"wanderson henrique\",\r\n \"cnpj\": \"123123123\",\r\n \"city\": \"teste\"\r\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

# Validate response headers and body contents, e.g. status code.
assert response.status_code == 200
#resp_body = response.json()
#assert resp_body['url'] == url

print("TESTE")
print(response.text)