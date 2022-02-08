import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import Menu from '../Menu/Menu';


export default function Header({user, setUser}) {
  
  return (
    <nav>
      <Link to="/"><img src="/images/wkb1emp_header_logo_167px.png" /></Link>
      &nbsp; | &nbsp;
      Now Playing Component
      &nbsp; | &nbsp;
      <Menu user={user} setUser={setUser}/>
    </nav>
  );
}