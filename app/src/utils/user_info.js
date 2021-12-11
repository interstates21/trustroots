/**
 * Get label for profile gender options
 */
export function getGender(genderCode) {
  switch (genderCode) {
    case 'female':
      return 'Female';
    case 'male':
      return 'Male';
    case 'non-binary':
      return 'Non-binary';
    case 'other':
      return 'Other gender';
    default:
      return undefined;
  }
}
