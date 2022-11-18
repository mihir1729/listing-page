import React, { useState, useEffect } from "react";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: "" });
	const [githubUser, setGithubUser] = useState();
	const [repos, setRepos] = useState([]);

	const searchGithubUser = async (user) => {
		setIsLoading(true);

		const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
			console.log(err)
		);
		if (response) {
			setGithubUser(response.data);
			const { login } = response.data;

			await axios(`${rootUrl}/users/${login}/repos?per_page=100`)
				.then((results) => {
					const status = 200;

					if (results.status === status) {
						setRepos(results.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			toggleError(true, "there is no user with that username");
		}

		setIsLoading(false);
	};

	function toggleError(show = false, msg = "") {
		setError({ show, msg });
	}

	return (
		<GithubContext.Provider
			value={{ isLoading, error, searchGithubUser, repos, githubUser }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
