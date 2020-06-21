# API


## Structure

```bash
.
├── README.md
├── Pipfile
├── Pipfile.lock
├── Procfile
├── server.py
├── settings.py
├── testPostman
    ├── test_postman.py
├── routes
    ├── product.py
    └── vendor.py
├── database
    ├── ConexaoSQL_v2.py
    └── conexaoSQL.db
├──  controllers
└── tmp
    ├── add_vendor_database.py
    └── add_product_database.py
    └── cnpj.py
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

### ``` GET /api/routes/product ```

Returns a status warning 200

### ``` POST /api/routes/product ```

Parameters:
```
{
 "name": "String or null",
 "code": "Number",
 "price": "Number"
}
```
### ``` DELETE /api/routes/product ```

Parameters:
```
{
 "id": "Number"
}
```
### ``` PUT /api/routes/product ```

Parameters:
```
{
 "id":"Number",
 "name": "String",
 "code": "Number",
 "price": "Number"
}
```

### ``` GET /api/routes/vendor ```

Returns all file

### ``` POST /api/routes/vendor ```

Parameters:
```
{
 "name": "String",
 "cnpj": Number,
 "city": "String"
}
```
### ``` DELETE /api/routes/vendor ```

Parameters:
```
{
 "id": "12"
}
```
### ``` PUT /api/routes/vendor ```
Parameters:
```
{
 "id":"Number",
 "name": "String",
 "cnpj": "Number",
 "city": "String"
}
```

## Schema
