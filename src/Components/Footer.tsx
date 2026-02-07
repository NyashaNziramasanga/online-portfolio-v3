import React from "react";
import Logo from "../UI/Logo";
import Copyright from "../UI/Copyright";
import SocialIcons from "../UI/SocialIcons";
import { SOCIAL_URLS } from "../constants";

export default function Footer() {
  return (
    <footer className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-6 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo />
        <Copyright
          name="nyashanziramasanga"
          twitterName="@NyashaNziboi"
          twitterUrl={SOCIAL_URLS.twitter}
        />
        <SocialIcons
          githubURL={SOCIAL_URLS.github}
          linkedInURL={SOCIAL_URLS.linkedIn}
          twitterURL={SOCIAL_URLS.twitter}
          devURL={SOCIAL_URLS.dev}
        />
      </div>
    </footer>
  );
}
