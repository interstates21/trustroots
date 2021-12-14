import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import colors from '../../styles/constants';
import useTranslation from '../../temp/useTranslation';
import Logo from './Logo';
import userData from '../../api/users/user.json';

const pages = ['Community', 'Messages', 'Search'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const { t } = useTranslation('core');

  return (
    <div>
      <Box bgColor={colors.primaryGreen} w="100%" p={4} color="white" display="flex">
        <Logo />
        <Menu>
          <MenuButton
            // as={Button}
            color="white"
            // rightIcon={<ChevronDownIcon />}
            variant="ghost"
            className="hidden-xs cursor-pointer"
            id="support-dropdown"
            ml={4}
            mr={4}
          >
            {t('Support')}
          </MenuButton>
          <MenuList color="black">
            <MenuItem href="/faq">{t('Frequently Asked Questions')}</MenuItem>
            <MenuItem href="/support">{t('Contact us')}</MenuItem>
          </MenuList>
        </Menu>
        {pages.map((e) => (
          <>
            <Button colorScheme="white" variant="link" mr={4}>
              {e}
            </Button>
          </>
        ))}

        <Menu>
          <MenuButton
            // as={Button}
            color="white"
            // rightIcon={<ChevronDownIcon />}
            variant="ghost"
            className="hidden-xs cursor-pointer"
            id="support-dropdown"
            ml={4}
            mr={4}
          >
            <Avatar src={userData.avatarSource} name={userData.displayName} size="smgit " />
          </MenuButton>
          <MenuList color="black">
            <MenuItem href="/faq">{t('Frequently Asked Questions')}</MenuItem>
            <MenuItem href="/support">{t('Contact us')}</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};
export default ResponsiveAppBar;
