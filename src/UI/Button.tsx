import React from "react";
import IButton from "../types/IButton";

export default function Button(props: IButton) {
  const blue = "text-white bg-blue-500 hover:bg-blue-600";
  const gray = "text-gray-700 bg-gray-200 hover:bg-gray-300";

  const className = `${
    props.color === "blue" ? blue : gray
  } border-0 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ml-4 inline-flex text-lg items-center`;

  return (
    <a
      href={props.action}
      download={props.download ?? undefined}
      className={className}
      role="button"
    >
      {props.download && (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      )}
      <span>{props.name}</span>
    </a>
  );
}
