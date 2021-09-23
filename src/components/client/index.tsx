import React from "react";
import { Container, Row, Col } from "reactstrap";

export const Client: React.FC = () => {
	return (
		<>
			<div data-background-color="black" className="section section-pricing" id="sectionBuy">
				<Container>
					<div className="our-clients">
						<Container>
							<Row>
								<Col
									className="ml-auto mr-auto text-center"
									md="8"
								>
									<h2 className="title">Partnerships</h2>
								</Col>
							</Row>
							<Row>
									<h3 className="subtitle m-auto">Coming Soon</h3>
								{/* <Col md="2">
									<img
										alt="..."
										src={
											require("assets/img/presentation-page/microsoft.jpg")
												.default
										}
									></img>
								</Col>
								<Col md="2">
									<img
										alt="..."
										src={
											require("assets/img/presentation-page/harvard.jpg")
												.default
										}
									></img>
								</Col>
								<Col className="mr-auto" md="2">
									<img
										alt="..."
										src={
											require("assets/img/presentation-page/stanford.jpg")
												.default
										}
									></img>
								</Col> */}
							</Row>
						</Container>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Client;
