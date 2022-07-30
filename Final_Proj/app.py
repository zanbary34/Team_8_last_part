from flask import Flask

app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## about
from pages.about.about import about
app.register_blueprint(about)

## contact
from pages.contact.contact import contact
app.register_blueprint(contact)

## find_my
from pages.find_my.find_my import find_my
app.register_blueprint(find_my)

## Main menu
from pages.main.main import main
app.register_blueprint(main)
# parking

from pages.parking.parking import parking
app.register_blueprint(parking)
