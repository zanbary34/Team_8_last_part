from utilities.db.db_manager import DBManager

class Scooter:
    def __init__(self, scooter_id=-1, battery_level=-1, longitude=-1, latitude='-1',firm_name='-1',
                 helmet='0', city='-1'):
        self.scooter_id = int(scooter_id)
        self.battery_level = float(battery_level)
        self.longitude = float(longitude)
        self.latitude = float(latitude)
        self.firm_name = firm_name
        self.helmet = helmet
        self.city = city
        self.db = DBManager()

    def insertScooter(self):
        query = "INSERT INTO scooters(scooter_id,battery_level, longitude, latitude, firm_name, helmet, city)  \
                VALUES ('%s','%s','%s','%s','%s','%s','%s')" \
                %(self.scooter_id, self.battery_level, self.longitude, self.latitude, self.firm_name,
                self.helmet, self.city)
        self.db.commit(query)


    def deleteScooter(self):
        query = "DELETE FROM scooters WHERE scooter_id='%s';" % self.scooter_id
        self.db.commit(query)

    def updateScooter(self):
        query = "UPDATE scooters SET firm_name = '%s', helmet = '%s'WHERE scooter_id='%s';" \
                % (self.firm_name, self.helmet, self.scooter_id)
        self.db.commit(query)

    def distance(self):
        return 555