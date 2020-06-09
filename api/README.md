# API

Esta API tem como objetivo reunir diversos serviços de previsão do tempo
de maneira acessível.

### Instalação

Pacote do Pipfile:

```bash
[packages]
flask = "~=1.1.1"
flask-cors = "~=3.0.8"
flask-restful = "~=0.3.7"
requests = "~=2.22.0"
gunicorn = "*"

[requires]
python="3.7.5"

```

Para instalar os pacotes utilizados pela API execute o comando abaixo:

```bash
$ pipenv install
```

### Configuração

As confirgurações da API se encontram no arquivo settings.py. É necessário
configurar as chaves para cada serviço disponível.

### Execução

Para rodar a API, ative o ambiente virtual, com o comando abaixo:

```bash
$ pipenv shell
```

E então, execute o servidor com o seguinte comando: