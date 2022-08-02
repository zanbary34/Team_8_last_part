
from flask import Blueprint, render_template, jsonify

# catalog blueprint definition
from utilities.classes.Technician import Technician
from utilities.db.db_manager import DBManager

find_my = Blueprint('find_my', __name__, static_folder='static', static_url_path='/find_my', template_folder='templates')


# Routes
@find_my.route('/find_my')
def index_find_my():
    return render_template('find_my.html')


@find_my.route('/find_my/<city>')
def redirect_parking_city(city):
    tech = Technician()
    scooters = tech.get_scooters_city(city)
    print(scooters)
    return jsonify(scooters)
