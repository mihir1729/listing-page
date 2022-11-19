import React, { useState, useEffect } from "react";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ show: false, msg: "" });
	const [githubUser, setGithubUser] = useState();
	const [repos, setRepos] = useState();
	const [languages, setLanguages] = useState([]);

	const searchGithubUser = async (user) => {
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

	const searchLanguages = async (repoName, githubUser) => {
		if (setIsLoading) {
			const { login } = githubUser;
			const response = await axios(
				`${rootUrl}/repos/${login}/${repoName}/languages`
			).catch((err) => console.log(err));
			console.log(response);
			if (response) {
				setLanguages(response.data);
			}
		}

		setIsLoading(false);
	};

	function toggleError(show = false, msg = "") {
		setError({ show, msg });
	}

	return (
		<GithubContext.Provider
			value={{
				isLoading,
				setIsLoading,
				error,
				searchGithubUser,
				repos,
				githubUser,
				searchLanguages,
				languages,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
