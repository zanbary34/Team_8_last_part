
from flask import Blueprint, render_template

# catalog blueprint definition
find_my = Blueprint('find_my', __name__, static_folder='static', static_url_path='/pages/find_my', template_folder='templates')


# Routes
@find_my.route('/find_my')
def index():
    return render_template('find_my.html')
