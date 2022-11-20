import React from "react";
import { GithubContext } from "../context/github_context";
import styled from "styled-components";

const Details = () => {
	const { githubUser } = React.useContext(GithubContext);

	if (githubUser) {
		const { name, bio, twitter_username, location } = githubUser;

		return (
			<>
				<Wrapper>
					<h1>{name}</h1>
					<p>{bio}</p>
					<h5>{location}</h5>
					<a href={`https://twitter.com/${twitter_username}`}>
						Twitter: {`https://twitter.com/${twitter_username}`}
					</a>
				</Wrapper>
			</>
		);
	}
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 0 15rem;

	h1 {
		margin: 0;
		font-size: 2.3rem;
		height: 3rem;
	}

	p {
		margin: 0.5rem 0 0 0;
		justify-self: start;
		font-size: 1.1rem;
	}

	h5 {
		margin: 2.5rem 0 0 0;
		font-size: 1.5rem;
		font-weight: 400;
		height: 10%;
		justify-content: center;
	}

	a {
		margin: 1.5rem 0 0 0;
		text-decoration: none;
		color: #243a52;
		font-size: 1.1rem;
		height: 10%;
	}
`;

export default Details;
