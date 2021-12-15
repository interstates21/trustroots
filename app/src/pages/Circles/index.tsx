import { Box } from '@chakra-ui/react';
import { FC, useCallback, useEffect, useState } from 'react';
import * as api from '../../api/circles/circles.api';
import { Tribe } from '../../api/offers/types';
import Circle from './Circle';
import CirclesHeader from './CirclesHeader';

// TODO:
// join and leave circles api
// leave circle confirmation
// contact us to add circle

const CirclesPage: FC = () => {
  const [circles, setCircles] = useState([]);

  const handleMembershipUpdated = (data) => {
    // update the circles in state

    /**
     * When user's membership in a tribe changes
     * replace the tribe in react state with the new tribe returned by API
     * and update the state with a new array of circles.
     * @TODO extract the mapReplace method to be reusable
     * https://github.com/Trustroots/trustroots/pull/1145#discussion_r368321566
     */
    setCircles((circles) =>
      circles.map((tribe) => (tribe._id === data.tribe._id ? data.tribe : tribe))
    );

    // onMembershipUpdated(data);
  };

  const fetchData = async () => {
    const circles = await api.read();
    setCircles(circles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = useCallback((_circle: Tribe) => {}, []);

  return (
    <Box>
      <CirclesHeader isLoggedIn={true} />
      <Box width="100%" display="flex" flexWrap="wrap">
        {circles.map((circle) => (
          <Circle key={circle._id} circle={circle} onChange={handleChange}></Circle>
        ))}
      </Box>
    </Box>
  );
};

export default CirclesPage;
