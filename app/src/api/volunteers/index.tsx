import axios from 'axios';
import data from './data.json';
import { VolunteersData } from './types';

export const getVolunteers = async (): Promise<VolunteersData> => {
  return data;
};
