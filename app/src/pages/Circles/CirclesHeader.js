import React from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import Board from '../../components/Board';

export default function CirclesHeader({ isLoggedIn }) {
  //   const { t } = useTranslation('circles');

  return (
    <Board names="tribes-1" className="tribes-header">
      <div className="container">
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
      </div>
    </Board>
  );
}

CirclesHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
