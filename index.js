import { program } from 'commander';
import * as contactsServises from './contact.js';

const dbContacts = async ({ action, id, name, email, phone }) => {
  try {
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
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// dbContacts({ action: 'list' });
// dbContacts({ action: 'getById', id: 'qdggE76Jtbfd9eWJHrssH' });
// dbContacts({ action: 'remoteById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
// dbContacts({
//   action: 'add',
//   name: 'al',
//   email: 'al@al',
//   phone: '333',
// });
program
  .option('-a --action, <type>')
  .option('-id --id <type>')
  .option('-n --name <type>')
  .option('-e --email <type>')
  .option('-p --phone <type>');
program.parse(process.argv);
const options = program.opts();
dbContacts(options);

// console.log(process.argv);
// const arg = process.argv;
// console.log('arg', arg);
