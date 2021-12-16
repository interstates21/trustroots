import { CircleMember } from './circle';

export type FullUser = {
  _id: string;
  tagline?: string;
  username?: string;
  description?: string;
  gender?: string;
  languages?: string[];
  avatarSource?: string;
  avatarUploaded?: boolean;
  public?: boolean;
  blocked?: any[];
  created: string;
  member?: CircleMember[];
  displayName: string;
  emailHash: string;
  seen?: string;
  birthdate?: string;
  updated: string;
  passwordUpdated?: string;
  locationFrom?: string;
  locationLiving: string;
  extSitesCS?: string; // CouchSurfing username
  extSitesBW?: string; // BeWelcome username
  extSitesWS?: string; // WarmShowers username
  additionalProvidersData: AdditionalProvidersData;
  memberIds: string[];
  usernameUpdateAllowed: boolean;
  isVolunteer: boolean;
  replyRate: string;
  replyTime: string;
};

interface AdditionalProvidersData {
  twitter?: {
    screen_name?: string;
  };
  github?: {
    login?: string;
  };
  facebook?: {
    id?: string;
  };
}

export type PartialUser = {
  _id: string;
  emailHash: string;
  displayName: string;
  username: string;
  avatarUploaded: boolean;
  avatarSource: string;
  gender: string;
  updated: string;
  additionalProvidersData?: AdditionalProvidersData;
};

export type PartialUserWithLocation = {
  _id: string;
  emailHash: string;
  displayName: string;
  username: string;
  avatarUploaded?: boolean;
  avatarSource?: string;
  gender?: string;
  updated: string;
  additionalProvidersData?: AdditionalProvidersData;
  locationFrom?: string;
  locationLiving?: string;
};
