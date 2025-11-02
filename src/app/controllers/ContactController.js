const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      return response.status(404).json({error: 'User not Found'});
    }

    response.json(contact);

  }

  async create(request, response) {
    const { name, email, phone, category_id } = request.body;

    const contactExist = await ContactsRepository.findByEmail(email);

    if(contactExist) {
      return response.status(400).json({ error: "This email is already been taken" });
    }

    const contact = await ContactsRepository.create({ name, email, phone, category_id });

    response.json(contact);
  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      return response.status(404).json({error: 'User not Found'});
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController;