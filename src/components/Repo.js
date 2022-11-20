import React from "react";
import { GithubContext } from "../context/github_context";
import { Repos } from "../sub-components/index";
import styled from "styled-components";

const Repo = () => {
	const { repos } = React.useContext(GithubContext);

	if (repos) {
		return (
			<>
				<Wrapper>
					{repos.map((repo) => {
						const { name, description } = repo;

						return (
							<Repos key={repo.id} name={name} description={description} />
						);
					})}
				</Wrapper>
			</>
		);
	}
};

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
`;

export default Repo;
