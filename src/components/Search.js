import React, { useEffect } from "react";
import { GithubContext } from "../context/github_context";

const Search = () => {
	const {
		searchGithubUser,
		isLoading,
		setIsLoading,
		repos,
		userName,
		setUserName,
	} = React.useContext(GithubContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!repos) {
			setIsLoading(true);
			searchGithubUser(userName);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='enter github user'
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<button type='submit'>search</button>
			</form>
		</div>
	);
};

export default Search;
