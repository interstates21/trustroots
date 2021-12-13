// External dependencies
import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';

// Internal dependencies
import NavigationLoggedIn from './NavigationLoggedIn';
import NavigationLoggedOut from './NavigationLoggedOut';

export default function AppHeader({ onSignout, user }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Angular UI-router compatibility
  // Once we use React-Router or similar, this can be removed
  // useEffect(() => {

  // }, []);

  return (
    <Navbar className="hidden-print" id="tr-header" fixedTop>
      <a
        className="btn btn-primary sr-only sr-only-focusable sr-helper"
        href="#tr-main"
      >
        Skip to main content
      </a>
      {user?.username ? (
        <NavigationLoggedIn
          onSignout={onSignout}
          user={user}
          currentPath={currentPath}
        />
      ) : (
        <NavigationLoggedOut currentPath={currentPath} />
      )}
    </Navbar>
  );
}
