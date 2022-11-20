import React, { useState } from "react";
import { GithubContext } from "../context/github_context";
import styled from "styled-components";

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
			await searchLanguages(name, githubUser, setRepoLanguages);
		}
	};
	if (!repoLanguages) {
		fetchLanguage();
	}

	return (
		<div>
			<Wrapper>
				{repoLanguages &&
					repoLanguages.map((language, index) => {
						return (
							<p
								key={index}
								style={{
									marginRight: "1rem",
									marginLeft: "1rem",
									background: "#044c53",
									color: "white",
									padding: "0.3rem",
								}}
							>
								{language}
							</p>
						);
					})}
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	display: flex;

	p {
		margin: 0;
		font-weight: 600;
	}
`;

export default Language;
