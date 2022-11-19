import React, { useState } from "react";
import { GithubContext } from "../context/context";
import { Repos } from "../sub-components/index";

const Repo = () => {
	const { githubUser, languages, setIsLoading, isLoading, repos, octokit } =
		React.useContext(GithubContext);
	const [repoLanguages, setRepoLanguages] = useState();

	const searchLanguages = async (repoName, githubUser, setRepoLanguages) => {
		if (setIsLoading) {
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
					console.log(table);
				}

				// console.log(
				// 	`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`
				// );
			} catch (error) {
				// console.log(
				// 	`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`
				// );
			}
		}
		setIsLoading(false);
	};

	if (repos) {
		return (
			<>
				{repos.map(async (repo) => {
					const { name, description } = repo;

					if (githubUser) {
						if (!isLoading) {
							setIsLoading(true);
						}
						await searchLanguages(name, githubUser, setRepoLanguages);
					}
					var allLanguages = repoLanguages;

					return (
						<Repos
							key={repo.id}
							name={name}
							description={description}
							allLanguages={allLanguages}
						/>
					);
				})}
			</>
		);
	}
};

export default Repo;
