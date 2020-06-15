from database.ConexaoSQL_v2 import Product
from database.ConexaoSQL_v2 import db
from flask_restful import Resource
from flask import request


def Product_function(product, code, price):
    product = Product(name=product, code=code, price=price)
    db.session.add(product)
    db.session.commit()


class Product_item(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona Product_item"
        }

    def post(self):
        json_data = request.get_json()
        product_id = str(json_data['product'])
        code_id = str(json_data['code'])
        price_id = str(json_data['price'])
        Product_item_reports = Product_function(product_id, code_id, price_id)
        return Product_item_reports
