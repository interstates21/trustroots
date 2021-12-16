import { PartialUserWithLocation } from './user';

export type Experience = {
  _id: string;
  created: string;
  public: boolean;
  userFrom: PartialUserWithLocation;
  userTo: PartialUserWithLocation;
  feedbackPublic: string;
  interactions: Interactions;
  recommend: string;
  response?: any;
};

export type Interactions = {
  guest: boolean;
  host: boolean;
  met: boolean;
};
