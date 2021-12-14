import { Search2Icon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text
} from '@chakra-ui/react';
import colors from '../../styles/constants';
import useTranslation from '../../temp/useTranslation';
import Logo from './Logo';
import userData from '../../api/users/user.json';
import styles from './Header.module.scss';

const pages = [
  {
    label: 'Circles',
    path: '/circles'
  },
  {
    label: 'Messages',
    path: '/messages'
  }
];

const ResponsiveAppBar = () => {
  const { t } = useTranslation('core');

  return (
    <div>
      <Box bgColor={colors.primaryGreen} color="white" className={styles.header}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" alignItems="flex-end" mr="6">
            <Logo /> <span style={{ marginLeft: 3 }}>v2</span>
          </Box>
          <Stack spacing={4}>
            <InputGroup variant="filled" colorScheme="teal">
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Find place" />
            </InputGroup>
          </Stack>
        </Box>
        <nav className={styles.nav}>
          <Menu>
            {/* <MenuButton
              // as={Button}
              color="white"
              variant="ghost"
              id="support-dropdown"
              ml={4}
              mr={4}
            >
              {t('Support')}
            </MenuButton> */}
            <MenuList color="black">
              <MenuItem href="/faq">{t('Frequently Asked Questions')}</MenuItem>
              <MenuItem href="/support">{t('Contact us')}</MenuItem>
            </MenuList>
          </Menu>
          {pages.map((e) => (
            <>
              <Button
                as={'a'}
                href={e.path}
                key={e.label}
                color="white"
                colorScheme="whiteAlpha"
                variant="ghost"
                mr={4}
                className={styles.navLink}
              >
                {e.label}
              </Button>
            </>
          ))}

          <Menu placement="bottom">
            <MenuButton
              mr={4}
              className={styles.navLink}
              _hover={{
                opacity: 0.8
              }}
              _active={{
                opacity: 0.8
              }}
            >
              <Avatar
                src={userData.avatarSource}
                name={userData.displayName}
                backgroundColor="#aaa"
                width={10}
                height={10}
                ml="3"
              />
            </MenuButton>
            <MenuList color="black" mr={4}>
              <Button
                borderRadius={0}
                as="a"
                variant="ghost"
                _hover={{ opacity: 0.6 }}
                _active={{}}
                href={`/profile/${userData._id}`}
              >
                {userData.displayName}
              </Button>
              <Divider />
              <MenuItem href="/support">{t('Hosting')}: Available 🌳</MenuItem>

              <MenuItem alignItems="center" href="/support">
                {t('Support')}
              </MenuItem>
              <MenuItem href="/support">{t('Account')}</MenuItem>
              <Divider />
              <MenuItem href="/support" fontSize="sm" opacity={0.7}>
                {t('Sign out')}
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </Box>
    </div>
  );
};
export default ResponsiveAppBar;
