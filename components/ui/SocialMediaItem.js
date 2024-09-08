import React from 'react';

const SocialMediaItem = ({ url, title, icon }) => {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={title} />
                {title}
            </a>
        </li>
    );
};

export default SocialMediaItem;
