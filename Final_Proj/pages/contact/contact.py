from flask import Blueprint, render_template, request
from utilities.classes.Contact import Contact

# catalog blueprint definition
contact = Blueprint('contact', __name__, static_folder='static', static_url_path='/contact', template_folder='templates')


# Routes
@contact.route('/contact')
def index():
    return render_template('contact.html')

@contact.route('/insertDetails', methods=['POST'])
def insert():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    details = Contact(name, email, message)
    details.insertMessage()
    return render_template('contact.html')