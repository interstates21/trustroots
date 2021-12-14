import { ChevronDownIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react';
import colors from '../../styles/constants';
import useTranslation from '../../temp/useTranslation';
import Logo from './Logo';
import userData from '../../api/users/user.json';

const pages = ['Community', 'Messages'];
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

        <Stack spacing={4}>
          <InputGroup variant="filled" colorScheme="teal">
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Going to" />
          </InputGroup>
        </Stack>

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
            <Avatar src={userData.avatarSource} name={userData.displayName} size="sm" />
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
