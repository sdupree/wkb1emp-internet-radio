import { useState } from 'react';
import { searchForSongs } from '../../utilities/songs-api';

export default function NewSongPage() {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    length: '',
    album: '',
    releaseYear: ''
  });
  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const songs = await searchForSongs(newSong);
      console.log(songs);
    } catch {
      setError('Add Song Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setNewSong({ ...newSong, [evt.target.name]: evt.target.value });
    setError('');
  }

  return (
    <>
      <h1>
        Add New Song Page
      </h1>
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Song Title:</label>
            <input type="text" name="title" value={newSong.title} onChange={handleChange}/>
            <label>Artist:</label>
            <input type="text" name="artist" value={newSong.artist} onChange={handleChange}/>
            <label>Length:</label>
            <input type="text" name="length" value={newSong.length} onChange={handleChange}/>
            <label>Album:</label>
            <input type="text" name="album" value={newSong.album} onChange={handleChange}/>
            <label>Release Year:</label>
            <input type="text" name="releaseYear" value={newSong.releaseYear} onChange={handleChange}/>
            <button type="submit">ADD SONG</button>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      </div>
    </>
  );
}


