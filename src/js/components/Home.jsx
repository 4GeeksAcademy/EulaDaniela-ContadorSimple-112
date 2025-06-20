import React from "react";
import SecondsCounter from "./SecondsCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<>
			<SecondsCounter digito1={digito1} digito2={digito2} digito3={digito3} digito4={digito4} digito5={digito5} digito6={digito6}/>
		</>
	);
};

export default Home;