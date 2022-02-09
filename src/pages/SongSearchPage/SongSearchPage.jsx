import { useState } from 'react';
import { checkToken } from '../../utilities/users-service';

export default function SongSearchPage() {
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // const user = await usersService.login(credentials);
      // setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
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

      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}


