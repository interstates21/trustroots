import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './.module.scss';

interface BasicDataProps {}

const BasicData: FC<BasicDataProps> = ({}) => {
  return <Box className={styles.basicData}></Box>;
};

export default BasicData;
