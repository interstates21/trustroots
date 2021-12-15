import { FC, useEffect, useState } from 'react';
import * as api from '../../api/circles/circles.api';
import CirclesHeader from './CirclesHeader';

const CirclesPage: FC = () => {
  const [tribes, setTribes] = useState([]);

  const handleMembershipUpdated = (data) => {
    // update the tribes in state

    /**
     * When user's membership in a tribe changes
     * replace the tribe in react state with the new tribe returned by API
     * and update the state with a new array of tribes.
     * @TODO extract the mapReplace method to be reusable
     * https://github.com/Trustroots/trustroots/pull/1145#discussion_r368321566
     */
    setTribes((tribes) =>
      tribes.map((tribe) => (tribe._id === data.tribe._id ? data.tribe : tribe))
    );

    // onMembershipUpdated(data);
  };

  const fetchData = async () => {
    const tribes = await api.read();
    setTribes(tribes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CirclesHeader isLoggedIn={true} />
    </div>
  );
};

export default CirclesPage;
