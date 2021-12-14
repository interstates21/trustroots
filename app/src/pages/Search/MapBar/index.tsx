import { Tag } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './MapBar.module.scss';
import circlesData from '../../../api/circles/data.json';

interface Props {}

const MapBar: FC<Props> = () => {
  console.log('circlesData =', circlesData);
  return (
    <div className={styles.mapBar}>
      {circlesData.map((circle) => (
        <Tag style={{ width: 'min-content', minWidth: 100, margin: 5 }} key={circle.id}>
          {circle.label}
        </Tag>
      ))}
    </div>
  );
};

export default MapBar;
