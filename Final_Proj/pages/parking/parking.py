from flask import Blueprint, render_template

# catalog blueprint definition
parking = Blueprint('parking', __name__, static_folder='static', static_url_path='/parking', template_folder='templates')


# Routes
@parking.route('/parking')
def index():
    return render_template('parking.html')
