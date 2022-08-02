from datetime import timedelta
from flask import Flask, redirect, render_template, request, session, url_for

app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.config['SESSION_PERMANENT'] = True
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=20)

# about
from pages.about.about import about
app.register_blueprint(about)

# contact
from pages.contact.contact import contact
app.register_blueprint(contact)

# find_my
from pages.find_my.find_my import find_my
app.register_blueprint(find_my)

# parking
from pages.parking.parking import parking
app.register_blueprint(parking)

# maintenance
from pages.maintenance.maintenance import maintenance
app.register_blueprint(maintenance)

@app.route('/')
@app.route('/main')
def index():
    return render_template('main.html')

