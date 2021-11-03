import React from "react";

export const Jumbo = () => {
	return (
		<>
			<div className="jumbotron">
				<h1 className="display-4">
					Hola Invocador, quieres jugar videojuegos?
				</h1>
				<p className="lead">
					Abajo encontrarás los campeones mas usados según la linea en
					la que me encuentre durante la partida.
				</p>
				<hr className="my-4" />
				<p>
					Si quieres conocer más acerca de este hermoso, pero
					destructivo juego, click en el siguiente botón.
				</p>
				<a
					className="btn btn-warning btn-lg"
					href="https://www.leagueoflegends.com/"
					role="button">
					Ir a web oficial
				</a>
			</div>
		</>
	);
};
