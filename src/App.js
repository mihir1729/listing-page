import React from "react";
import { Info, Pagination, Repo, Search } from "./components/index";
import { GithubContext } from "./context/github_context";
import { PageContext } from "./context/page_context";
import loadingImage from "./images/preloader.gif";
import styled from "styled-components";

function App() {
	const { isLoading } = React.useContext(GithubContext);
	const { isRepoLoading } = React.useContext(PageContext);

	if (isLoading || isRepoLoading) {
		return (
			<>
				<Wrapper>
					<Search />
					<img src={loadingImage} alt='loading' className='loading-img' />
				</Wrapper>
			</>
		);
	}

	return (
		<>
			<Search />
			<Info />
			<Repo />
			<Pagination />
		</>
	);
}

const Wrapper = styled.div`
	img {
		margin-left: 40%;
		margin-top: 2rem;
	}
`;

export default App;
