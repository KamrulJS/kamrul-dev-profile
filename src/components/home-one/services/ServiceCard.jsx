import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";

function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="aximo-iconbox-wrap">
			<div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="aximo-iconbox-data flex flex-row justify-between items-end gap-5">
				<div className="content-service">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div style={{border: "1px solid #e0e0e0", padding: "8px", borderRadius: "5px"}}>
					<Link to="/single-service" className="aximo-icon" >
						<img src={ArrowRightImg} alt="arrow right" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
