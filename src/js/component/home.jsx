import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Card from "./card";
import Jumbo from "./jumbo";


//create your first component
function Home() {
	return (
		
		<div className="container">
			<Navbar />
			
			<Jumbo />
			<div className="text-center">
				<Card />
			</div>
		</div>
	);
};

export default Home;


