import React from "react";
import logo from "../assets/icons/logo.svg";

export default function Logo() {
  return (
    <a
      className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      href="/"
      aria-label="Nash - Software Developer home"
    >
      <img src={logo} alt="Nash logo" />
      <span className="ml-3 text-xl">NASH | SOFTWARE DEVELOPER</span>
    </a>
  );
}
