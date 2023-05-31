import SearchBar from './SearchBar.jsx';
import { Link , useLocation } from 'react-router-dom';
import style from "./Nav.module.css";

export default function Nav (props){
    const location = useLocation();

    if (location.pathname === '/') {
      return null;
    }

    return (
        <ul className={style.nav}>
            <li className={style.home}><Link to = "/home">Home</Link></li>
            <li className={style.about}><Link to = "/about">About</Link></li>
            <li className={style.favorites}><Link to = "/favorites">Favorites</Link></li>
            <li className={style.buscador}><SearchBar onSearch={props.onSearch}/></li>
        </ul>
    )
}