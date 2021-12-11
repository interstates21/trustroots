import React from 'react';
// import { useTranslation } from 'react-i18next';

export default function CirclesJoinTrustroots() {
//   const { t } = useTranslation('circles');

  return (
    <div className="row">
      <div className="col-xs-12 text-center">
        <hr />
        <p className="lead">
          {'Join Trustroots to find members behind circles.'}
        </p>
        <br />
        <br />
        <a href="/signup" className="btn btn-action btn-primary">
          {'Sign up with Trustroots'}
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

CirclesJoinTrustroots.propTypes = {};
