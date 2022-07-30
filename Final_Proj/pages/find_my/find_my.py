from flask import Blueprint, render_template

# catalog blueprint definition
catalog = Blueprint('catalog', __name__, static_folder='static', static_url_path='/catalog', template_folder='templates')


# Routes
@catalog.route('/contact')
def index():
    return render_template('contact.html')
from flask import Blueprint, render_template

# catalog blueprint definition
find_my = Blueprint('find_my', __name__, static_folder='static', static_url_path='/catalog', template_folder='templates')


# Routes
@find_my.route('/find_my')
def index():
    return render_template('find_my.html')
