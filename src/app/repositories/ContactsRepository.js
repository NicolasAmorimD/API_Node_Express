const { uuid } = require('uuidv4');

let contacts = [
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
    return contacts.find((contact) => contact.id === id);
  }
  
  async findByEmail(email) {
    return contacts.find((contact) => contact.email === email);
  }

  async delete(id) {
    return contacts = contacts.filter((contact) => contact.id !== id);
  }

  async create({ name, email, phone, category_id }) {
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
      category_id
    };

    contacts.push(newContact);
    return newContact;
  }
}

module.exports = new ContactsRepository;