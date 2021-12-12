import type { Contact } from './types';
import data from './data.json';

export async function removeContact(_contactId) {}

export async function getContactsCommon(_id: string): Promise<Contact[]> {
  return data;
}
