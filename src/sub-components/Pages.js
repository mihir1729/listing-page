import React, { useEffect, useState } from "react";
import { GithubContext } from "../context/context";

const Pages = () => {
	const { octokit, setRepos } = React.useContext(GithubContext);

	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [firstPage, setFirstPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const fetchRepos = async (page, firstPage, lastPage) => {
		// const { login } = mockUser; //set this in sync with Githubuser and change below in the request as well
		try {
			const result = await octokit.request(
				`GET /users/mihir1729/repos?per_page=6&page=${page}`,
				{}
			);

			setRepos(result.data);

			var parse = require("parse-link-header");
			var parsed = parse(result.headers.link);
			console.log(parsed);

			if (page !== 1) {
				setFirstPage(parseInt(parsed.first.page));
			}
			setLastPage(parseInt(parsed.last.page));

			if (result.headers) {
				console.log(
					`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`
				);
			}
			setIsLoading(false);
		} catch (error) {
			if (error.headers) {
				console.log(
					`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`
				);
			}
		}
	};

	useEffect(() => {
		fetchRepos(page, firstPage, lastPage);
	}, [page]);

	if (!isLoading) {
		return (
			<div>
				{firstPage || 1}
				{lastPage}
			</div>
		);
	}
};

export default Pages;
