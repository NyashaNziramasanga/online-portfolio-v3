import React from 'react';
import Logo from '../UI/Logo';
import Copyright from '../UI/Copyright';
import SocialIcons from '../UI/SocialIcons';

export const Footer = () => {
  return (
    <footer className='text-gray-500 bg-gray-900 body-font'>
      <div className='container px-6 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <Logo />
        <Copyright
          name={'nyashanziramasanga'}
          twitterName={'@NyashaNziboi'}
          twitterUrl={'https://twitter.com/NyashaNziboi'}
        />
        <SocialIcons
          githubURL={'https://github.com/NyashaNziramasanga'}
          linkedInURL={
            'https://www.linkedin.com/in/nyasha-nash-nziramasanga-446380116/'
          }
          twitterURL={'https://twitter.com/NyashaNziboi'}
          facebookURL={'https://www.facebook.com/Nyasha.Nziboi'}
        />
      </div>
    </footer>
  );
};
