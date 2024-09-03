function SocialMediaItem({ url, title, icon }) {
  return (
    <li>
      <a href={url}>
        <img src={icon} alt={`${title} icon`} className="" />
        {title}
      </a>
    </li>
  );
}
export default SocialMediaItem;
