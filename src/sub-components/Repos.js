import React, { useEffect } from "react";
import { Language } from "./index";

const Repos = ({ name, description }) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
			<Language name={name} />
		</div>
	);
};

export default Repos;
