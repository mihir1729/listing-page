import React from "react";
import { PageContext } from "../context/page_context";
import { GithubContext } from "../context/github_context";
import styled from "styled-components";

const Button = () => {
	const { prevPage, nextPage, fetchRepos } = React.useContext(PageContext);
	const { repos } = React.useContext(GithubContext);

	if (repos) {
		return (
			<div>
				<Wrapper>
					<button
						type='button'
						onClick={() => {
							fetchRepos(prevPage);
						}}
					>
						Prev
					</button>
					<button
						type='button'
						onClick={() => {
							fetchRepos(nextPage);
						}}
					>
						Next
					</button>
				</Wrapper>
			</div>
		);
	}
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 3rem;

	button {
		margin-left: 1rem;
		border: none;
		font-size: 1.1rem;
		cursor: pointer;
		background: #bcccdc;
		height: 40px;
		width: 70px;
	}

	button:hover {
		background: #f1f5f8;
	}
`;

export default Button;
