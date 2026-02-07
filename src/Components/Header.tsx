import React from "react";
import Logo from "../UI/Logo";
import HeaderLink from "../UI/HeaderLink";

export default function Header() {
  return (
    <header className="text-gray-500 bg-gray-900 body-font" role="banner">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          aria-label="Main"
        >
          <HeaderLink to="ABOUT" name="About" />
          <HeaderLink to="EXPERIENCE" name="Experience" />
          <HeaderLink to="PORTFOLIO" name="Portfolio" />
          <HeaderLink to="EDUCATION" name="Education" />
        </nav>
      </div>
    </header>
  );
}
