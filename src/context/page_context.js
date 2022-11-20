import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { GithubContext } from "./github_context";

const PageContext = React.createContext();

const PageProvider = ({ children }) => {
	const { octokit, setRepos } = React.useContext(GithubContext);

	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(1);
	const [prevPage, setPrevPage] = useState(1);
	const [firstPage, setFirstPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const fetchRepos = async (page) => {
		// const { login } = mockUser; //set this in sync with Githubuser and change below in the request as well
		try {
			const result = await octokit.request(
				`GET /users/mihir1729/repos?per_page=6&page=${page}`,
				{}
			);

			setRepos(result.data);

			var parse = require("parse-link-header");
			var parsed = parse(result.headers.link);

			if (page === 1) {
				setNextPage(parseInt(parsed.next.page));
				setPrevPage(parseInt(parsed.last.page));
				setLastPage(parseInt(parsed.last.page));
			} else if (page === lastPage) {
				setNextPage(parseInt(parsed.first.page));
				setPrevPage(parseInt(parsed.prev.page));
				setFirstPage(parseInt(parsed.first.page));
			} else {
				setNextPage(parseInt(parsed.next.page));
				setPrevPage(parseInt(parsed.prev.page));
				setFirstPage(parseInt(parsed.first.page));
				setLastPage(parseInt(parsed.last.page));
			}

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
		fetchRepos(page);
	}, []);

	return (
		<PageContext.Provider
			value={{
				page,
				setPage,
				nextPage,
				prevPage,
				firstPage,
				lastPage,
				fetchRepos,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export { PageProvider, PageContext };
