import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Activate from './Activate';
import Avatar from './Avatar';
import BlockMember from './BlockMember';
import BottomNavigationSmall from './BottomNavigationSmall';
import DownloadProfile from './DownloadProfile';
import ConfirmEmailNotification from './ConfirmEmailNotification';
import AvatarNameMobile from './AvatarNameMobile';
import HostingAndMeetPanel from './HostingAndMeetPanel';
import { getUser } from '../../api/users/users.api';

interface Props {}

const Profile = (props: Props) => {
  const [user, setUser] = useState(undefined);

  const fetchData = async () => {
    setUser(await getUser('fake-username'));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-md-6">
      {user && <Avatar user={user} size={512} link={false} />}
      {/* {user && <AboutMe profile={user} isSelf={true} profileMinimumLength={5} />} */}
      {/* {<Activate />} */}
      {/* {user && <AvatarNameMobile profile={user} />}
      {user && <BlockMember username={user.username} />}
      {user && <BottomNavigationSmall username={user.username} />}
      {user && <ConfirmEmailNotification />}
      {user && <HostingAndMeetPanel />}
      {user && <DownloadProfile userId={user._id} username={user.username} />} */}
    </div>
  );
};

export default Profile;
