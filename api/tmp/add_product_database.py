from database.ConexaoSQL_v2 import Product
from database.ConexaoSQL_v2 import db
from flask_restful import Resource

def Product_item_function(product,code,price):
    product = Product(name='product', code='code', price='price')
    db.session.add(product)
    db.session.commit()
    

class Product_item(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona Product_item"
        }

    def post(self):
        Product_item_reports = Product_item(product,code,price)
        return Product_item_reports

