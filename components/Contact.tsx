import React from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

const ResumeContactItem = styled.div`
  margin-top: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;

const Contact = (props: { data: string; icon: StaticImageData }) => (
  <ResumeContactItem>
    <span>{props.data}</span>
    <Image width={24} height={24} src={props.icon} alt="Contact" />
  </ResumeContactItem>
);

export default Contact;
