export type Contact = {
  user: User;
  _id: string;
  confirmed: boolean;
  created: string;
  userFrom: string;
  userTo: string;
};

export type User = {
  additionalProvidersData: AdditionalProvidersData;
  _id: string;
  updated: string;
  displayName: string;
  username: string;
  avatarSource: string;
  avatarUploaded: boolean;
  locationFrom?: string;
  locationLiving?: string;
  emailHash: string;
};

export type AdditionalProvidersData = {
  facebook: Facebook;
};

// FIXTYPE
export type Facebook = {
  id?: string;
};
