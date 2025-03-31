import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';
import { Icons } from './Icons';


export default function SocialMediaItem({url, title, iconName}) {
    const IconComponent = Icons[iconName]
    return (
        <li>
            <Link href={url}>
                    {IconComponent ? <IconComponent /> : null} 
                    {title}
            </Link>
        </li>
    )
}
