import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import { slide as BurgerMenu } from 'react-burger-menu'
import './Menu.css';

export default function Menu({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <>
    <BurgerMenu right={true}>
      <h2>Hello, {user ? user.name : "guest"}</h2>
      <Link to="/">Homepage</Link>
      <Link to="/playlist/upcoming">Upcoming Songs</Link>
      <Link to="/playlist/history">Previous Songs</Link>
      <Link to="/songs/search">Search For A Song</Link>
      { user ?
        <Link onClick={handleLogOut} to="">Log Out</Link>
        :
        <Link to="/authpage">Log In/Sign Up</Link>
      }
    </BurgerMenu>
    
    </>
  );
}