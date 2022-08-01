from datetime import timedelta
import mysql.connector
from flask import Flask, redirect, url_for, render_template, request, session, Blueprint
from utilities.classes.Technician import Technician
from utilities.classes.Scooter import Scooter
from utilities.db.db_manager import dbManager

maintenance = Blueprint('maintenance', __name__, static_folder='static', static_url_path='/maintenance',
                        template_folder='templates')


@maintenance.route('/maintenance')
def index():
    return render_template('maintenance.html')


@maintenance.route('/login', methods=['POST'])
def scooters():
    if checkPassword(request.form['username'], request.form['password']):
        approved = True
        tech = Technician(username=request.form['username'], password=request.form['password'])
        session['loggedin'] = True
        session['username'] = request.form['username']
        session['password'] = request.form['password']
        return render_template('maintenance.html', scooters=tech.getScooters(), approved=approved,
                               message=session['username'])
    return render_template('maintenance.html', passwordMessage="Please check your username and password")


def checkPassword(username, password):
    tech = Technician(username, password)
    pas = tech.getTech(username)
    if password == pas:
        return True
    return False


@maintenance.route('/insert_scooter', methods=['POST'])
def insert_scooter():
    scooter_id = request.form['scooter_id']
    battery_level = request.form['battery']
    longitude = request.form['longitude']
    latitude = request.form['latitude']
    firm = request.form['firm_name']
    helmet = request.form['helmet']
    city = request.form['city']
    tech = Technician(username=session['username'], password=session['password'])
    if 0 <= float(battery_level) <= 1 and int(scooter_id) > 0 and float(longitude) > 0 and float(latitude) > 0:
        scooter = Scooter(scooter_id, battery_level, longitude, latitude, firm, helmet, city)
        scooter.insertScooter()
        return render_template('maintenance.html', approved=True, scooters=tech.getScooters(),
                               message=session['username'])
    else:
        return render_template('maintenance.html', approved=True, scooters=tech.getScooters(),
                               message=session['username'], error=True)


@maintenance.route('/delete_scooter', methods=['POST'])
def delete_scooter_func():
    scooter_id = request.form['scooter_id']
    scooter = Scooter(scooter_id)
    scooter.deleteScooter()
    tech = Technician(username=session['username'], password=session['password'])
    return render_template('maintenance.html', approved=True, scooters=tech.getScooters(), message=session['username'])


@maintenance.route('/update_scooter', methods=['POST'])
def update_scooter_func():
    scooter_id = request.form['scooter_id']
    battery_level = request.form['battery']
    longitude = request.form['longitude']
    latitude = request.form['latitude']
    firm = request.form['firm_name']
    helmet = request.form['helmet']
    city = request.form['city']
    scooter = Scooter(scooter_id, battery_level, longitude, latitude, firm, helmet, city)
    scooter.updateScooter()
    tech = Technician(username=session['username'], password=session['password'])
    return render_template('maintenance.html', approved=True, scooters=tech.getScooters(), message=session['username'])


@maintenance.route('/logout_tech', methods=['GET'])
def logout_tech():
    session['loggedin'] = False
    session.clear()
    return redirect('/main')
