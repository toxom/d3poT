from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # to allow requests from any origin (you can restrict this later)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sql/products.db'
db = SQLAlchemy(app)


class Printer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(80))
    model = db.Column(db.String(80))
    # Add the rest of your columns here...


@app.route('/printers', methods=['GET'])
def get_printers():
    printers = Printer.query.all()
    return jsonify([printer.as_dict() for printer in printers])


if __name__ == '__main__':
    app.run(debug=True)
