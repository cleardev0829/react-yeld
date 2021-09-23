import { Logo } from "components/logo";
import React from "react";
// reactstrap components
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	Nav,
	Container,
	NavLink,
} from "reactstrap";
export const ScrollTransparentNavbar: React.FC = () => {
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [navbarColor, setNavbarColor] = React.useState(
		(document.documentElement.scrollTop > 499 || document.body.scrollTop) >
			499
			? ""
			: "",
	);
	const [buyButtonColor, setBuyButtonColor] = React.useState(
		(document.documentElement.scrollTop > 499 || document.body.scrollTop) >
			499
			? "white"
			: "white",
	);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 499 ||
				document.body.scrollTop > 499
			) {
				setNavbarColor("");
				setBuyButtonColor("info");
			} else if (
				document.documentElement.scrollTop < 500 ||
				document.body.scrollTop < 500
			) {
				setNavbarColor(" ");
				setBuyButtonColor("");
			}
		};
		window.addEventListener("scroll", updateNavbarColor);
		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	});
	return (
		<>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open");
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar
				className={"fixed-top" + navbarColor}
				color="dark"
				expand="lg"
			>
				<Container>
					<div className="navbar-translate">
						<Logo />
						<NavbarBrand to="#main" id="navbar-brand" className="main-title">
							SpacePUP
							<div className="sub-title"><small>Welcome to the Journey</small></div>
						</NavbarBrand>
						<button
							onClick={() => {
								document.documentElement.classList.toggle(
									"nav-open",
								);
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							className="navbar-toggler"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse isOpen={collapseOpen} navbar>
						<Nav className="ml-auto" id="ceva" navbar>
							<NavItem>
								<NavLink href="#tokenomics">Tokenomics</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#roadMap">Road Map</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#team">Team</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#contact-us">Contact Us</NavLink>
							</NavItem>
							<NavItem>
								<Button
									className="nav-link btn-warning rounded border-warning"
									color={buyButtonColor}
									href="TokenSale"
									target="_blank"
									id="stakeBtn"
								>
									<p className="text-black font-weight-bold">Token Sale</p>
								</Button>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default ScrollTransparentNavbar;
