import { useState } from 'react'
import styles from '../styles/navMobile.module.css';
import purse from '../assets/img/purse.svg';
import { FiSearch } from "react-icons/fi";
import Toggle from './Toggle';


function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () =>{
    setShowMenu(!showMenu);
  }
  return (
  <>
    <nav className={styles.nav}>
      <div className={`${styles.menu} ${showMenu ? styles.menu_animate : styles.menu}`} onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.nav_logo}>MetaMart</div>
      <img src={purse} alt="purse logo" className={styles.nav_purse} />
    </nav>
    <div className={showMenu ? styles.nav_mobile_content : styles.nav_mobile_remove}>
        <div className={styles.nav_mobile_search_container}>
            <input type="search" placeholder='Search' className={styles.nav_mobile_search} />
            <FiSearch className={styles.nav_mobile_searchIcon}/>
        </div>
        <div>Discover</div>
        <div>Collection</div>
        <div>
            <span>Forum</span>
            <div> 
              <label class={styles.switch}>
                  <input type="checkbox" />
                  <span class={styles.slider}></span>
              </label>
            </div>
        </div>
    </div>
  </>
  );
}

export default NavMobile;