import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn pill aximo-header-btn px-2" to="/contact-us">
				Working Process
			</Link>
		</div>
	);
}

export default HeaderButton;
