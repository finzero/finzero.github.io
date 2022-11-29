import React from 'react';
import mySkills from '../public/json/skills.json';
import styled from 'styled-components';
import Image from 'next/image';

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 3em;

  img {
    cursor: pointer;
  }
`;

const SocialMedia = () => {
  const { socialMedia } = mySkills;

  return (
    <SocialMediaContainer>
      {socialMedia.map((socMedia: any, socMediaIdx: number) => (
        <a
          href={socMedia.link}
          key={socMediaIdx}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={socMedia.src}
            alt={socMedia.title}
            width={40}
            height={40}
          />
        </a>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMedia;
