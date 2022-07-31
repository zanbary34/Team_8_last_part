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