import React, { useEffect } from "react";
import { Language } from "./index";

const Repos = ({ name, description, allLanguages }) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
			<Language languages={allLanguages} />
		</div>
	);
};

export default Repos;
sssssss;
