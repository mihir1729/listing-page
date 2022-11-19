import React from "react";
import { GithubContext } from "../context/context";
import { Repos } from "../sub-components/index";

const Repo = () => {
	const { repos } = React.useContext(GithubContext);

	if (repos) {
		return (
			<>
				{repos.map((repo) => {
					const { name, description } = repo;
					return <Repos key={repo.id} name={name} description={description} />;
				})}
			</>
		);
	}
};

export default Repo;
