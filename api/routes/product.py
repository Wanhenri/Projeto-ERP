from database.ConexaoSQL_v2 import Product
from database.ConexaoSQL_v2 import db
from flask_restful import Resource
from flask import request


def Product_function(product, code, price):
    product = Product(name=product, code=code, price=price)
    db.session.add(product)
    db.session.commit()


def delete_user(id):
    product = db.session.query(Product).filter_by(id=id).first()
    db.session.delete(product)
    db.session.commit()
    return '', 204


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

    def delete(self):
        json_data = request.get_json()
        delete_id = str(json_data['id'])
        delete_user_reports = delete_user(delete_id)
        return delete_user_reports
