from ConexaoSQL_v2 import Product
from ConexaoSQL_v2 import Vendor
from ConexaoSQL_v2 import db


class get_file:
    def get_product(self):
        product = Product.query.all()
        results = [ 
            {
                "id":products.id,
                "name":products.name,
                "code":products.code,
                "price":products.price
            } for products in product]

        return {"count": len(results), "product": results}

    def get_vendor(self):
        vendor = Vendor.query.all()
        results = [ 
            {
                "id":vendor_s.id,
                "name":vendor_s.name,
                "cnpj":vendor_s.cnpj,
                "city":vendor_s.city
            } for vendor_s in vendor]

        return {"count": len(results), "vendor": results}

inst = get_file()
print(inst.get_product())
print(inst.get_vendor())
#get_report_vendor = get_vendor(self)
#get_report_product = get_product(self)
#print(get_report_vendor)