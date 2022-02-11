import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css';

export default function Header({user, setUser}) {

  return (
    <header>
      <Link to="/"><img src="/images/wkb1emp_header_logo-transparent-161px.png" alt="Logo"/></Link>
      &nbsp; | &nbsp;
      Now Playing Component
      &nbsp; | &nbsp;
      <NavMenu user={user} setUser={setUser}/>
    </header>
  );
}