// import { getAllContacts } from './contact.js';
import * as contactsServises from './contact.js';
// import writeContactFile from './contact.js';
// import getContactById from './contact.js';

const dbContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allList = await contactsServises.getAllContacts();
      console.log(allList);
      break;
    case 'getById':
      const byIdItem = await contactsServises.getContactById(id);
      console.log(byIdItem);
      break;
    case 'remoteById':
      const remoteById = await contactsServises.removeContact(id);
      console.log(remoteById);
      break;
    case 'add':
      const newContact = await contactsServises.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    default:
      console.log(`Sorry, dont ${action}.`);
  }
};

// dbContacts({ action: 'list' });
// dbContacts({ action: 'getById', id: 'qdggE76Jtbfd9eWJHrssH' });
// dbContacts({ action: 'remoteById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
dbContacts({
  action: 'add',
  name: 'al',
  email: 'al@al',
  phone: '333',
});
