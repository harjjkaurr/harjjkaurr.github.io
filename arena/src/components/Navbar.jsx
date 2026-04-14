import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { to: '/home', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/teams', label: 'Teams' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/cohorts', label: 'Cohorts' },
  { to: '/profile', label: 'Profile' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>A</div>
        <span className={styles.logoText}>The Arena</span>
      </div>
      <div className={styles.tabs}>
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.tabActive : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className={styles.right}>
        <span className={styles.notif}>3 new</span>
        <div className={styles.avatar}>YK</div>
      </div>
    </nav>
  );
}
