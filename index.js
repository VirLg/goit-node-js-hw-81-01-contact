import { program } from 'commander';
import * as contactsServises from './contacts.js';

const dbContacts = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':
        const allList = await contactsServises.getAllContacts();
        console.table(allList);
        break;
      case 'get':
        const byIdItem = await contactsServises.getContactById(id);
        console.log(byIdItem);
        break;
      case 'del':
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
        console.warn(`Sorry, dont ${action}.`);
    }
  } catch (error) {
    console.warn(error.message);
    throw error;
  }
};

program
  .option('-a --action, <type>')
  .option('-id --id <type>')
  .option('-n --name <type>')
  .option('-e --email <type>')
  .option('-p --phone <type>');
program.parse(process.argv);
const options = program.opts();
dbContacts(options);
