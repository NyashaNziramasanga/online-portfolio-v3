import React from "react";
import { Link } from "react-scroll";
import IHeaderLink from "../types/IHeaderLink";

export default function HeaderLink({ to, name }: IHeaderLink) {
  return (
    <Link
      activeClass="active"
      className="mr-3 hover:text-white nav-link"
      to={to}
      spy
      smooth
      offset={-70}
      duration={500}
    >
      {name}
    </Link>
  );
}
