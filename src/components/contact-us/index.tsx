import React from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Label,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

export const Contact: React.FC = () => {
	const [first1Focus, setFirst1Focus] = React.useState(false);
	const [last1Focus, setLast1Focus] = React.useState(false);
	const [email1Focus, setEmail1Focus] = React.useState(false);
	// const [first2Focus, setFirst2Focus] = React.useState(false);
	// const [email2Focus, setEmail2Focus] = React.useState(false);
	return (
		<>
			<div className="cd-section" id="contact-us">
				<div
					className="contactus-1 section-image">
					<Container>
					<h2 className="title text-center">Get in Touch</h2>
						<Row>
							<Col md="5">
								<div className="info info-horizontal">
									<div className="icon icon-info">
										<i className="now-ui-icons location_pin"></i>
									</div>
									<div className="description">
										<h4 className="info-title">
											Find us at the office
										</h4>
										<p className="description">
											64 Mars Lane,{" "}
											<br></br>
											SpacePup Head Quarters, <br></br>
											M14 SPUP,<br></br>
											Mars
										</p>
									</div>
								</div>
								
							</Col>
							<Col className="ml-auto mr-auto" md="5">
								<Card className="card-contact card-raised">
									<Form
									action="https://formsubmit.co/info@spacepup.io" 
									method="POST"
									id="contact-form1"
									role="form"
									>
										<CardHeader className="text-center">
											<CardTitle tag="h4">
												Contact Us
											</CardTitle>
										</CardHeader>
										<CardBody>
											<Row>
												<Col className="pr-2" md="6">
													<label>First name</label>
													<InputGroup
														className={
															first1Focus
																? "input-group-focus"
																: ""
														}
													>
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="now-ui-icons users_circle-08"></i>
															</InputGroupText>
														</InputGroupAddon>
														<Input
														name="First Name"
															aria-label="First Name..."
															autoComplete="given-name"
															placeholder="First Name..."
															type="text"
															onFocus={() =>
																setFirst1Focus(
																	true,
																)
															}
															onBlur={() =>
																setFirst1Focus(
																	false,
																)
															}
														></Input>
													</InputGroup>
												</Col>
												<Col className="pl-2" md="6">
													<FormGroup>
														<label>Last name</label>
														<InputGroup
															className={
																last1Focus
																	? "input-group-focus"
																	: ""
															}
														>
															<InputGroupAddon addonType="prepend">
																<InputGroupText>
																	<i className="now-ui-icons text_caps-small"></i>
																</InputGroupText>
															</InputGroupAddon>
															<Input 
															name="Last Name"
															aria-label="Last Name..."
															autoComplete="family-name"
															placeholder="Last Name..."
															type="text"
															onFocus={() =>
																setLast1Focus(
																		true,
																	)
																}
																onBlur={() =>
																	setLast1Focus(
																		false,
																	)
																}
															></Input>
														</InputGroup>
													</FormGroup>
												</Col>
											</Row>
											<FormGroup>
												<label>Email address</label>
												<InputGroup 
												
													className={
														email1Focus
															? "input-group-focus"
															: ""
													}
												>
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="now-ui-icons ui-1_email-85"></i>
														</InputGroupText>
													</InputGroupAddon>
													<Input 
													name="Email"
													autoComplete="email"
													placeholder="Email Here..."
													type="email"
													onFocus={() =>
													setEmail1Focus(true)
														}
														onBlur={() =>
															setEmail1Focus(
																false,
															)
														}
													></Input>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<label>Your message</label>
												<Input
													id="message"
													name="message"
													rows="6"
													type="textarea"
												></Input>
											</FormGroup>
											<Row>
												<Col md="6">
													<FormGroup check>
														<Label check>
															<Input type="checkbox"></Input>
															<span className="form-check-sign"></span>
															I'm not a robot
														</Label>
													</FormGroup>
												</Col>
												<Col md="6">
													<Button
														className="btn-round pull-right"
														color="primary"
														type="submit"
														style={{color:"black"}}
													>
														Send Message
													</Button>
												</Col>
											</Row>
										</CardBody>
									</Form>
								</Card>
							</Col>
							<Col className="text-center ml-auto mr-auto" md="8">
								<Button
									href="https://twitter.com/spacepup_x?s=21"
									target="_blank"
									className="btn-icon btn-round mr-1"
									color="twitter"
									id="tooltip477589936"
									size="lg"
								>
									<i className="fab fa-twitter"></i>
								</Button>
								<UncontrolledTooltip
									delay={0}
									target="tooltip477589936"
								>
									Tweet!
								</UncontrolledTooltip>
								<Button
								href="https://t.me/spacepup_x"
								target="_blank"
								className="btn-round btn-icon mr-1"
								color="linkedin"
								id="tooltip46748914"
								size="lg"
								>
									<i className="fab fa-telegram"></i>
								</Button>
								<UncontrolledTooltip
								delay={0}
								target="tooltip46748914"
								>
									Join!
								</UncontrolledTooltip>
								<Button
									className="btn-round btn-icon mr-1"
									color="dribbble"
									id="tooltip129912781"
									size="lg"
								>
									<i className="fab fa-instagram"></i>
								</Button>
								<UncontrolledTooltip
									delay={0}
									target="tooltip129912781"
								>
									Follow!
								</UncontrolledTooltip>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Contact;
