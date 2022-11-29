import React, { useRef } from 'react';
import mySkills from '../public/json/skills.json';
import Layout from './layout';
import Script from 'next/script';
import styled from 'styled-components';
import useTagCloud from 'hooks/useTagCloud';
import Title from '@/components/Title';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 180px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    margin-top: 60px;
  }
`;

const SkillSection = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TagCloud = styled.div`
  overflow: hidden;
  & > div {
    margin: auto;
  }
`;

const Skill = () => {
  const { skills } = mySkills;
  const texts = skills.map((s) => s.title);
  const rightContent = useRef<HTMLDivElement>(null);

  useTagCloud(texts, rightContent);

  return (
    <Layout>
      <Script src="/js/TagCloud.min.js"></Script>
      <SkillContainer>
        <SkillSection>
          <Title>
            My Skill <br /> & Experience
          </Title>
          <p>
            I Start my journey as a PHP developer, my first project was to build
            an assets management application using PHP, MySQL, JQuery and
            Oracle.
          </p>
          <p>
            My first Frontend project was to build a static Company Profile
            website, at that time there&apos;s no Frontend framework/library
            like Vue, Angular or React so i build it with just HTML, CSS &
            JQuery.
          </p>
          <p>
            I create a lot of web applications, building modular and component
            based application for reusable and manageble code. I also create
            multiple responsive web app that looks good in both mobile and
            desktop device, implementing lazy load for faster initial load.
          </p>
        </SkillSection>
        <SkillSection ref={rightContent}>
          <TagCloud className="tagCloud"></TagCloud>
        </SkillSection>
      </SkillContainer>
    </Layout>
  );
};

export default Skill;
