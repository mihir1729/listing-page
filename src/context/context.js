import React, { useState, useEffect } from "react";
import axios from "axios";
import { Octokit } from "octokit";
import user from "./mockData/mockUser";
import repo from "./mockData/mockRepo";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

const GithubProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ show: false, msg: "" });
	const [githubUser, setGithubUser] = useState();
	const [repos, setRepos] = useState();
	const [languages, setLanguages] = useState([]);
	const [mockUser, setMockUser] = useState(user);
	const [mockRepo, setMockRepo] = useState(repo);

	const searchGithubUser = async (user) => {
		// const response = await octokit.request(`GET /users/${user}`, {});

		if (mockUser) {
			//replace mockUser with response.data
			// setGithubUser(response.data);
			setGithubUser(mockUser); //delete this and uncomment above lines
			const { login } = mockUser; //add response.data inplace of mockUser

			// try {
			// 	const result = await octokit.request(
			// 		`GET /users/${login}/repos?per_page=10`,
			// 		{}
			// 	);

			// 	setRepos(result.data);
			// 	console.log(result.data);

			// 	console.log(
			// 		`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`
			// 	);
			// } catch (error) {
			// 	console.log(
			// 		`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`
			// 	);
			// }
			// Uncommment the try catch block and delete below code
			setRepos(mockRepo);
		} else {
			toggleError(true, "there is no user with that username");
		}
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
				octokit,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
