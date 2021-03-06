import { useState } from 'react';
import { addNewSong } from '../../utilities/songs-api';

export default function NewSongPage() {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    duration: '0',
    album: '',
    releaseYear: '2022'
  });
  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    evt.preventDefault();  // Prevent browser from submitting form.
    try {
      console.log("New song:", newSong);
      await addNewSong(newSong);
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
            <label>Length (in seconds):</label>
            <input type="number" name="duration" value={newSong.duration} min="0" onChange={handleChange}/>
            <label>Album:</label>
            <input type="text" name="album" value={newSong.album} onChange={handleChange}/>
            <label>Release Year:</label>
            <input type="number" name="releaseYear" value={newSong.releaseYear} min="1900" max="2023" onChange={handleChange}/>
            <button type="submit">ADD SONG</button>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      </div>
    </>
  );
}


