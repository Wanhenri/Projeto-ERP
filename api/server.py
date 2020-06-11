from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS


# Import routes
from database.add_product_database import Product_item
from database.add_vendor_database import Vendor_item


app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Product_item, '/product_item')
api.add_resource(Vendor_item, '/vendor_item')


if __name__ == '__main__':
    app.run(debug=True)
