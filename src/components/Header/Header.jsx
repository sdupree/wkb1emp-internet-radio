import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import Menu from '../Menu/Menu';
import './Header.css';

export default function Header({user, setUser}) {

  return (
    <header>
      <Link to="/"><img src="/images/wkb1emp_header_logo_167px.png" alt="Logo"/></Link>
      &nbsp; | &nbsp;
      Now Playing Component
      &nbsp; | &nbsp;
      <Menu user={user} setUser={setUser}/>
    </header>
  );
}