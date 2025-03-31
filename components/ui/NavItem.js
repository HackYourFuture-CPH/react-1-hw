import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';


export default function NavItem({title, link, isActive}) {
    return (
        <li className={classNames(styles.navbarLinks, {
            [styles.isLinkActive]: isActive,
          })}>
            <Link href={link}><b>01</b> {title}</Link>
        </li>
    )
}

