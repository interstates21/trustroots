// External dependencies
import React, { FC } from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  background: #d9534f;
  border-radius: 50%;
  height: 7px;
  position: absolute;
  right: 9px;
  top: 6px;
  width: 7px;
`;

const Badge: FC<{ children: React.ReactNode; withNotification?: boolean }> = ({
  children,
  withNotification
}) => {
  return (
    <span className="badge">
      {children}
      {withNotification && <Dot />}
    </span>
  );
};

export default Badge;
