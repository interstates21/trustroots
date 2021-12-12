import axios from 'axios';
import type { SearchUserResult } from './types';
import searchData from './search-data.json';

export const searchUsers = async (query: any): Promise<SearchUserResult[]> => {
  // FIXTYPE
  // return await axios.get(`/api/users?search=${query}`);
  return searchData;
};
