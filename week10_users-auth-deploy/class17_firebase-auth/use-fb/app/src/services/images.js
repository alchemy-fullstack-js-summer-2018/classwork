const USER_NAME = 'alchemy-code-lab';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};