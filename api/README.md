# API


## Estrutura

```bash
.
├── README.md
├── requirements.txt
├── server.py
├── settings.py
├── routes
│   ├── somar.py
│   └── teste.py
    └── inpe.py
    └── inmet.py
    └── inpe_TQ0666.py
    └── wrf_ams05km.py
├── schema
│   └── weather.py
└── controllers
    └── Somar.py
```


### Installation

Packages Pipfile:

```bash
[packages]
flask = "~=1.1.1"
flask-cors = "~=3.0.8"
flask-restful = "~=0.3.7"
requests = "~=2.22.0"
gunicorn = "*"
sqlalchemy = "==1.3.8"
Flask-SQLAlchemy = "==2.1"
flake8 = "==3.8.0"

[requires]
python="3.7.5"

```

To install the packages used by the API run the command below:

```bash
$ pipenv install
```

### Configuration

### Run

To run the application, activate the virtual environment, with the command below:

```bash
$ pipenv shell
```

And then, run the server with the following command:


```bash
$ python server.py
 * Serving Flask app "server" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 281-745-748
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## Controllers

## Routes

## Schema
