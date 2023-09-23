// import { getAllContacts } from './contact.js';
import * as contactsServises from './contact.js';
// import writeContactFile from './contact.js';
// import getContactById from './contact.js';

const dbContacts = async ({ action, id }) => {
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
    default:
      console.log(`Sorry, dont ${action}.`);
  }
};

// dbContacts({ action: 'list' });
// dbContacts({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
dbContacts({ action: 'remoteById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
