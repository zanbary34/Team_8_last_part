from utilities.db.db_manager import DBManager


class Parking:
    def _init_(self, id=1, longitude=32.0, latitude=34.0, city='TA', is_free=1):
        self.id = id
        self.longitude = longitude
        self.latitude = latitude
        self.city = city
        self.is_free = is_free
        self.db = DBManager()

    def insertParkings(self):
        query = "INSERT INTO Parkings(parking_id,longitude, latitude,city, is_free )  \
                VALUES ('%s','%s','%s','%s','%s','%s','%s')" \
                % (self.parking_id, self.longitude, self.latitude, self.city,
                   self.is_free)
        self.db.commit(query)

    def getParkings(self):
        query = 'select * from parkings'
        parkings = self.db.fetch(query)
        return parkings

    def getFreeParkingsNumber(self):
        query = "select city,sum(id) from parkings where city = '%s' group by 1 order by 2 desc;" % self.city
        number_of_parkings = self.db.fetch(query)
        return number_of_parkings