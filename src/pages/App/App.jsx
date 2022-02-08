import { useState } from "react";
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Header from '../../components/Header/Header';
import './App.css';

export default function App() {
  // const [user, setUser] = useState(getUser());
  const [user, setUser] = useState({name: 'jeff'});

  return (
    <main className="App">
      <Header user={user} setUser={setUser}/>
      <>
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
    </main>
  );
}


