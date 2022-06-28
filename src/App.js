import logo from "./logo.svg";
import "./App.css";
import ButtonClass from "./components/ButtonClass";
import ButtonFunction from "./components/ButtonFunction";

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
			<ButtonClass />
			<ButtonFunction />
		</div>
	);
};

export default App;
