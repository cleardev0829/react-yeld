import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import BackgroundImage from "assets/img/new-bg.jpg";

export const Main: React.FC = () => {
	return (
		<div className="wrapper" id="main">
			<div className="page-header clear-filter" filter-color="orange">
				<div
					className="page-header-image"
					data-parallax="true"
					style={{
						backgroundImage: `url(${BackgroundImage})`,
						transform: `translate3d(0px, 0px, 0px)`,
					}}
				></div>
				<Container>
					<div className="row">
						<div className="col-md-7 text-left">
							<h1 className="title glow">SPUP</h1>
							<h2 className="title glow">SPACEUP</h2>
							<br />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};
