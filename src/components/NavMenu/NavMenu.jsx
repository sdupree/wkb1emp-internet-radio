import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import { slide as Menu } from 'react-burger-menu'
import './NavMenu.css';

export default function NavMenu({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <>
    <Menu right={true}>
      <h2>Hello, {user ? user.name : "guest"}</h2>
      <Link to="/">Homepage</Link>
      <Link to="/playlist/upcoming">Upcoming Songs</Link>
      <Link to="/playlist/history">Previous Songs</Link>
      <Link to="/songs/search">Search For A Song</Link>
      { user ?
        <>
          <Link to="/songs/new">Add A New Song</Link>
          <Link onClick={handleLogOut} to="">Log Out</Link>
        </>
        :
        <Link to="/authpage">Log In/Sign Up</Link>
      }
    </Menu>
    
    </>
  );
}