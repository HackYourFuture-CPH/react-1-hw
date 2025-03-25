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
export const Navbar = () => {
  const currentPath = usePathname()

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
          <li className={classNames(styles.navbarLinks, {
            [styles.isLinkActive]: navbarItems[0].link === currentPath,
          })}>
            <Link href={navbarItems[0].link}><b>01</b> {navbarItems[0].title}</Link>
          </li>
          <li className={classNames(styles.navbarLinks, {
            [styles.isLinkActive]: navbarItems[1].link === currentPath,
          })}>
            <Link href={navbarItems[1].link}><b>02</b> {navbarItems[1].title}</Link>
          </li>
          <li className={classNames(styles.navbarLinks, {
            [styles.isLinkActive]: navbarItems[2].link === currentPath,
          })}>
            <Link href={navbarItems[2].link}><b>03</b> NASA COLLABORATION</Link>
          </li>
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
}