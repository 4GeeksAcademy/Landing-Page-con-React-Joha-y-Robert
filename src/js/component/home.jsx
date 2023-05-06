import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";



//create your first component
function Home() {
	return (
		<>
			
			<div className="text-center">
				<Card />
			</div>
		</>
	);
};

export default Home;


