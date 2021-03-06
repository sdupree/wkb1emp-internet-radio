import { useState } from "react";
import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import PlaylistHistoryPage from '../PlaylistHistoryPage/PlaylistHistoryPage';
import SongSearchPage from '../SongSearchPage/SongSearchPage';
import NewSongPage from '../NewSongPage/NewSongPage';
import EditSongPage from '../EditSongPage/EditSongPage';
import DetailSongPage from '../DetailSongPage/DetailSongPage';
import Header from '../../components/Header/Header';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [user, setUser] = useState({name: 'jeff'});

  return (
    <main className="App">
      <Header user={user} setUser={setUser}/>
      <>
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist/history" element={<PlaylistHistoryPage />} />
          <Route path="/songs/search" element={<SongSearchPage user={user}/>} />
          <Route path="/songs/new" element={<NewSongPage user={user} />} />
          <Route path="/songs/detail/:id" element={<DetailSongPage user={user} />} />
          <Route path="/songs/edit/:id" element={<EditSongPage user={user} />} />
          <Route path="/authpage" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </main>
  );
}


