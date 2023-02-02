import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<div className="Home-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Home;