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
      <Link to="/">Homepage</Link>
      <Link to="/playlist/upcoming">Upcoming Songs</Link>
      <Link to="/playlist/upcoming">Previous Songs</Link>
      <Link to="/playlist/upcoming">Search For A Song</Link>
    </BurgerMenu>

    Hello, {user.name} - <Link onClick={handleLogOut} to="">Log Out</Link>
    </>
  );
}