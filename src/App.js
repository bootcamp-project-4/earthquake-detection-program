// Styling
import "./styles/sass/App.scss";

//modules
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";
import MapPage from "./components/MapPage";
import HeroProfile from "./components/HeroProfile";
import ErrorPage from "./components/ErrorPage";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/questionspage' element={<QuestionsPage />} />
				<Route path='/mappage' element={<MapPage />} />
				<Route path='/heroprofile/' element={<HeroProfile />} />
				<Route path="/*" element={ <ErrorPage /> } />
			</Routes>
		</div>
	);
}

export default App;
