import React from "react";

import { Game } from "./tictactoe.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Game />
		</div>
	);
}
