import React from "react";

//include images into your bundle
import soraka from "../../img/soraka.jpg";
import nami from "../../img/nami.jpg";
import lux from "../../img/lux.jpg";
import miss from "../../img/miss.jpg";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbo } from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<>
			{" "}
			<Navbar />
			<div className="text-center mt-5">
				<Jumbo />
				{/* <h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a> */}
				<div className="row" style={{ margin: "4%" }}>
					<Card
						title="NAMI - Support"
						imagen={nami}
						href="https://www.leagueoflegends.com/es-es/champions/nami/"
					/>
					<Card
						title="LUX - Mid"
						imagen={lux}
						href=" https://www.leagueoflegends.com/es-es/champions/lux/"
					/>
					<Card
						title="MISS FORTUNE - ADC"
						imagen={miss}
						href=" https://www.leagueoflegends.com/es-es/champions/miss-fortune/"
					/>
					<Card
						title="SORAKA -Top"
						imagen={soraka}
						href=" https://www.leagueoflegends.com/es-es/champions/soraka/"
					/>
					{/* Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love! */}
				</div>
			</div>
		</>
	);
};

export default Home;
