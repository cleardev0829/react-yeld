import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components

// core components
import ScrollTransparentNavbar from "components/navbar";
import Header from "components/header";
import About from "components/about-us";
import Whitepaper from "components/whitepaper";
import Footer from "components/footer";
import Tokenomics from "components/tokenomics";
import Roadmap from "components/roadmap";
import Contact from "components/contact-us";
import Client from "components/client";
import Team from "components/team";
import Member from "components/member";
import Particle from "components/particle";

// // sections for this page
// import Components from "./presentation-sections/Components.js";
// import BasicComponents from "./presentation-sections/BasicComponents.js";
// import Cards from "./presentation-sections/Cards.js";
// import Content from "./presentation-sections/Content.js";
// import Sections from "./presentation-sections/Sections.js";
// import Examples from "./presentation-sections/Examples.js";
// import FreeDemo from "./presentation-sections/FreeDemo.js";
// import Icons from "./presentation-sections/Icons.js";
// import Image from "./presentation-sections/Image.js";
// import Testimonials from "./presentation-sections/Testimonials.js";
// import Pricing from "./presentation-sections/Pricing.js";

const Home: React.FC = () => {
	React.useEffect(() => {
		document.body.classList.add("presentation-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;

		// initialise Rellax for this page
		if (window.innerWidth >= 991) {
			setTimeout(function () {
				new Rellax(".rellax", {
					center: true,
				});
			}, 5000);
			new Rellax(".rellax-header");
			new Rellax(".rellax-text");
		}

		// we need to add a script for the github buttons
		let script = document.createElement("script");
		script.src = "https://buttons.github.io/buttons.js";
		script.id = "github-buttons-script-id";
		document.body.appendChild(script);

		return function cleanup() {
			document.body.classList.remove("presentation-page");
			document.body.classList.remove("sidebar-collapse");

			// we need to remove the script when we change the page
			script.parentNode.removeChild(script);
		};
	});
	return (
		<main className="main-wrapper">
			<ScrollTransparentNavbar />
			<div className="wrapper" 
				style={{ paddingTop: 91}}
				>
				<Header />
				<About />
				<Whitepaper />
				<Tokenomics />
				<Roadmap />
				{/* <Particle /> */}
				{/* <Components />
				<BasicComponents />
				<Cards />
				<Content />
				<Sections />
				<Examples />
				<FreeDemo />
				<Icons />
				<Image />
				<Testimonials />
				<Pricing /> */}
				<Client />
				{/* <Team /> */}
				<Member />
				<Particle />
				<Contact />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
