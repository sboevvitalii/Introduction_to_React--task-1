import logo from "./logo.svg";
import "./App.css";

function App() {
  let formInnerHTML = `
	<div class="App">
		<header class="App-header">
			<img src=${logo} class="App-logo" alt="logo" >
			<p>
			Edit <code>src/App.js</code> and save to reload.2
			</p>
			<a class="App-link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
			Learn React
			</a>
		<div>
				<h2>Сегодня, ${createYear.getFullYear()} год!</h2>
		</div>
		</header>
		<footer></footer>
	</div>
	`;
  document.body.innerHTML += formInnerHTML;
}
const createYear = new Date();
export default App;
