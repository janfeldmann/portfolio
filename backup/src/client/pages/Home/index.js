import React from 'react';
import Section from '../../components/Section';
import Stage from '../../components/Stage';
import Slider from '../../components/Slider';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Stage />
				<Section>
					<div className="container">
						<header>
							<h2>Me</h2>
						</header>
						<p>
							Ich war schon immer technikaffin. Auf der anderen Seite ist es mir aber
							ebenso wichtig etwas visuelles zu erschaffen. Beides kann ich im
							Frontend perfekt vereinen.
						</p>
						<p>
							Als Brücke zwischen Technik und Design bietet mir das Frontend die
							Möglichkeit meine Ideen visuell und in der Programmierung zum Ausdruck
							zu bringen. Es ist ständig in Bewegung und entwickelt sich weiter. In
							wenigen Bereichen gibt es einen so rasanten Fortschritt.
						</p>
						<img
							src="assets/img/svg/undraw_personalization_triu.svg"
							alt=""
							data-parallax-speed="2"
						/>
					</div>
				</Section>
				<Section className="section" id="area-skills">
					<div className="container">
						<img
							src="assets/img/svg/undraw_static_assets_rpm6.svg"
							alt=""
							data-parallax-speed="-2"
						/>

						<header>
							<h2>Skills</h2>
						</header>
						<p>
							Seit mehr als 6 Jahren bin im Frontend untewegs und habe mir in dieser
							Zeit viele Fähigkeiten angeeignet. Seit über 4 Jahren
						</p>
						<p>
							Mir besonders wichtig immer am auf dem neuesten Stand der Entwicklung zu
							sein, um aktuelle Trends beurteilen und einsetzen zu können.
						</p>
					</div>
				</Section>
				<Section />
				<Section id="area-contact">
					<div className="container">
						<header>
							<h2>Kontakt</h2>
						</header>
					</div>
				</Section>
			</div>
		);
	}
}

export default Home;
