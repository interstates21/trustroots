import axios, { AxiosResponse } from 'axios';
import { Experience } from '../../types/experience';
import data from './data.json';

/**
 * API request: create an experience
 * @param {object} experience - experience to save
 * @returns {object} - saved experience object, which includes the "response" to it if exists
 */
export const createExperience = async (experience: string): Promise<AxiosResponse> => {
  return {} as any;
};

/**
 * API request: read experiences shared with `userTo`;
 * sorted by `created` field starting from the most recent date
 *
 * @param {string} userTo - id of the user with whom the experiences were shared
 * @returns {array} - array of experience objects, which include the "responses" to them where exist
 */

export const readExperience = async ({ userTo }): Promise<Experience> => {
  //   const { data: experiences } = await axios.get('/api/experiences', {
  //     params: { userTo }
  //   });
  return data;
};

/**
 * API request: read the experience shared
 * - by the logged-in user with `userTo`
 * and
 * - by the `userTo` with the logged-in user
 *
 * @param {string} userWith - id of the user with whom the experience was shared
 * @returns {object} - experience object, where both experiences are returned
 * in an experience object with response. The `response` field is `null` if only
 * one party shared the experience, otherwise the "primary" experience is the one
 * shared by the logged-in user.
 */
export const readMineExperience = async ({ userWith }): Promise<Experience> => {
  //   const params = { userWith };
  //   try {
  //     const { data: experience } = await axios.get('/api/my-experience', {
  //       params
  //     });
  //     return experience;
  //   } catch (err) {
  //     if (err.response?.status === 404) {
  //       return null;
  //     } else {
  //       throw err;
  //     }
  //   }

  return data;
};

/**
 * API request: report a member
 * @TODO this request belongs to a different module
 * @param {object} user - member to report
 * @param {string} message - message to administrators
 * @returns Promise<void>
 */
export const reportUser = async (user, message): Promise<void> => {
  //   await axios.post('/api/support', { message, reportMember: user.username });
};

/**
 * API request: get count of experiences
 *
 * @param {string} userTo - id of the user with whom the experiences were shared
 * @returns {object} - Number of experiences as `{count: Int, hasPending: Bool}`
 */
export const getCount = async (userTo): Promise<{ count: number }> => {
  //   try {
  //     const { data } = await axios.get('/api/experiences/count', {
  //       params: { userTo }
  //     });
  //     return data;
  //   } catch {
  //     return { count: 0 };
  //   }
  return { count: 0 };
};
