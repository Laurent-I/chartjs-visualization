import React, { useState } from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const logo = "/covid-19-isotype.svg"

  return (
    <div className={styles.toolbar}>
      {/* Logo or Menu Icon */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        <img src={logo} alt="Menu" style={{width:'50px', height:'40px'}} />
      </button>
      {/* Title */}
      <div className={styles.title}>Covid-19 Tracker</div>
      {/* Profile Picture */}
      <button className={styles.profileButton} onClick={toggleMenu}>
        <img src="https://disease.sh/assets/img/flags/rw.png" alt="Profile" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
      </button>
      {/* Dropdown Menu */}
      {menuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem} onClick={toggleMenu}>Profile</div>
          <div className={styles.menuItem} onClick={toggleMenu}>Logout</div>
          <div className={styles.menuItem} onClick={toggleMenu}>Settings</div>
        </div>
      )}
    </div>
  );
};