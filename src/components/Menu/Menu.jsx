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
      <h2>Hello, {user.name}</h2>
      <Link to="/">Homepage</Link>
      <Link to="/playlist/upcoming">Upcoming Songs</Link>
      <Link to="/playlist/history">Previous Songs</Link>
      <Link to="/songs/search">Search For A Song</Link>
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </BurgerMenu>
    
    </>
  );
}