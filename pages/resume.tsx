import React, { useState } from 'react';
import { NextPage } from 'next';
import my from '../public/json/me.json';
import experiences from '../public/json/experience.json';
import Link from 'next/link';
import ExperienceList from '../components/ExperienceList';
import FloatButton from '@/components/FloatButton';
import Text from '@/components/Text';
import ProfilePicture from '@/components/ProfilePicture';
import Contacts from '@/components/Contacts';
import Skills from '@/components/Skills';
import LeftContentToggle from '@/components/LeftContentToggle';
import FlexContainer from '@/components/layout/FlexContainer';
import ResumeLeftContent from '@/components/layout/ResumeLeftContent';
import ResumeRightContainer from '@/components/layout/ResumeRightContainer';
import AlignCenterContainer from '@/components/layout/AlignCenterContainer';
import AlignRightContainer from '@/components/layout/AlignRightContainer';

const Resume: NextPage = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <FlexContainer>
      <Link href="/">
        <FloatButton>Portofolio</FloatButton>
      </Link>
      <ResumeLeftContent show={showToggle}>
        <LeftContentToggle
          onClick={() => setShowToggle(!showToggle)}
          show={showToggle}
        />
        <AlignCenterContainer>
          <ProfilePicture
            imageSrc="/img/profile-pict-2.jpg"
            alt="Fazrin Mutaqin"
          />
        </AlignCenterContainer>
        <AlignCenterContainer className="mt-1">
          <Text size={25}>{my.name}</Text>
          <Text size={14} fontWeight={700}>
            {my.position}
          </Text>
        </AlignCenterContainer>
        <AlignRightContainer>
          <Contacts data={my} />
          <Skills data={my} />
        </AlignRightContainer>
      </ResumeLeftContent>
      <ResumeRightContainer>
        <Text size={18} color={'#002d7c'} fontWeight={700} padding={'10px 0px'}>
          Work Experience
        </Text>
        <ExperienceList exps={experiences} />
      </ResumeRightContainer>
    </FlexContainer>
  );
};

export default Resume;
