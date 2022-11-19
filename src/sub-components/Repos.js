import React from "react";
import { GithubContext } from "../context/context";
import { Language } from "./index";
import axios from "axios";

const rootUrl = "https://api.github.com";

const Repos = ({ name, description }) => {
	const { githubUser, searchLanguages, languages, setIsLoading } =
		React.useContext(GithubContext);

	if (githubUser) {
		setIsLoading(true);
		searchLanguages(name, githubUser);
	}

	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
			<Language />
		</div>
	);
};

export default Repos;
