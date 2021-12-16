import { PartialUserWithLocation } from './user';

export type Contact = {
  user: PartialUserWithLocation;
  _id: string;
  confirmed: boolean;
  created: string;
  userFrom: string; // id
  userTo: string; // id
};
