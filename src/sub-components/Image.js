import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/github_context";

const Image = () => {
	const { githubUser } = React.useContext(GithubContext);

	if (githubUser) {
		const { avatar_url, html_url } = githubUser;
		return (
			<div>
				<Wrapper>
					<img src={avatar_url} alt='' />
					<a href={html_url}>{html_url}</a>
				</Wrapper>
			</div>
		);
	}
};

const Wrapper = styled.section`
	display: grid;
	gap: 1rem;
	grid-template-rows: auto auto;
	img {
		border-radius: 90%;
		height: 15rem;
		justify-self: end;
	}

	a {
		justify-self: end;
		text-decoration: none;
		color: #243a52;
		font-size: 1.1rem;
	}
`;

export default Image;
