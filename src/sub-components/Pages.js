import React, { useEffect, useState } from "react";
import { PageContext } from "../context/page_context";
import { GithubContext } from "../context/github_context";

const Pages = () => {
	const { page, setPage, prevPage, lastPage, fetchRepos } =
		React.useContext(PageContext);
	const { repos } = React.useContext(GithubContext);

	const pagesArray = [];
	for (let i = 1; i <= lastPage; i++) {
		pagesArray.push(i);
	}

	if (repos) {
		return (
			<div>
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
			</div>
		);
	}
};

export default Pages;
