import React from "react";
import { isMobile } from "react-device-detect";
export const Header: React.FC = () => {
	if (isMobile) {
		return (
			<>
				<div className="page-header clear-filter">
					<div
						className="rellax-header rellax-header-sky"
						data-rellax-speed="-4"
					>
						<div
							className="page-header-image"
							style={{
								backgroundImage:
									"url(" +
									require("assets/img/examples/mobile-spacepup.jpg")
										.default +
									")",
							}}
						></div>
					</div>
					{/* <div
					className="rellax-header rellax-header-buildings"
					data-rellax-speed="0"
				>
					<div
						className="page-header-image page-header-city"
						style={{
							backgroundImage:
								"url(" +
								require("assets/img/presentation-page/nuk-pro-buildings.png")
									.default +
								")",
						}}
					></div>
				</div> */}

					{/* <div className="rellax-text-container rellax-text">
						<h1 className="h1-seo" data-rellax-speed="-1">
							SPUP
						</h1>
					</div>
					<h2
						className="h3-description rellax-text"
						data-rellax-speed="-1"
					>
						SPACEPUP
					</h2> */}
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="page-header clear-filter">
					<div
						className="rellax-header rellax-header-sky"
						data-rellax-speed="-4"
					>
						<div
							className="page-header-image"
							style={{
								backgroundImage:
									"url(" +
									require("assets/img/examples/new-bg.jpg")
										.default +
									")",
							}}
						></div>
					</div>
					{/* <div
					className="rellax-header rellax-header-buildings"
					data-rellax-speed="0"
				>
					<div
						className="page-header-image page-header-city"
						style={{
							backgroundImage:
								"url(" +
								require("assets/img/presentation-page/nuk-pro-buildings.png")
									.default +
								")",
						}}
					></div>
				</div> */}

					{/* <div className="rellax-text-container rellax-text">
						<h1 className="h1-seo" data-rellax-speed="-1">
							SPUP
						</h1>
					</div>
					<h2
						className="h3-description rellax-text"
						data-rellax-speed="-1"
					>
						SPACEPUP
					</h2> */}
				</div>
			</>
		);
	}
};

export default Header;
