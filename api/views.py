from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

# @main.route('/add_movie', methods=['POST'])
# def add_movie():
#     movie_data = request.get_json()

#     new_movie = Movie(title=movie_data['title'], rating=movie_data['rating'])

#     db.session.add(new_movie)
#     db.session.commit()

#     return 'Done', 201

@main.route("/")
def home():
    return 'HOLA!'

@main.route('/data')
def data():
    return jsonify({'MACHISTA' : 50, 'NO_MACHISTA': 100, 'DUDOSO': 10})