import { useParams } from "react-router-dom";
import Single1Img from "../../../assets/images/portfolio/p_single.png";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import projectsData from "../../../page/Database/Projects_database";
import { useEffect, useState } from "react";



function PortfolioDetails() {

	const { id } = useParams(); // This will give you the '12' string from the URL
	const idx = id; // Renaming for consistency with your variable name 'idx'
	console.log("ID from URL:", idx);


	const projectDetails = projectsData.find(project => project._ID === idx);

	console.log("Found Project Details:", projectDetails);

	// 1. State to hold the fetched data
  	const [data, setData] = useState(); 
	//console.log(data);
  
	// 2. State to manage loading status
	const [loading, setLoading] = useState(false); 
  
	// 3. State to handle any errors
	const [error, setError] = useState(null); 

  // 4. useEffect hook for fetching data
// useEffect(() => {
//     const fetchData = async () => {
//       // Set loading to true at the very beginning of the fetch operation
//       setLoading(true); 
//       setError(null); // Clear any previous errors

//       try {
//         const username = 'mkkamrulislampk@gmail.com';
//         // This is your Application Password
//         const password = 'mZ7j klzt wqH7 hdzu 6Dip ORzS'; 

//         // Encode the username and password in Base64
//         const encodedCredentials = btoa(`${username}:${password}`);

//         const response = await fetch('https://api-portfolio.kamruldevs.com/wp-json/jet-cct/portfolio', {
//           method: 'GET', // Or 'POST', 'PUT', etc. depending on your API needs
//           headers: {
//             // Add the Authorization header for Basic Auth
//             'Authorization': `Basic ${encodedCredentials}`,
//             'Content-Type': 'application/json' // Often required for POST/PUT, good practice for GET too
//           }
//         });
        
//         // Always check for a successful response (status 200-299)
//         if (!response.ok) {
//           // If the response is not OK, throw an error
//           // For auth issues, response.status might be 401 (Unauthorized) or 403 (Forbidden)
//           throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
//         }
        
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         console.error("Fetch error:", err); // Log the error for debugging
//         setError(err); // Set the error state
//       } finally {
//         setLoading(false); // Always set loading to false when the fetch is complete
//       }
//     };

//     fetchData(); // Execute the fetch function when the component mounts
//   }, []);




	
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<FadeInUp className="aximo-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</FadeInUp>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<p>Alfado Company,UK</p>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<p>June</p>
					</div>
					<div className="aximo-project-info">
						<h4><b>Duration: </b></h4>
						<p> Two Months</p>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<p>50k USD</p>
					</div>
				</div>
				<div className="aximo-project-single-wrap">
					<div className="row">
						<div className="col-lg-4 order-lg-2">
							<FadeInRight className="aximo-project-single-thumb2 ">
								<img  className="lg:h-[550px] h-[450px] w-full object-cover" src={Single2Img} alt="Single 2" />
							</FadeInRight>
						</div>
						<div className="col-lg-8">
							<div className="aximo-default-content m-right-gap">
								<h2>
									<span className="aximo-title-animation">
										{ProjectDetails.title}
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
									The project began when a leading technology identified a market need for an
									innovative and energy-efficient smart home thermostat.
								</p>
							</div>
							<div className="tech-loop technology-used flex flex-wrap gap-2">
								{/* {ProjectDetails.technology_used.map((items, index) => (
								// console.log(items),
									<span key={index} className="technology-used">{items}</span>
								))} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
