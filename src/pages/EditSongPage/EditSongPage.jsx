import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { editSong, getSong } from '../../utilities/songs-api';

export default function EditSongPage() {
  const [song, setSong] = useState({
    _id: '',
    title: '',
    artist: '',
    duration: '0',
    album: '',
    releaseYear: '2022'
  });
  const [error, setError] = useState('');

  const song_id = useParams();
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();  // Prevent browser from submitting form.
    try {
      await editSong(song);
      navigate(`/songs/detail/${song._id}`);
    } catch {
      setError('Edit Song Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setSong({ ...song, [evt.target.name]: evt.target.value });
    setError('');
  }

  useEffect(function() {
    async function getSongDetails() {
      const song = await getSong(song_id);
      if(song) setSong(song);
    }
    getSongDetails();
  }, []);

  return (
    <>
      <h1>
        Edit Song Page
      </h1>
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Song Title:</label>
            <input type="text" name="title" value={song.title} onChange={handleChange}/>
            <label>Artist:</label>
            <input type="text" name="artist" value={song.artist} onChange={handleChange}/>
            <label>Length (in seconds):</label>
            <input type="number" name="duration" value={song.duration} min="0" onChange={handleChange}/>
            <label>Album:</label>
            <input type="text" name="album" value={song.album} onChange={handleChange}/>
            <label>Release Year:</label>
            <input type="number" name="releaseYear" value={song.releaseYear} min="1900" max="2023" onChange={handleChange}/>
            <button type="submit">UPDATE SONG</button>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      </div>
    </>
  );
}


