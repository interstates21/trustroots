import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react';
import { FC, useState, useMemo } from 'react';
import { Offer } from '../../../api/offers/types';
import styles from './OfferDrawer.module.scss';
import UserCard from './UserCard';

import userData from '../../../api/users/user.json';
import { removeHTMLTags } from '../../../utils/formatters';

const OfferDrawer: FC<{ onClose: () => void; offer?: Offer | null }> = ({ onClose, offer }) => {
  const user = offer?.user;

  const offerDescription = useMemo(() => offer && removeHTMLTags(offer.description), [offer]);
  console.log('user =', user);
  return (
    <>
      <Drawer onClose={onClose} isOpen={Boolean(offer)} placement="left" isFullHeight={false}>
        {offer && (
          <DrawerContent className={styles.offerContainer}>
            <DrawerHeader>
              <Box display="flex" alignItems="center">
                <Avatar
                  name={user.displayName}
                  src={user.avatarSource}
                  mr={3}
                  width={65}
                  height={65}
                />
                <Box>
                  <Text fontSize="md">
                    {user.displayName} <span style={{ fontSize: 12 }}>@{user.username} </span>
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {/* {user.birthdate} */}
                    23 years, {user.gender}
                  </Text>
                </Box>
              </Box>
            </DrawerHeader>
            <DrawerBody>
              <Text>{user.tagline}</Text>
              <Text>Hosting: Available 🌳</Text>
              <Text>{offerDescription}</Text>
              <Heading size="md">Circles in common</Heading>
            </DrawerBody>
          </DrawerContent>
        )}
      </Drawer>
    </>
  );
};

export default OfferDrawer;
