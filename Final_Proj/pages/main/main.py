from flask import Blueprint, render_template

# catalog blueprint definition
main = Blueprint('main', __name__, static_folder='static', static_url_path='/catalog', template_folder='templates')


# Routes
@main.route('/main')
def index():
    return render_template('main.html')
