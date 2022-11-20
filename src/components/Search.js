import React from "react";
import { GithubContext } from "../context/github_context";
import styled from "styled-components";

const Search = () => {
	const { searchGithubUser, setIsLoading, userName, setUserName } =
		React.useContext(GithubContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		searchGithubUser(userName);
	};

	return (
		<div>
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<div className='form'>
						<input
							type='text'
							placeholder='enter github user'
							value={userName}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
						/>
						<button type='submit'>search</button>
					</div>
				</form>
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	.form {
		display: flex;
		justify-content: center;
		margin-top: 1rem;

		input {
			border-color: transparent;
			outline-color: #9eb2c7;
			letter-spacing: 0.1rem;
			color: #324d67;
			padding: 0.25rem 0.5rem;
			background: #f1f5f8;
		}

		input::placeholder {
			color: #324d67;
			text-transform: capitalize;
			letter-spacing: 0.1rem;
		}

		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25rem 0.5rem;
			text-transform: capitalize;
			letter-spacing: 0.1rem;
			background: #e0fcff;
			cursor: pointer;
			margin-left: 0.2rem;
		}

		button:hover {
			background: #bff8fd;
		}

		input,
		button {
			font-size: 1.3rem;
		}
	}
`;

export default Search;
