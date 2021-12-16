import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FullUser } from '../../types/user';

interface AboutMeProps {
  profile: FullUser;
}

const AboutMe: FC<AboutMeProps> = ({ profile }) => {
  return (
    <Box>
      <Heading>About me</Heading>
      <Text>{profile?.description}</Text>
      {/* {profile.description && (
          <ReadMorePanel content={profile.description} id="profile-description" />
        )} */}

      {/* If no description, show deep thoughts... */}
      {!profile.description && (
        <blockquote
          aria-label="Member has not written description about themself."
          className="profile-quote"
        ></blockquote>
      )}
    </Box>
  );
};

export default AboutMe;
