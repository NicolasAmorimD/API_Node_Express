const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Nicolas',
    email: 'nicolas@gmail.com',
    phone: '1234124124',
    category: uuid()
  },
  {
    id: uuid(),
    name: 'User2',
    email: 'user@gmail.com',
    phone: '1444423444',
    category: uuid()
  }
];

class ContactsRepository {
  async findAll() {
    return contacts;
  }

  async findById(id) {
    return contacts.find((contact) => contact.id == id);
  }
}

module.exports = new ContactsRepository;