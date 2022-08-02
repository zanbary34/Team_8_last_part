from flask import Blueprint, render_template, request, jsonify

from utilities.classes.Technician import Technician
import json
# catalog blueprint definition
parking = Blueprint('parking', __name__, static_folder='static', static_url_path='/parking', template_folder='templates')


# Routes
@parking.route('/parking')
def redirect_parking():
    return render_template('parking.html')


@parking.route('/parking/<city>')
def redirect_parking_city(city):
    tech = Technician()
    parking = tech.get_parking(city)
    print(parking)
    return jsonify(parking)



