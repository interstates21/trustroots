import { FC } from 'react';
import styles from './OfferDrawer.module.scss';
import { User } from '../../../api/experiences/types';
import { Avatar } from '@chakra-ui/react';

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  console.log('user =', user);
  return (
    <div className={styles.userCard}>
      <Avatar name={user.displayName} src={user.avatarSource} />
    </div>
  );
};

export default UserCard;
