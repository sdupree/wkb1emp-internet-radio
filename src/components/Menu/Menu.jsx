import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";

export default function Menu({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <nav>
      <Link to="/">Homepage</Link>
      &nbsp; | &nbsp;
      <Link to="/playlist/upcoming">Upcoming Songs</Link>
      &nbsp; | &nbsp;
      <Link to="/playlist/upcoming">Previous Songs</Link>
      &nbsp; | &nbsp;
      <Link to="/playlist/upcoming">Search For A Song</Link>
      &nbsp; | &nbsp;
      Hello, {user.name} - <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}