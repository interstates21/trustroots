import axios from 'axios';
import { PartialUser } from '../../types/user';
import searchData from './search-data.json';

export const searchUsers = async (query: any): Promise<PartialUser[]> => {
  // Correct type?
  // return await axios.get(`/api/users?search=${query}`);
  return searchData;
};
