import React from "react";
import LogoImage from "../../assets/img/examples/logo.png";

export const Logo: React.FC = () => {
	return <a href="/"><img className="spup-logo" src={LogoImage} alt="react" height="60" /></a>;
};
