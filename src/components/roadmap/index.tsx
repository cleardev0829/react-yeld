import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Chrono } from "react-chrono";

export const Roadmap: React.FC = () => {
	const items = [
		{
			title: "Q3 2021",
		},
		{
			title: "Q4 2021",
		},
		{
			title: "Q1 2022",
		},
	];
	return (
		<section className="roadmap-wrapper">
			<div
				className="section section-frequently"
				data-background-color="black"
			>
				<Row id="roadMap">
					<Col className="ml-auto mr-auto text-center" md="8">
						<h2 className="title">Roadmap</h2>
					</Col>
				</Row>
				<Row>
					<Container>
						<Chrono 
							items={items}
							mode="VERTICAL_ALTERNATING"
							useReadMore={false}
							hideControls={true}
							theme={{
								primary: "white",
								textColor: "white",
								secondary: "orange",
								titleColor: "#3c3c3c"
							}}
						>
							<div className="ml-auto mr-auto roadmap-text"
							
								>
								<ul>
									<li>
										<h4>Official Website Release</h4>
									</li>
									<li>
										<h4>Initial Marketing Campaign</h4>
									</li>
									<li>
										<h4>Public Token Sale SPUP and (Exclusive) SBONE</h4>
									</li>
									<li>
										<h4>Launch of the Space Farm (Token Farm)</h4>
									</li>
									<li>
										<h4>Uniswap listing</h4>
									</li>
								</ul>
							</div>
							<div className="roadmap-text">
								<ul>
									<li>
										<h4>Launch of SpacePup Merchandise</h4>
									</li>
									<li>
										<h4>Listing on Coingecko</h4>
									</li>
									<li>
										<h4>Listing on CoinMarketCap</h4>
									</li>
									<li>
										<h4>Q4 Charity Donation</h4>
									</li>
									<li>
										<h4>New Partnership Announcement</h4>
									</li>
									<li>
										<h4>New Exchange listing</h4>
									</li>
								</ul>
							</div>
							<div className="roadmap-text">
								<ul>
									<li>
										<h4>Release of SPUP illustrated book series</h4>
									</li>
									<li>
										<h4>SpacePup Single release by KPOP Band</h4>
									</li>
									<li>
										<h4>Q1 Charity Donation</h4>
									</li>
									<li>
										<h4>NFT token sale</h4>
									</li>
									<li>
										<h4>New Exchange listing</h4>
									</li>
								</ul>
							</div>
						</Chrono>
					</Container>
				</Row>
			</div>
		</section>
	);
};

export default Roadmap;
