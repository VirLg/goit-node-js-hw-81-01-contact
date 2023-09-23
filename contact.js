import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.resolve('db', 'contacts.json');

export const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async contactId => {
  const allContacts = await getAllContacts();
  return allContacts.find(el => el.id === contactId) || null;
};

export const removeContact = async contactId => {
  const allContacts = await getAllContacts();

  let delEl = null;
  const delIdx = allContacts.findIndex(el => el.id === contactId);

  if (delIdx === -1) {
    
    return null
  }
}
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return delEl;
};
