from flask import Blueprint, render_template, request, jsonify
from utilities.db.db_manager import DBManager
import json
# catalog blueprint definition
parking = Blueprint('parking', __name__, static_folder='static', static_url_path='/parking', template_folder='templates')


# Routes
@parking.route('/parking')
def redirect_parking():
    return render_template('parking.html')


@parking.route('/parking/<city>')
def redirect_parking_city(city):
    print (city)
    db= DBManager()
    query = "select longitude, latitude from team8.parkings where city='%s';" % city
    query = db.fetch(query)
    print (query)
    return jsonify(query)



