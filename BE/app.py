from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/check', methods=['GET'])
def checkConnection():
    return({'Connection': 'Yes'})



if __name__ == '__main__': 
    app.run(threaded=True)