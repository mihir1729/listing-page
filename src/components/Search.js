import React from "react";
import { GithubContext } from "../context/context";

const Search = () => {
	const { searchGithubUser, isLoading } = React.useContext(GithubContext);

	if (isLoading) {
		// searchGithubUser("mihir1729");
	}

	return <div>Search</div>;
};

export default Search;
