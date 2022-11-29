import React from 'react';
import Layout from './layout';
import styled from 'styled-components';
import ProfilePicture from '@/components/ProfilePicture';
import Introduction from '@/components/Introduction';
import AboutMe from '@/components/AboutMe';
import SocialMedia from '@/components/SocialMedia';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Index = () => {
  return (
    <Layout>
      <ContentContainer>
        <ProfilePicture
          imageSrc="/img/profile-pict-2.jpg"
          alt="Fazrin Mutaqin"
          backgroundAnimation={true}
        />
        <Introduction />
        <AboutMe />
        <SocialMedia />
      </ContentContainer>
    </Layout>
  );
};

export default Index;
