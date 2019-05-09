import { Share } from 'react-native';

/**
 * open the native share dialog
 *
 * @param String title
 * @param String message
 * @param String url
 */
export function share(title, message, url) {
  Share.share(
    {
      message,
      title,
      url,
    },
    {
      dialogTitle: url,
      subject: title,
      tintColor: '#ee5930',
    }
  );
}
