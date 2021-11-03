import React from "react";
import league from "../../img/league.png";

export const Navbar = () => {
	return (
		<>
			<div>
				{" "}
				<nav className="navbar navbar-light bg-light">
					<a
						className="navbar-brand"
						href="https://leagueoflegends.com">
						<img
							src={league}
							// width="30"
							height="30"
							className="d-inline-block align-top"
							alt=""
						/>
					</a>
				</nav>
			</div>
		</>
	);
};
