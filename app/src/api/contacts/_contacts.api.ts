import axios from 'axios';

export async function remove(contactId) {
  await axios.delete(`/api/contact/${contactId}`);
}

export async function getContactsCommon(id) {
  const { data } = await axios.get(`/api/contacts/${id}/common`);
  return data;
}
