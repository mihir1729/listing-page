import React from "react";
import { Info, Pagination, Repo, Search } from "./components/index";

function App() {
	return (
		<>
			<Search />
			<Info />
			<Repo />
			<Pagination />
		</>
	);
}

export default App;
