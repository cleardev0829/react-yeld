import React from "react";

export const Team: React.FC = () => {
	return (
		<>
			<div className="pricing-3 section" id="team">
				<div className="teamContainer">
					<div className="row">
						<div className="col-md-6 ml-auto mr-auto text-center">
							<h2 className="title">Meet Our Team</h2>
							{/* <h4 className="description">
								You have Free Unlimited Updates on each package.
							</h4> */}
							<div className="section-space"></div>
						</div>
					</div>
                    <div className="row">
                        <div className="column">
                            <div className="team1">
                                <div className="team-img">
                                    <img src="img/team-2-1.jpg" alt="Team" />
                                </div>
                                <div className="team-content">
                                    <h2>Josh Dunn</h2>
                                    <h3>CEO &amp; Founder</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="team1">
                                <div className="team-img">
                                    <img src="img/team-2-2.jpg" alt="Team" />
                                </div>
                                <div className="team-content">
                                    <h2>Mollie Ross</h2>
                                    <h3>Art Director</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="team1">
                                <div className="team-img">
                                    <img src="img/team-2-3.jpg" alt="Team" />
                                </div>
                                <div className="team-content">
                                    <h2>Dylan Adams</h2>
                                    <h3>Developer</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column" style={{marginLeft: 'auto'}}>
                            <div className="team1">
                                <div className="team-img">
                                    <img src="img/team-2-4.jpg" alt="Team" />
                                </div>
                                <div className="team-content">
                                    <h2>Jenny Page</h2>
                                    <h3>Designer</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column" style={{marginRight: 'auto'}}>
                            <div className="team1">
                                <div className="team-img">
                                    <img src="img/team-2-5.jpg" alt="Team" />
                                </div>
                                <div className="team-content">
                                    <h2>Jane Doe</h2>
                                    <h3>Designer</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
			{/* <!--     *********    END PRICING 3      *********      --> */}
		</>
	);
};

export default Team;
