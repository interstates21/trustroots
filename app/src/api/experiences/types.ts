export type Experience = {
  _id: string;
  created: string;
  public: boolean;
  userFrom: User;
  userTo: User;
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

export type User = {
  _id: string;
  emailHash: string;
  displayName: string;
  username: string;
  avatarUploaded: boolean;
  avatarSource: string;
  created: string;
  gender: string;
  updated: string;
  additionalProvidersData?: any; // FIXTYPE
};
