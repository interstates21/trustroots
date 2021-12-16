import { PartialUser } from './user';

export type OffersData = {
  features: Feature[];
  type: string;
};

export type Feature = {
  type: string;
  properties: OfferProperties;
  geometry: Geometry;
};

export type Geometry = {
  coordinates: number[];
  type: string;
};

export type OfferProperties = {
  id: string;
  status: string;
  type: string;
  offer: string;
};

// Correct naming?
export type Offer = {
  _id: string;
  type: string;
  status: string;
  user: PartialUser;
  description: string;
  noOfferDescription: string;
  maxGuests: number;
  location: number[];
  updated: string;
  showOnlyInMyCircles: boolean;
};
