from utilities.db.db_manager import DBManager


class Contact:
    def __init__(self, name="Yaakov Bryant", email="bryant@gmail.com", message="Great Company!"):
        self.name = name
        self.email = email
        self.message = message
        self.db = DBManager()

    def insertMessage(self):
        query = "INSERT INTO contact(name,email, message) VALUES ('%s','%s','%s')" \
                % (self.name, self.email, self.message)
        self.db.commit(query)
