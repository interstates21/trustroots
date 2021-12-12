export type VolunteersData = {
  volunteers: Volunteer[];
  alumni: Volunteer[];
};

export type Volunteer = {
  // User?
  _id: string;
  firstName: string;
  username: string;
};
