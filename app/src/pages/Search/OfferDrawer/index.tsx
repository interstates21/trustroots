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

const DRAWER_WIDTH = 500;
const OfferDrawer: FC<{ onClose: () => void; offer?: Offer | null }> = ({ onClose, offer }) => {
  const [show, setShow] = useState(true);
  const user = offer?.user;

  useEffect(() => {
    if (offer) {
      setShow(true);
    }
  }, [offer]);

  const visible = show && !!offer;

  const canBeMaximized = !!offer && !show;

  const minWidth = canBeMaximized ? 3 : 0;

  return (
    <>
      {visible && (
        <IconButton
          onClick={() => setShow(false)}
          icon={<ChevronLeftIcon />}
          aria-label="fg"
          left={DRAWER_WIDTH + 20}
          top={5}
          zIndex={3}
          position="absolute"
          boxShadow="outline"
          border="1px solid turquoise"
        />
      )}
      <Box
        className={styles.offerContainer}
        width={visible ? DRAWER_WIDTH : minWidth}
        boxShadow="md"
        onClick={!visible ? () => setShow(true) : undefined}
        _hover={
          !visible && offer
            ? {
                cursor: 'pointer',
                background: '#eee'
              }
            : undefined
        }
      >
        {visible && (
          // minWidth and maxWidth are for better slide animation experience
          <Box minWidth={DRAWER_WIDTH} maxWidth={DRAWER_WIDTH} p={6} boxSizing="border-box">
            {/* <Angle position="absolute" right={10} /> */}
            <Box display="flex" alignItems="center" mb={4} mt={5}>
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
            <Text mb={4} borderLeft="2px solid lavender" pl={3}>
              {user?.tagline}
            </Text>
            {/* TODO: better design */}
            <Heading size="sm" mb={4}>
              Hosting: Available 🌳
            </Heading>
            {/* FIXME!!! Ignore dangerous tags like script https://www.npmjs.com/package/dompurify */}
            <Text dangerouslySetInnerHTML={{ __html: offer.description }}></Text>
            {/*
              TODO!
              <Heading size="md" mt={4}>
                Circles in common
              </Heading> */}
            <Box mt={6} display="flex">
              <Button colorScheme="teal" mr={2}>
                Message 🌳
              </Button>
              <Button colorScheme="telegram">Telegram</Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default OfferDrawer;
