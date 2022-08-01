
from flask import Blueprint, render_template, jsonify

# catalog blueprint definition
from utilities.db.db_manager import DBManager

find_my = Blueprint('find_my', __name__, static_folder='static', static_url_path='/find_my', template_folder='templates')


# Routes
@find_my.route('/find_my')
def index_find_my():
    return render_template('find_my.html')


@find_my.route('/find_my/<city>')
def redirect_parking_city(city):
    print (city)
    db= DBManager()
    query = "select longitude, latitude,firm_name from team8.scooters where city='%s';" % city
    query = db.fetch(query)
    print (query)
    return jsonify(query)
