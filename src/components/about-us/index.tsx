import React from "react";
import LogoImage from "../../assets/img/examples/logo.png";

export const About: React.FC = () => {
    return (
        <section className="section-about">
            <h2 className="about-header">About Us</h2>
        <div className="about">
            <aside>
                <img className="about__logo" src={LogoImage} alt="SpacePup Logo" />
            </aside>
            <div className="about__info">
                <p className="about__text">SpacePup was founded in March 2021 by several community members as a cryptocurrency by the people for the people.
A project that aims to be driven entirely by the members of our community, with endless opportunities for collaborations and partnerships. <br/><br/>
Our main goal is saving puppies in need, and achieving active community participation and communication for the creation of NFTs, Merchandise and whatever we can all imagine.
<br/><br/>We're not just a cryptocurrency, we're the <strong>community cryptocurrency</strong> everyone's been waiting for.</p>
            </div>
        </div>
        </section>
    )
}

export default About;