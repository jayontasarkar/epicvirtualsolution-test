/**
 * Capitalizes a given string
 * @param str string
 * @returns string
 */
export const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

/**
 * Check if value is an array / object or not
 */
export const isObject = (input: TStringOrObject) => typeof input === 'object';

/**
 * Generate random image with path
 * @returns string
 */
export const generateRandomImgPath = () => {
  const images = Array.from({ length: 7 }, (_, index) => index + 1);
  
  var imageName = images[Math.floor(Math.random() * images.length)];

  return `/phones/${imageName}.jpeg`;
};

