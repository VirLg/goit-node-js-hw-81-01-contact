import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
const contactsPath = path.resolve('db', 'contacts.json');

export const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async contactId => {
  const allContacts = await getAllContacts();
  const delIdx = allContacts.findIndex(el => el.id === contactId);
  return delIdx === -1 ? null : allContacts[delIdx];
};

export const removeContact = async contactId => {
  const allContacts = await getAllContacts();
  let delEl = await getContactById(contactId);
  const newArr = allContacts.filter(({ id }) => id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newArr, null, 2));
  return delEl;
};
export const addContact = async ({ name, email, phone }) => {
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const allContacts = await getAllContacts();
  const newArr = [...allContacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newArr, null, 2));
  return newContact;
};
