import BreadCrumb from "../../components/common/Breadcrumb";
import PortfolioList from "../../components/portfolio/one/PortfolioList";
import Tabs from "../Tabs"


function PortfolioOneColumn() {
	return (
		<>
			<BreadCrumb title="Portfolio One Column" />
			<PortfolioList />
			<Tabs/>
		</>
	);
}

export default PortfolioOneColumn;
