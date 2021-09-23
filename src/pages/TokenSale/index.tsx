import React from "react";
import { CountDown } from "components/countdown";
import * as moment from 'moment-timezone';
import Particle from "../../components/particle";

const TokenSale: React.FC = () => {
	const deadline = moment.tz("2021/11/06 13:00:00", "Europe/London").format();
	
	return (
		<main className="main-wrapper">
			<CountDown deadline={new Date(deadline)} />
			<Particle />
		</main>
	);
};

export default TokenSale;
