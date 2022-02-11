import { useState } from 'react';
import { searchForSongs } from '../../utilities/songs-api';
import SearchResultList from '../../components/SearchResultList/SearchResultList';

export default function SongSearchPage() {
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const songs = await searchForSongs({searchString});
      setSearchResults(songs);
      console.log(songs);
    } catch {
      setError('Log In Failed - Try Again');
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
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Enter Search Text:</label>
            <input type="text" name="search-string" value={searchString} onChange={handleChange}/>
            <button type="submit">SEARCH</button>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      </div>
      <SearchResultList searchResults={searchResults} />
    </>
  );
}


