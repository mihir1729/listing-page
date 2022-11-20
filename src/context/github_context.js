import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import user from "./mockData/mockUser";
import repo from "./mockData/mockRepo";

const GithubContext = React.createContext();

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

const GithubProvider = ({ children }) => {
	//initial setup variables
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ show: false, msg: "" });
	const [githubUser, setGithubUser] = useState();
	const [repos, setRepos] = useState();
	const [userName, setUserName] = useState("");

	//mock data to limit api requests
	const [mockUser, setMockUser] = useState(user);
	const [mockRepo, setMockRepo] = useState(repo);

	const searchGithubUser = async (user) => {
		const response = await octokit.request(`GET /users/${user}`, {});

		if (response) {
			setGithubUser(response.data);
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
				octokit,
				setRepos,
				userName,
				setUserName,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
