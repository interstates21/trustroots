import { Button, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { FC, useState } from 'react';
import styles from './MapBar.module.scss';
import circlesData from '../../../api/circles/data.json';

interface Props {}

const FILTERS = ['Recently Active', 'Cyclists', 'Hackers'];

const Filter: FC<{ label: string }> = ({ label }) => {
  const [active, setActive] = useState(false);
  return (
    <Button
      borderRadius="full"
      colorScheme="blackAlpha"
      className={styles.filterButton}
      size="sm"
      onClick={() => setActive((p) => !p)}
      isActive={active}
    >
      {label}
    </Button>
  );
};

const MapBar: FC<Props> = () => {
  // const [filters, setFilters] = useState([]);

  console.log('circlesData =', circlesData);
  return (
    <div className={styles.mapBar}>
      {FILTERS.map((filter) => (
        <Filter label={filter} key={filter} />
      ))}
    </div>
  );
};

export default MapBar;
