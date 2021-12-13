// External dependencies
import React from 'react';
import useTranslation from '../temp/useTranslation';

export default function LoadingIndicator() {
  const { t } = useTranslation('core');
  return (
    <div aria-busy="true" aria-live="assertive" className="content-wait" role="alertdialog">
      <small>{t('Wait a moment…')}</small>
    </div>
  );
}
