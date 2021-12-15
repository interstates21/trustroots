import { FC, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import styles from './Circles.module.scss';

import JoinButton from './JoinButton';

import { getCircleBackgroundStyle } from './utils';
import { Tribe } from '../../api/offers/types';
import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

// const Container = styled.div.attrs({
//   className: 'panel circle circle-image'
// })`
//   // the following styles should have high specificity
//   // https://www.styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
//   &&& {
//     position: relative;
//     ${({ circle }) => getCircleBackgroundStyle(circle, '742x496')}
//   }
// `;

interface Props {
  circle: Tribe;
  onChange: (circle: Tribe) => void;
}

const Circle: FC<Props> = ({ circle, onChange }) => {
  const countInfo = circle.count === 0 ? 'No members yet' : `${circle.count} members`;

  const bg = useMemo(() => getCircleBackgroundStyle(circle, '742x496'), [circle]);

  return (
    <LinkBox
      as={'a'}
      width={'31%'}
      height={300}
      href={`/circles/${circle.slug}`}
      m={3}
      _hover={{
        opacity: 0.9
      }}
    >
      <Box
        width={'100%'}
        height={'100%'}
        style={bg}
        backgroundSize="cover"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        flexDirection="column"
        p={3}
        color="white"
        borderRadius={2}
        boxShadow="sm"
      >
        {/* {circle?.new && (
          <span className="circle-new" aria-hidden={true}>
            <span className="label label-primary">{'New circle!'}</span>
          </span>
        )} */}
        <Box mb={3} textShadow="outline">
          <Heading size="md">{circle.label}</Heading>
          <Text>{countInfo}</Text>
        </Box>

        <Box>
          <JoinButton onClick={() => onChange(circle)} />
        </Box>
      </Box>
    </LinkBox>
  );
};

export default Circle;
