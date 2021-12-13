import { FC, useEffect, useState } from 'react';
import omit from 'lodash/omit';
import useTranslation from '../temp/useTranslation';

/**
 * Board Credits component Print out credits for photos used at the page.
 * Usage: `<BoardsCredits {...props}><WrappedComponent /></Tooltip>`
 *
 * @param {object} photos - object containing photo objects accessible by their keys
 */
const BoardCredits: FC<{
  photoCredits: Record<string, any>;
  initialPhotoCredits: Record<string, any>;
}> = ({ photoCredits: initialPhotoCredits }) => {
  const { t } = useTranslation('messages');

  const [photoCredits, setPhotoCredits] = useState(initialPhotoCredits);

  // useEffect(
  //   () =>
  //     $on('photoCreditsUpdated', (scope, photo) => setPhotoCredits({ ...photoCredits, ...photo })),
  //   []
  // );

  // useEffect(
  //   () =>
  //     $on('photoCreditsRemoved', (scope, photo) =>
  //       setPhotoCredits(omit(photoCredits, Object.keys(photo)))
  //     ),
  //   []
  // );

  const credits = Object.keys(photoCredits).map((key) => {
    return { key, ...photoCredits[key] };
  });

  if (credits.length === 0) return null;

  return (
    <small className="font-brand-light">
      <span className="boards-credits">
        {credits.length === 1 && <span>Photo by </span>}
        {credits.length > 1 && <span>Photos by </span>}
        {credits.map((credit, index) => (
          <span key={credit.key}>
            <a href={credit.url} rel="noopener">
              {credit.name}
            </a>
            {credit.license && (
              <span>
                {' '}
                (
                <a
                  href={credit.license_url}
                  title={t('License')}
                  rel="license noopener"
                  aria-label={t('License')}
                >
                  {credit.license}
                </a>
                )
              </span>
            )}
            {index < credits.length - 1 && <span>, </span>}
          </span>
        ))}
      </span>
    </small>
  );
};

export default BoardCredits;
