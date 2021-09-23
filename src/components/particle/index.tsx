import Particles from "react-tsparticles";

export const Particle: React.FC = () => {
	return (
		<div>
			<Particles
				id="tsparticles"
				options={{
					particles: {
						color: { value: "#de795e" },
						number: {
							value: 300,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
						move: {
							enable: true,
							direction: "right",
							speed: 4,
							random: true,
						},
						size: {
							value: 1,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.05,
							},
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: "push",
							},
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		</div>
	);
};

export default Particle;
