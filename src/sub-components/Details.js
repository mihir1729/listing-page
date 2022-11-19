import React from "react";
import { GithubContext } from "../context/context";

const Details = () => {
	const { githubUser } = React.useContext(GithubContext);

	if (githubUser) {
		const { name, bio, twitter_username, location } = githubUser;

		return (
			<>
				<h3>{name}</h3>
				<p>{bio}</p>
				<h5>{location}</h5>
				<a
					href={`https://twitter.com/${twitter_username}`}
				>{`https://twitter.com/${twitter_username}`}</a>
			</>
		);
	}
};

export default Details;
