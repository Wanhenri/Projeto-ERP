from database.ConexaoSQL_v2 import Vendor
from database.ConexaoSQL_v2 import db
from flask_restful import Resource
from flask import request

    
def Vendor_item_function(name,cnpj,city):
    vendor = Vendor(name=name, cnpj=cnpj, city=city)
    db.session.add(vendor)
    db.session.commit()
       
#name_id = "wanderson"
#cnpj_id = "123123"
#city_id = "teste"
#teste = Vendor_item(name_id,cnpj_id,city_id)
#print(teste)

class Vendor_item(Resource):
    def get(self):
        return {
            'status': 200,
            'response': "Funciona Vendor_item"
        }
    
    def post(self):
        json_data = request.get_json()
        name_id = str(json_data['name'])
        cnpj_id = str(json_data['cnpj'])
        city_id = str(json_data['city'])
        print("##################")
        print(name_id)
        print(cnpj_id)
        print(city_id)
        print("##################")
        Vendor_item_reports = Vendor_item_function(name_id,cnpj_id,city_id)
        return Vendor_item_reports



