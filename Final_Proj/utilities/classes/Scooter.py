from utilities.DB.db_manager import DBManager

class Scooter:
    def _init_(self, scooter_id=-1, battery_level=-1, longitude=-1, latitude='-1', helmet = '0', city='-1'):
        self.scooter_id = scooter_id
        self.battery_level = float(battery_level)
        self.longitude = float(longitude)
        self.latitude = float(latitude)
        self.firm_name = firm_name
        self.helmet = boolean(helmet)
        self.city = city
        self.db = DBManager()

    def get_scooter_id(self):
        query = "SELECT * FROM scooters WHERE scooter_id='%s';" % self.scooter_id
        return self.db.fetch(query)

    # def get_business_by_id(self):
    #     query = "SELECT * FROM businesses WHERE id='%s';" % self.id
    #     return self.db.fetch(query)
    #
    # def get_future_business(self):
    #     query = "SELECT * FROM businesses WHERE city='%s';" % self.city
    #     return self.db.fetch(query)
    #
    # def get_all_businesses(self):
    #     query = "SELECT * FROM businesses"
    #     return self.db.fetch(query)
    #
    # def update_business_stars(self, stars):
    #     query = "UPDATE businesses SET stars='%s' WHERE id='%s'" % (stars, self.id)
    #     return self.db.commit(query)
    #
    # def month_businesses(self):
    #     query = "SELECT * FROM businesses order by stars desc limit 3"
    #     return self.db.fetch(query)