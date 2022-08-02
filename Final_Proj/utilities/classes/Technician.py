import json

from flask import jsonify

from utilities.db.db_manager import DBManager

class Technician:
    def __init__(self, username="avi", password="avi"):
        self.username = username
        self.password = password
        self.db = DBManager()

    def getScooters(self):
        query = 'select * from scooters'
        scooters = self.db.fetch(query)
        return scooters

    def getTech(self, username):
        query = 'select * from technicians'
        techs = self.db.fetch(query)
        for tech in techs:
            if username == tech.username:
                return tech.password
        return ""

    def getParkingVsScooters(self):
        query = 'select s.scooter_id, s.longitude, s.latitude, s.firm_name, s.city, max(p.longitude) as pLat \
                ,max(p.latitude) as pLon \
                from scooters as s join parkings as p on s.city = p.city \
                where s.battery_level > 0 \
                group by s.scooter_id \
                order by s.scooter_id'
        scooters = self.db.fetch(query)
        return json.dumps(scooters)

    def get_parking(self,city):
        query = "select longitude, latitude from team8.parkings where city='%s';" % city
        parking = self.db.fetch(query)
        return parking

    def get_scooters_city(self,city):
        query = "select longitude, latitude,firm_name from team8.scooters where city='%s';" % city
        scooters = self.db.fetch(query)
        return scooters