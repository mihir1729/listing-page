import React from "react";
import styled from "styled-components";
import { Image, Details } from "../sub-components/index";

const Info = () => {
	return (
		<>
			<Wrapper>
				<Image />
				<Details />
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 35% auto;
	margin-top: 2rem;
`;

export default Info;
