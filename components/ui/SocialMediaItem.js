import Image from "next/image";

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url}>
        <Image src={icon} alt={title} width={20} height={20} /> {title}
      </a>
    </li>
  );
};

export default SocialMediaItem;