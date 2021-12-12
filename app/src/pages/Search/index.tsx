import { FC } from 'react';
import Map from './Map';

const Search: FC = () => {
  return (
    <>
      <Map
        onOfferClose={() => {}}
        onOfferOpen={() => {}}
        filters={''}
        isUserPublic={true}
        location={undefined}
        locationBounds={undefined}
      />
    </>
  );
};

export default Search;
