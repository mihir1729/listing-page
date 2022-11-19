import React from "react";
import { GithubContext } from "../context/context";

const Search = () => {
	const { searchGithubUser, isLoading, setIsLoading, repos } =
		React.useContext(GithubContext);

	if (!repos) {
		setIsLoading(true);
		searchGithubUser("mihir1729");
	}

	return <div>Search</div>;
};

export default Search;
