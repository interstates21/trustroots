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
  Divider,
  CloseButton,
  IconButton
} from '@chakra-ui/react';
import { FC, useState, useMemo, useEffect } from 'react';
import { Offer } from '../../../types/offer';
import styles from './OfferDrawer.module.scss';
import UserCard from './UserCard';

import { removeHTMLTags } from '../../../utils/formatters';
import { ArrowLeftIcon, ChevronLeftIcon } from '@chakra-ui/icons';

const OfferDrawer: FC<{ onClose: () => void; offer?: Offer | null }> = ({ onClose, offer }) => {
  const [show, setShow] = useState(true);
  const user = offer?.user;

  useEffect(() => {
    setShow(true);
  }, [offer]);

  // const offerDescription = useMemo(() => offer && removeHTMLTags(offer.description), [offer]);
  console.log('user =', user);
  return (
    <>
      <Drawer
        onClose={onClose}
        isOpen={Boolean(offer) && show}
        placement="left"
        isFullHeight={false}
        size="md"
      >
        <DrawerContent className={styles.offerContainer} pb={4}>
          <IconButton
            onClick={() => setShow(false)}
            icon={<ChevronLeftIcon />}
            aria-label="fg"
            right={-20}
            top={5}
            position="absolute"
            boxShadow="outline"
            border="1px solid turquoise"
          />
          {offer && (
            <DrawerBody>
              {/* <Angle position="absolute" right={10} /> */}
              <Box display="flex" alignItems="center" mb={6} mt={5}>
                <Avatar
                  name={user.displayName}
                  src={user.avatarSource}
                  mr={3}
                  width={65}
                  height={65}
                />
                <Box>
                  <Heading fontSize="md">
                    {user.displayName} <span style={{ fontSize: 12 }}>@{user.username} </span>
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {/* {user.birthdate} */}
                    23 years, {user.gender}
                  </Text>
                </Box>
              </Box>
              {/* <Text>{user?.tagline}</Text> */}
              <Text>Hosting: Available 🌳</Text>
              {/* FIXME!!! Ignore dangerous tags like script */}
              <Text dangerouslySetInnerHTML={{ __html: offer.description }}></Text>
              {/*
              TODO!
              <Heading size="md" mt={4}>
                Circles in common
              </Heading> */}
              <Divider mt={3} />
              <Box mt={5} display="flex">
                <Button colorScheme="teal" mr={2}>
                  Message 🌳
                </Button>
                <Button colorScheme="telegram">Telegram</Button>
              </Box>
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OfferDrawer;
