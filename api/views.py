from flask import Blueprint, jsonify, request
import pandas as pd
main = Blueprint('main', __name__)

corpus = pd.read_csv("./data/corpus.csv")

@main.route("/")
def home():
    return 'HOLA!'

@main.route('/data')
def data():
    return jsonify({'MACHISTA' : 50, 'NO_MACHISTA': 100, 'DUDOSO': 10})

@main.route('/api/dist', methods=['POST'])
def dist():
    data = request.get_json(force=True)
    termino = data['termino']
    total = 0
    counter_dict = {"MACHISTA":0, "NO_MACHISTA":0, "DUDOSO":0}
    for data in corpus[corpus['termino'] == termino]['categoria']:
        counter_dict[data] += 1
        total += 1

    return counter_dict
