import React from "react";
import { Col, Container, Row } from "reactstrap";

export const Tokenomics: React.FC = () => {
	return (
		<>
			<div
				className="section features-7 section-image"
				id="tokenomics"
				data-background-color="black"
				// style={{
				// 	backgroundImage:
				// 		"url(" +
				// 		require("assets/img/presentation-page/nuk-pro-back-sky-orange.jpg")
				// 			.default +
				// 		")",
				// }}
			>
				<Container fluid>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="8">
							<h2 className="title">Tokenomics</h2>
						</Col>
					</Row>
					<Row>
						{/* <Col sm="4">
							<div className="info info-vertical">
								<div className="icon">
									<i className="now-ui-icons business_money-coins"></i>
								</div>
								<div className="description">
									<h5 className="info-title">Token Supply</h5>
									<p className="description">
										Creating your design from scratch with
										dedicated designers can be very
										expensive.Using Now UI Kit PRO you don't
										have to worry about customising the
										basic Bootstrap 4 design or its
										components.
									</p>
								</div>
							</div>
						</Col> */}
						<Col sm="6">
							<div className="info info-vertical">
								<div className="icon">
									<i className="now-ui-icons text_bold"></i>
								</div>
								<div className="description">
									<h5 className="info-title">Staking</h5>
									<p className="description">
										SBONE tokens are available to earn at
										the amazing yield farm called the “Space
										Farm”. Stake your SPUP tokens at the
										Space Farm and receive an APY of 100% on
										SBONE tokens, with the option to unstake
										every 60-seconds. The Space Farm will be
										operational for 16 years at the stated
										APY.
									</p>
								</div>
							</div>
						</Col>
						<Col sm="6">
							<div className="info info-vertical">
								<div className="icon">
									<i className="now-ui-icons education_paper"></i>
								</div>
								<div className="description">
									<h5 className="info-title">NFT</h5>
									<p className="description">
										SpacePup’s companions Rocco and Randy
										will be minted as NFTs. There will be 50
										ultra rare, 100 super rare, and 500
										common NFTs available.
									</p>
								</div>
							</div>
						</Col>
						{/* <Col md="6">
							<div className="image-container">
								<img
									alt="..."
									src={
										require("assets/img/ipad3.png").default
									}
								></img>
							</div>
						</Col> */}
					</Row>
				</Container>
			</div>
			{/* <!--     *********    PRICING 3     *********      --> */}
			<div className="pricing-3 section" id="pricing-3">
				<div className="container">
					<div className="row">
						<div className="col-md-6 ml-auto mr-auto text-center">
							<h2 className="title">Token Supply</h2>
							{/* <h4 className="description">
								You have Free Unlimited Updates on each package.
							</h4> */}
							<div className="section-space"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 ml-auto">
							<div className="card card-pricing">
								<div className="card-body card-body-tokenomics">
									<h2 className="category">SPUP</h2>
									<ul>
										<li>
											<b>Total Token Supply </b>{" "}
											&nbsp;:&nbsp; 1,000,000,000 (1B)
										</li>
										<li>
											<b>Public Sale</b>&nbsp;:&nbsp;
											300,000,000 (300M) $0.025
										</li>
										<li>
											<b>Community + Advisor Tokens</b>&nbsp;:&nbsp;
											100,000,000 (100M)
										</li>
										<li>
											<b>Team + Partnership Tokens</b>
											&nbsp;:&nbsp; 200,000,000 (200M)
										</li>
										<li>
											<b>Liquidity and Marketing</b>
											&nbsp;:&nbsp; 400,000,000 (400M)
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 mr-auto">
							<div
								className="card card-pricing"
								data-background-color="black"
							>
								<div className="card-body card-body-tokenomics">
									<h2
										className="category"
										style={{ color: "#ffb236" }}
									>
										SBONE
									</h2>
									{/* <h1 className="card-title">
										<small>$</small>59
										<small>/mo</small>
									</h1> */}
									<ul>
										<li>
											<b>Total Token Supply </b>
											&nbsp;:&nbsp;100,000,000,000 (100B)
										</li>
										<li>
											<b>Public Sale </b>&nbsp;:&nbsp;
											10,000,000,000 (10B): $0.0008
										</li>
										<li>
											<b>Liquidity Tokens</b>
											&nbsp;:&nbsp;20,000,000,000 (20B)
										</li>
										<li>
											<b>Token Farm</b>
											&nbsp;:&nbsp;60,000,000,000 (60B)
										</li>
										<li>
											<b>Team Tokens</b>
											&nbsp;:&nbsp; 10,000,000,000 (10B)
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 ml-auto mr-auto text-center">
							<h6 className="title">
								SBONE will have an exclusive public sale. Only
								10% of the SBONE tokens will be available for
								sale. Upon completion of the SBONE sale further
								tokens will only be available on the space farm
								or exchange at a later date.
							</h6>
							<h6 className="title">
								SBONE is a fork of Safemoon making it a “Safe
								Token”. Transaction fees of 10% will apply,
								where 5% of fees are redistributed to current
								SPUP holders. The additional 5% of fees are
								split in half, where 2.5% is returned to the
								liquidity pool on Uniswap and the remaining
								2.5% is sold into ETH by the contract.
							</h6>
							<div className="section-space"></div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--     *********    END PRICING 3      *********      --> */}
		</>
	);
};

export default Tokenomics;
