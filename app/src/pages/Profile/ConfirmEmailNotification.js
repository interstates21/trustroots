import React from 'react';

export default function ConfirmEmailNotification() {
  return (
    <div className="row text-center">
      <em className="lead">
        Note that your profile will not be visible to others until you confirm your email.
      </em>
      <p>
        If you didn&rsquo;t receive the message, check your spam folder or resend it via{' '}
        <a href="/profile/edit/account">email settings</a>.
      </p>
      <hr />
    </div>
  );
}

ConfirmEmailNotification.propTypes = {};
