import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Main from "./components/Main"
import About from "./pages/About"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> } >
					<Route path="/" element={ <Main /> } />
					<Route path="/about" element={ <About /> } />
				</Route>
				{/* <Route path="*" component={ <Home /> } /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
