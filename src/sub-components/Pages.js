import React from "react";
import { PageContext } from "../context/page_context";
import { GithubContext } from "../context/github_context";
import styled from "styled-components";

const Pages = () => {
	const { lastPage, fetchRepos } = React.useContext(PageContext);
	const { repos } = React.useContext(GithubContext);

	const pagesArray = [];
	for (let i = 1; i <= lastPage; i++) {
		pagesArray.push(i);
	}

	if (repos) {
		return (
			<div>
				<Wrapper>
					{pagesArray.map((page, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									fetchRepos(page);
								}}
							>
								{page}
							</button>
						);
					})}
				</Wrapper>
			</div>
		);
	}
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;

	button {
		margin-left: 0.4rem;
		border: none;
		font-size: 1.4rem;
		cursor: pointer;
		background: #88ebf2;
		height: 40px;
		width: 40px;
	}

	button:hover {
		background: #e0fcff;
	}
`;

export default Pages;
