import React from 'react';
import ResumeLeftTitle from './ResumeLeftTitle';
import Contact from './Contact';
import PaddingContainer from './PaddingContainer';
import linkedinIcon from '../public/img/linkedin-icon.png';
import webIcon from '../public/img/web-icon.png';
import emailIcon from '../public/img/email-icon.png';
import homeIcon from '../public/img/home-icon.png';

const Contacts = ({
  data,
}: {
  data: { address: string; email: string; website: string; linkedin: string };
}) => {
  return (
    <React.Fragment>
      <ResumeLeftTitle>Contact</ResumeLeftTitle>
      <PaddingContainer>
        <Contact data={data.address} icon={homeIcon} />
        <Contact data={data.email} icon={emailIcon} />
        <Contact data={data.website} icon={webIcon} />
        <Contact data={data.linkedin} icon={linkedinIcon} />
      </PaddingContainer>
    </React.Fragment>
  );
};
export default Contacts;
