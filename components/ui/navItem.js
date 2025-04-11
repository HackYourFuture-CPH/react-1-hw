import Link from "next/link";
import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive }) => {
  function activeLink(){
    return isActive ? styles.isLinkActive : ""
  }
  return (
    <li
      className={`${styles.navbarLinks} ${activeLink()}`}
    >
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavItem;