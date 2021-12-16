import { Avatar, Box } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './Profile.module.scss';

interface BasicDataProps {}

const BasicData: FC<BasicDataProps> = () => {
  return (
    <Box className={styles.basicData} backgroundColor="green.400">
      <Avatar></Avatar>
    </Box>
  );
};

export default BasicData;
