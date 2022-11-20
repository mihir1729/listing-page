import React, { useState, useEffect } from "react";
import { PageContext } from "../context/page_context";

const Button = () => {
	const { page, setPage, prevPage, nextPage, fetchRepos } =
		React.useContext(PageContext);

	return (
		<div>
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
		</div>
	);
};

export default Button;
