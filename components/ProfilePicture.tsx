import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

interface ProfilePictureProp {
  imageSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  backgroundAnimation?: boolean;
}

const PlainContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  --border-width: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }: { size: number }) => size}px;
  height: ${({ size }: { size: number }) => size}px;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  background: #222;

  img {
    border-radius: 50%;
    z-index: 2;
  }
`;

const animatedBackground = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

const AnimatedContainer = styled(PlainContainer)`
  border-radius: 50%;
  overflow: hidden;
  --border-width: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }: { size: number }) => size + 10}px;
  height: ${({ size }: { size: number }) => size + 10}px;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  background: #222;

  img {
    border-radius: 50%;
    z-index: 2;
  }

  &::after {
    --border-width: 3px;
    position: absolute;
    content: '';
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: 1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 50%;
    animation: ${animatedBackground} 4s alternate infinite;
  }

  @media (orientation: landscape) {
    margin-top: 70px;
  }
`;

const ProfilePicture = ({
  imageSrc,
  alt,
  width = 150,
  height = 150,
  backgroundAnimation,
}: ProfilePictureProp) => {
  return backgroundAnimation ? (
    <AnimatedContainer size={width}>
      <Image src={imageSrc} alt={alt} width={width} height={height} />
    </AnimatedContainer>
  ) : (
    <PlainContainer size={width}>
      <Image src={imageSrc} alt={alt} width={width} height={height} />
    </PlainContainer>
  );
};

export default ProfilePicture;
