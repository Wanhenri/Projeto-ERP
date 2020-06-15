from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS


# Import routes
from routes.product import Product_item
from routes.vendor import Vendor_item


app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Product_item, '/product_item')
api.add_resource(Vendor_item, '/vendor_item')


if __name__ == '__main__':
    app.run(debug=True)
