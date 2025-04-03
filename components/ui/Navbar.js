"use client"
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

import styles from './Navbar.module.css';

const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];
{/* cretae navItem */}
const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={classNames(styles.navbarLinks, { [styles.isLinkActive]: isActive })}>
      <Link href={link}>
        <b>{navbarItems.findIndex((item) => item.link === link).toString().padStart(2, "0")}</b> {title}
      </Link>
    </li>
  );
};


 {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <img src="/shared/logo.svg" alt="Galactica Logo" /> GALACTICA
        </Link>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item) => (
            <NavItem key={item.link} title={item.title} link={item.link} isActive={currentPath === item.link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;