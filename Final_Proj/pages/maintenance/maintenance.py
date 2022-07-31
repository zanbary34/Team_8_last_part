from datetime import timedelta
import mysql.connector
from flask import Flask, redirect, url_for, render_template, request, session, Blueprint
from utilities.classes.Technician import Technician
from utilities.db.db_manager import dbManager

# catalog blueprint definition
maintenance = Blueprint('maintenance', __name__, static_folder='static', static_url_path='/maintenance',
                    template_folder='templates')

# maintenance = Flask(__name__)

# maintenance.secret_key = '123'
# maintenance.config['SESSION_PERMANENT'] = True
# maintenance.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=20)

# @maintenance.route('/')
# def main():
#     return redirect('/home')
#
# @maintenance.route('/home')
# def maintenancePage():
#     return render_template('maintenance.html')

@maintenance.route('/maintenance')
def index():
    return render_template('maintenance.html')

# @maintenance.route('/checkPassword', methods=['POST'])
# def scooters():
#     if request.form['username'] == 'Roy':
#         approved = True
#     query = 'select * from scooters'
#     scooters_list = interact_db(query, query_type='fetch')
#     return render_template('maintenance.html', scooters=scooters_list, approved=approved)

@maintenance.route('/checkPassword', methods=['POST'])
def scooters():
    if request.form['username'] == 'Roy':
        approved = True
    tech = Technician(username='Roy', password='1')
    return render_template('maintenance.html', scooters=tech.getScooters(), approved=approved)

@maintenance.route('/delete_scooter', methods=['POST'])
def delete_scooter_func():
    scooter_id = request.form['scooter_id']
    query = "DELETE FROM scooters WHERE scooter_id='%s';" % scooter_id
    interact_db(query, query_type='commit')
    query = 'select * from scooters'
    scooters_list = interact_db(query, query_type='fetch')
    return render_template('maintenance.html', approved=True, scooters=scooters_list)

@maintenance.route('/update_scooter', methods=['POST'])
def update_scooter_func():
    scooter_id = request.form['scooter_id']
    battery = request.form['battery']
    longitude = request.form['longitude']
    latitude = request.form['latitude']
    firm = request.form['firm_name']
    helmet = request.form['helmet']
    city = request.form['city']

    # if helmet != 0 or helmet != 1:
    #     helmet =
    
    query = "UPDATE scooters SET battery_level = '%s', longitude = '%s', latitude = '%s',  \
             firm_name = '%s', is_with_helmet = '%s', city = '%s' WHERE scooter_id='%s';"\
            % (battery, longitude, latitude, firm, helmet, city, scooter_id)
    interact_db(query, query_type='commit')
    query = 'select * from scooters'
    scooters_list = interact_db(query, query_type='fetch')
    return render_template('maintenance.html', approved=True, scooters=scooters_list)

@maintenance.route('/insert_scooter', methods=['POST'])
def insert_scooter():
    # scooter_id = request.form['scooter_id']
    battery = request.form['battery']
    longitude = request.form['longitude']
    latitude = request.form['latitude']
    firm = request.form['firm_name']
    helmet = request.form['helmet']
    city = request.form['city']
    query = "INSERT INTO scooters(battery_level, longitude, latitude, firm_name, is_with_helmet, city)  \
           VALUES ('%s','%s','%s','%s','%s','%s')" % (battery, longitude, latitude, firm, helmet, city)
    interact_db(query=query, query_type='commit')
    query = 'select * from scooters'
    scooters_list = interact_db(query, query_type='fetch')
    return render_template('maintenance.html', approved=True, scooters=scooters_list)

def interact_db(query, query_type: str):
    return_value = False
    connection = mysql.connector.connect(host='localhost',
                                         user='root',
                                         passwd='root',
                                         database='myflaskappdb')
    cursor = connection.cursor(named_tuple=True)
    cursor.execute(query)

    if query_type == 'commit':
        connection.commit()
        return_value = True

    if query_type == 'fetch':
        query_result = cursor.fetchall()
        return_value = query_result

    connection.close()
    cursor.close()
    return return_value


if __name__ == '__main__':
    maintenance.run(debug=False)