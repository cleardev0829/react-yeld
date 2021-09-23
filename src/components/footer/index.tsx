import React from "react";
import { Container } from "reactstrap";

export const Footer: React.FC = () => {
	return (
		<>
			<footer className="footer" data-background-color="black">
				<Container>
					<div className="disclaimer">
						<p className="disclaimer-text">
							All content available on our website is intended solely to
							provide you with general information. None of the content we
							provide should be construed as financial advice on which you may
							specifically rely for any purpose.
						</p>
					</div>
					<div className="copyright" id="copyright">
						© {new Date().getFullYear()}, Designed by SpacePUP .
					</div>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
