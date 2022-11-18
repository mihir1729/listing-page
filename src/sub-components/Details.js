import React from "react";
import { GithubContext } from "../context/context";

const Details = () => {
	const { githubUser } = React.useContext(GithubContext);

	if (githubUser) {
		const { name, bio, twitter_username, location } = githubUser;
		console.log(name, bio, twitter_username, location);
	}

	return <div>Detail</div>;
};

export default Details;
