import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<div className="Home-content">
				<Outlet />
			</div>
		</div>
	);
};

export default Home;