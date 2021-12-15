// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// // import { useTranslation } from 'react-i18next';
// import LeaveTribeModal from './LeaveCircleModal';

// import * as api from '../../api/circles/circles.api';
// import Tooltip from '../../components/Tooltip';

// function JoinButtonPresentational({ isMember, isLoading, tribe, isLoggedIn, onToggle }) {
//   //   const { t } = useTranslation('circles');

//   const ariaLabel = isMember ? 'Leave circle' : `Join ${tribe.label}`;
//   const buttonLabel = isMember ? 'Joined' : 'Join';

//   // a button to be shown when user is signed out
//   if (!isLoggedIn) {
//     return (
//       <a
//         href={`/signup?tribe=${tribe.slug}`}
//         type="button"
//         className="btn btn-sm btn-default tribe-join"
//       >
//         <i className="icon-plus" /> {buttonLabel}
//       </a>
//     );
//   }

//   return (
//     <Tooltip
//       tooltip={'Leave circle'}
//       placement="bottom"
//       hidden={!isMember}
//       id={`tribe-${tribe._id}`}
//     >
//       <button
//         type="button"
//         className={`${isMember ? 'btn-active' : ''} btn btn-sm btn-default tribe-join`}
//         disabled={isLoading}
//         aria-label={ariaLabel}
//         onClick={onToggle}
//       >
//         <i className={isMember ? 'icon-ok' : 'icon-plus'} /> {buttonLabel}
//       </button>
//     </Tooltip>
//   );
// }

// JoinButtonPresentational.propTypes = {
//   isMember: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool,
//   isLoggedIn: PropTypes.bool.isRequired,
//   tribe: PropTypes.object.isRequired,
//   onToggle: PropTypes.func
// };

// // @TODO this can (and should) be replaced by other container, when we finish the migration; when we start using redux etc.
// export default function JoinButton({ tribe, user, onUpdated, ...rest }) {
//   // isLeaving controls whether the modal for leaving a tribe is shown
//   const [isLeaving, setIsLeaving] = useState(false);

//   const [isUpdating, setIsUpdating] = useState(false);

//   const isMemberInitial = (user?.memberIds || []).includes(tribe._id);
//   const [isMember, setIsMember] = useState(isMemberInitial);

//   /**
//    * Handle joining or leaving of a tribe
//    * - Join: join tribe immediately (api call)
//    * - Leave: show confirmation modal
//    */
//   async function handleToggleMembership() {
//     if (isUpdating) {
//       return;
//     }

//     if (isMember) {
//       setIsLeaving(true);
//     } else {
//       // updating starts
//       setIsUpdating(true);

//       // join

//       // update the membership locally
//       setIsMember(true);

//       // updating finished
//       setIsUpdating(false);
//       // tell the ancestor components that the membership was updated
//       //   onUpdated(data);
//     }
//   }

//   /**
//    * Leave a tribe (api call)
//    */
//   async function handleLeave() {
//     setIsUpdating(true);
//     const data = await api.leave(tribe._id);
//     setIsUpdating(false);
//     setIsLeaving(false);
//     setIsMember(false);
//     // tell the ancestor components that the membership was updated
//     onUpdated(data);
//   }

//   function handleCancelLeave() {
//     setIsLeaving(false);
//   }

//   return (
//     <>
//       <LeaveTribeModal
//         show={isLeaving}
//         tribe={tribe}
//         onConfirm={handleLeave}
//         onCancel={handleCancelLeave}
//       />
//       <JoinButtonPresentational
//         tribe={tribe}
//         isLoggedIn={!!user}
//         isMember={isMember}
//         isLoading={isUpdating}
//         {...rest}
//         onToggle={handleToggleMembership}
//       />
//     </>
//   );
// }

// JoinButton.propTypes = {
//   tribe: PropTypes.object.isRequired,
//   user: PropTypes.object,
//   onUpdated: PropTypes.func.isRequired
// };

import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './.module.scss';

interface JoinButtonProps {
  onClick: () => void;
}

const JoinButton: FC<JoinButtonProps> = ({ onClick }) => {
  return (
    <Button
      boxShadow="md"
      leftIcon={<AddIcon />}
      colorScheme="teal"
      variant="solid"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      Join
    </Button>
  );
};

export default JoinButton;
