import requests
from flask import request, Response
import json
from datetime import datetime, timedelta
from flask_restful import Resource



class Teste(Resource):
    def get(self):
        data = requests.get(
            "http://servicos.cptec.inpe.br/XML/estacao/SBGR/condicoesAtuais.xml")
        return Response(data, mimetype="application/xml")

    def post(self):
        return {
            'status': 201,
            'response': 'Created successfully'
        }
