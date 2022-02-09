import sendRequest from './send-request';

const BASE_URL = '/api/playlist';

// Get playlist.
export function getPlaylist() {
  return sendRequest(BASE_URL);
}

// Add an entry (song) to the playlist.
export function addEntryToPlaylist(songId) {
  // Send Song ID to add to playlist.
  return sendRequest(`${BASE_URL}/add`, 'POST');
}

