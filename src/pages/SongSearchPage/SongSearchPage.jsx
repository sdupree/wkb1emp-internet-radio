import { useState } from 'react';
import { searchForSongs } from '../../utilities/songs-api';
import SongTable from '../../components/SongTable/SongTable';
import './SongSearchPage.css';

export default function SongSearchPage({user}) {
  const [searchString, setSearchString] = useState('');
  const [songSearchResults, setSongSearchResults] = useState([]);
  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const songs = await searchForSongs({searchString});
      setSongSearchResults(songs);
      console.log(songs);
    } catch {
      setError('Search Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setSearchString(evt.target.value);
    setError('');
  }

  return (
    <>
      <h1>
        Song Search Page
      </h1>
      <div className='SongSearchPageContent'>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Enter Search Text:</label>
            <input type="text" name="search-string" value={searchString} onChange={handleChange}/>
            <button type="submit">SEARCH</button>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </div>
        <SongTable songs={songSearchResults} user={user} />
      </div>
    </>
  );
}


