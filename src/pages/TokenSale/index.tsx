import React from "react";
import { CountDown } from "components/countdown";
import * as moment from 'moment-timezone';
import Particle from "../../components/particle";

const TokenSale: React.FC = () => {
	const deadline = moment.tz("2021-11-6 13:00", "Europe/London");
	
	return (
		<main className="main-wrapper">
			<CountDown deadline={deadline} />
			<Particle />
		</main>
	);
};

export default TokenSale;
