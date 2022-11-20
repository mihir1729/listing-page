import React, { useState } from "react";
import { GithubContext } from "../context/github_context";

const Language = ({ name }) => {
	const { githubUser, octokit } = React.useContext(GithubContext);
	const [repoLanguages, setRepoLanguages] = useState();

	const searchLanguages = async (repoName, githubUser, setRepoLanguages) => {
		const { login } = githubUser;

		try {
			const result = await octokit.request(
				`GET /repos/${login}/${repoName}/languages`,
				{}
			);

			const status = 200;
			if (result.status === status) {
				const table = Object.keys(result.data);
				if (table) {
					setRepoLanguages(table);
				}
			}

			console.log(
				`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`
			);
		} catch (error) {
			console.log(
				`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`
			);
		}
	};

	const fetchLanguage = async () => {
		if (githubUser) {
			const result = await searchLanguages(name, githubUser, setRepoLanguages);
		}
	};
	if (!repoLanguages) {
		fetchLanguage();
	}

	return <div>{repoLanguages}</div>;
};

export default Language;
