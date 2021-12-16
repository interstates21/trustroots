import { FC } from 'react';
import styles from './OfferDrawer.module.scss';
import { Avatar } from '@chakra-ui/react';
import { PartialUser } from '../../../types/user';

interface UserCardProps {
  user: PartialUser;
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
