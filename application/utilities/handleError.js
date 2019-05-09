import _ from 'lodash';
import navigationService from '@utilities/navigationService';

/**
 * 1. if there is no status --> Network Error
 * 2. stuats == 401 -> Token Expired
 *
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
export default error => {
  let errors;

  switch (true) {
    case _.has(error, 'response.status') === false:
      errors = {
        message: 'Network Error. Please check your internet.',
      };

      break;
    default:
      errors = _.get(error, 'response.data.message', {
        message: 'Something went wrong',
      });
  }

  return errors;
};
