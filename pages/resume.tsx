import React, { useState } from 'react';
import { NextPage } from 'next';
import my from '../public/json/me.json';
import experiences from '../public/json/experience.json';
import Link from 'next/link';
import { ExperienceList } from '../components/ExperienceList';
import FloatButton from '@/components/FloatButton';
import styled from 'styled-components';
import FontSize from '@/components/FontSize';
import ProfilePicture from '@/components/ProfilePicture';
import Contacts from '@/components/Contacts';
import Skills from '@/components/Skills';

const ResumeContainer = styled.div`
  display: flex;
`;

const ResumeLeftContent = styled.div`
  width: 300px;
  justify-content: flex-start;
  background: #203d78;
  color: #fff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 425px) {
    width: ${({ show }: { show: boolean }) => (show ? 300 : 50)}px;
    position: fixed;
    max-height: 100vh;
    overflow: ${({ show }: { show: boolean }) => (show ? 'auto' : 'hidden')};
    * {
      visibility: ${({ show }: { show: boolean }) =>
        show ? 'visible' : 'hidden'};
    }
  }
`;

const LeftContentToggleStyle = styled.div`
  text-align: right;
  padding-right: 15px;
  font-size: 30px;
  background: #000000;
  visibility: hidden;
  &:after {
    content: '${({ show }: { show: boolean }) =>
      show ? '\\00AB' : '\\00BB'} ';
  }
  @media (max-width: 425px) {
    visibility: visible;
    cursor: pointer;
  }
`;

const RightContentTitle = styled.div`
  color: #002d7c;
  font-weight: 800;
  font-size: 18px;
  padding: 10px 5px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
`;

const LeftContentToggle = ({
  onClick,
  show,
}: {
  onClick: React.MouseEventHandler;
  show: boolean;
}) => {
  return (
    <LeftContentToggleStyle
      onClick={onClick}
      show={show}
    ></LeftContentToggleStyle>
  );
};

const CenteredContainer = styled.div`
  text-align: center;
  margin: 10px auto;
`;

const RightContainer = styled.div`
  text-align: right;
`;

const ResumeRightContainer = styled.div`
  width: 100%;
  padding-left: 10px;
  @media (max-width: 425px) {
    padding-left: 60px;
  }
`;

const Resume: NextPage = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <ResumeContainer>
      <Link href="/">
        <FloatButton>Portofolio</FloatButton>
      </Link>
      <ResumeLeftContent show={showToggle}>
        <LeftContentToggle
          onClick={() => setShowToggle(!showToggle)}
          show={showToggle}
        />
        <CenteredContainer>
          <ProfilePicture
            imageSrc="/img/profile-pict-2.jpg"
            alt="Fazrin Mutaqin"
          />
        </CenteredContainer>
        <CenteredContainer className="mt-1">
          <FontSize size={25}>
            <strong> {my.name}</strong>
          </FontSize>
          <FontSize size={14}>{my.position}</FontSize>
        </CenteredContainer>
        <RightContainer>
          <Contacts data={my} />
          <Skills data={my} />
        </RightContainer>
      </ResumeLeftContent>
      <ResumeRightContainer>
        <RightContentTitle>Work Experience</RightContentTitle>
        <ExperienceList exps={experiences} />
      </ResumeRightContainer>
    </ResumeContainer>
  );
};

export default Resume;
