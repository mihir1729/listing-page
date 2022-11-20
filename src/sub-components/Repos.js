import React from "react";
import { Language } from "./index";
import styled from "styled-components";

const Repos = ({ name, description }) => {
	return (
		<div>
			<Wrapper>
				<h2>{name}</h2>
				<p>{description}</p>
				<Language name={name} />
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	width: 25rem;
	border-radius: 2px;
	background: #f1f5f8;
	height: 11.5rem;
	margin-left: 15rem;
	margin-top: 2rem;

	h2 {
		padding: 0.2rem 0 0 1rem;
	}

	p {
		font-size: 1rem;
		padding: 0.2rem 0 0 1rem;
	}
`;

export default Repos;
