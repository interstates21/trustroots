import { Box, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Offer } from '../../api/offers/types';
import Map from './Map';
import OfferDrawer from './OfferDrawer';

const Search: FC = () => {
  const [offer, setOffer] = useState(null);

  const handleOfferOpen = (offer: Offer) => {
    setOffer(offer);
  };
  const handleOfferClose = () => {
    setOffer(null);
  };

  return (
    <>
      <OfferDrawer offer={offer} onClose={handleOfferClose} />
      <Map
        onOfferClose={handleOfferClose}
        onOfferOpen={handleOfferOpen}
        filters={''}
        isUserPublic={true}
        location={undefined}
        locationBounds={undefined}
      />
    </>
  );
};

export default Search;
