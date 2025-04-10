"use client"
import Image from "next/image"
import styles from "./Footer.module.css";


const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={16}
            height={16}
            className={styles.icon}
          />
        )}
        {title}
      </a>
    </li>
  );
};

export default SocialMediaItem;