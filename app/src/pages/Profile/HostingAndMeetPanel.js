// External dependencies
import React from 'react';
import styled from 'styled-components';

// Internal dependencies
import Icon from '../../components/Icon';

const SofaIcon = styled(Icon)`
  margin-right: 15px;
`;

export default function HostingAndMeetPanel() {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">Hosting {'&'} meet</div>
      <div className="panel-body">
        <div className="form-horizontal">
          <p>
            <a role="button" href="/offer/host" className="btn btn-inverse-primary">
              <SofaIcon icon="sofa" />
              Modify your hosting location
            </a>
          </p>
          <p>
            <a role="button" href="/offer/meet" className="btn btn-inverse-primary">
              <Icon icon="users" />
              Modify your meet locations
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

HostingAndMeetPanel.propTypes = {};
