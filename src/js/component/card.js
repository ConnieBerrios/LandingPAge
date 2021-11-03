import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<>
			<div className="card" style={{ width: "18rem", margin: "10px" }}>
				<img
					className="card-img-top"
					alt="..."
					src={props.imagen}
					style={{ marginTop: "5px" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href={props.href} className="btn btn-warning">
						Más info
					</a>
				</div>
			</div>
		</>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	imagen: PropTypes.string,
	href: PropTypes.string
};
