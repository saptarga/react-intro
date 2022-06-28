import logo from "./logo.svg";
import "./App.css";

const App = () => {
	const favoriteFood = ["Cheese", "Cake"];
	return (
		<div>
			<h1>Hello React</h1>
			<ul>
				<li>{favoriteFood[0]}</li>
				<li>{favoriteFood[1]}</li>
			</ul>
		</div>
	);
};

export default App;
