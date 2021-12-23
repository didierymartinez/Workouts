
import classes from './Header.module.css';
import {useSelector} from 'react-redux'
import store, {loggout} from '../store/index'

const Header = () => {

  const isLogged = useSelector(store => store.auth.isLogged)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        { isLogged &&
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => store.dispatch(loggout())}>Logout</button>
          </li>
        </ul>
        }   
      </nav>
    </header>
  );
};

export default Header;
