import { Outlet, useLocation } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
import { useEffect, useState } from "react";
import { Alert, Flex, Spin } from 'antd';



function Layout() {

	useScrollTop();
	
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 800);

		return () => clearTimeout(timer);
	}, [location.pathname]);

	return (
		<>
			<Preloader />
			<Outlet />
			<ScrollToTop />
			{isLoading && (
				<div className="fixed inset-0 z-50 flex items-center justify-center gap-6 bg-black bg-opacity-75 backdrop-blur-md">
					{/* <p className="text-xl font-semibold text-white">Loading...</p>
						<Spin tip="Loading" size="large"></Spin> */}
				</div>
			)}
		</>
	);
}

export default Layout;
