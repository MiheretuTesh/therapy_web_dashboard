/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import LogoIcon from "../../static/svg/logo_white.svg?react";

const WelcomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <LogoIcon />
    </div>
  );
};

export default WelcomePage;
