import sendRequest from './send-request';

const BASE_URL = '/api/songs';

// Get all the songs.
export function getAllSongs() {
  return sendRequest(BASE_URL);
}

// Search for songs.
export function searchForSongs(searchString) {
  // Send search criteria.
  return sendRequest(`${BASE_URL}/search`, 'POST', searchString);
}

export function addNewSong(newSong) {
  // Send search criteria.
  return sendRequest(`${BASE_URL}/create`, 'POST', newSong);
}

