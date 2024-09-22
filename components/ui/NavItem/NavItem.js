import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import styles from './NavItem.module.css'

// NavItem component accepts title, link, isActive, and index as props


const NavItem = ({ title, link, isActive, index }) => (
  <li
    className={classNames(styles.navbarLinks, {
      [styles.isLinkActive]: isActive, // Apply active class if isActive is true
    })}
  >
    <Link href={link}>
      <b>{`0${index + 1}`}</b> {title} {/* Display the index and title */}
    </Link>
  </li>
);

export default NavItem;
