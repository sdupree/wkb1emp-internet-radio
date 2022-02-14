import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSong } from '../../utilities/songs-api';
import SongDetail from '../../components/SongDetail/SongDetail';

export default function DetailSongPage({user}) {
  const [song, setSong] = useState(null);
  const [error, setError] = useState('');
  const song_id = useParams();

  useEffect(function() {
    async function getSongDetails() {
      const song = await getSong(song_id);
      if(song) setSong(song);
    }
    getSongDetails();
  }, []);

  async function handleEditSubmit(evt) {
    evt.preventDefault();
    navigate(`/songs/edit/${song_id}`);
  }

  async function handleDeleteSubmit(evt) {
    evt.preventDefault();
    try {
      const result = await deleteSongs(song_id);
      navigate('/');
    } catch {
      setError('Delete Failed - Try Again?');
    }
  }

  return (
    <>
      <SongDetail song={song} user={user} />
      {song ?
        <>
          <form onSubmit={handleEditSubmit}><button type="submit">EDIT SONG</button></form>
          <form onSubmit={handleDeleteSubmit}><button type="submit">DELETE SONG</button></form>
          <p className="error-message">{error}</p>
        </>
      :
        <></>
      }
    </>
  );
}