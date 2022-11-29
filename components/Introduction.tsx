import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import animateText from 'hooks/animateText';

const IntroductionContainer = styled.div`
  margin-top: 1em;
  font-size: 42px;
  font-weight: 700;

  @media (orientation: landscape) {
    margin-top: 0.5em;
  }

  @media screen and (max-width: 420px) {
    font-size: 25px;
  }
`;

const AnimatedText = styled.span`
  color: #72e2ae;
  @media screen and (max-width: 420px) {
    font-size: 25px;
  }
`;

const Introduction = () => {
  const animatedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (animatedEl && animatedEl.current) {
      const typed = animateText(animatedEl.current, {
        strings: ['Fazrin Mutaqin ^1000 <br />Frontend Developer'],
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <IntroductionContainer>
      Hi, I&apos;m <AnimatedText ref={animatedEl}></AnimatedText>
    </IntroductionContainer>
  );
};

export default Introduction;
