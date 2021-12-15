import { FC } from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import Board from '../../components/Board';
import styles from './Circles.module.scss';
import { Box, Heading } from '@chakra-ui/react';

const CirclesHeader: FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn }) => {
  //   const { t } = useTranslation('circles');

  return (
    <Board names="tribes-1" className={styles.circlesHeader}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        color="white"
        flexDirection="column"
      >
        <Heading size="2xl" mb="3">
          Discover <em>circles</em>
        </Heading>
        <Heading size="lg">Find people like you on Trustroots!</Heading>
      </Box>
      {/* <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <br />
            <br />
            <h2>{'Discover circles'}</h2>
            <br />
            <p className="lead">
              {'Joining circles helps you find likeminded Trustroots members.'}
            </p>
            {!isLoggedIn && (
              <div>
                <hr className="hr-white hr-xs" />
                <a href="/signup" className="btn btn-action btn-default">
                  {'Sign up with Trustroots'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </Board>
  );
};

export default CirclesHeader;
