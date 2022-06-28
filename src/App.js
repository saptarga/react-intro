import logo from "./logo.svg";
import "./App.css";

const App = () => {
	const favoriteFood = ["Cheese", "Cake"];
	return (
		<div>
			<h1>Hello React</h1>
			<ul>
				{favoriteFood.map((food) => {
					return <li>{food}</li>;
				})}
			</ul>
		</div>
	);
};

export default App;
