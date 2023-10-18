from flask import Flask
from flask_cors import CORS
# Other necessary imports...

app = Flask(__name__)

# Allow cross-origin requests
CORS(app)

# Other app configuration, Blueprints, etc.

if __name__ == '__main__':
    app.run()
