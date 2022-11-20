import React from "react";
import { GithubContext } from "../context/github_context";

const Image = () => {
	const { githubUser } = React.useContext(GithubContext);

	if (githubUser) {
		const { avatar_url, html_url } = githubUser;
		return (
			<div>
				<img src={avatar_url} alt='' />
				<a href={html_url}>{html_url}</a>
			</div>
		);
	}
};

export default Image;
