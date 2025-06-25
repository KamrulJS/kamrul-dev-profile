import { useLocation, useParams } from "react-router-dom";
import Single1Img from "../../../assets/images/portfolio/p_single.png";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import { useEffect, useState } from "react";
// Import the promise, not the direct data
import projectsDataPromise from "../../../page/Database/Projects_database";


function PortfolioDetails() {


  	// const { project_title } = useParams(); // Get the project_title from the URL

    const location = useLocation();
    // console.log("location", location);
    const id = location.state?.id;

	// --- State to manage the fetched and found project data ---
	const [projectDetails, setProjectDetails] = useState(null);
	const [loading, setLoading] = useState(true); // Start with loading true
	const [error, setError] = useState(null);

  // --- useEffect to handle asynchronous data fetching and finding ---
  useEffect(() => {

    const fetchAndFindProject = async () => {
      try {
        setLoading(true); // Set loading to true at the start of fetch
        setError(null);   // Clear any previous errors

        const allProjects = await projectsDataPromise;
        // console.log("All projects data (after await):", allProjects);

        if (!Array.isArray(allProjects)) {
          throw new Error("Projects data is not an array. Please check Projects_database.js.");
        }

        const foundProject = allProjects.find(project => String(project?._ID) === id);
        setProjectDetails(foundProject); // Update state with the found project

        console.log("Found Project Details (after find):", foundProject);

        if (!foundProject) {
          setError(new Error(`Project with ID "${id}" not found.`));
        }

      } catch (err) {
        console.error("Error fetching or finding project:", err);
        setError(err); // Set error state if fetching or finding fails
        setProjectDetails(null); // Ensure projectDetails is null on error
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchAndFindProject(); // Call the async function
  }, [id]); // Dependency array: Re-run this effect whenever the URL 'project_title' changes

  
  // --- Conditional Rendering based on loading/error/data states ---
  if (loading) {
    return (
      <div className="aximo-project-single-section text-center py-20">
        <p>Loading project details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="aximo-project-single-section text-center py-20 text-red-600">
        <p>Error: {error.message}</p>
        <p>Please ensure the API is accessible and the project ID is valid.</p>
      </div>
    );
  }

  if (!projectDetails) {
    // This handles cases where loading is false, no error, but projectDetails is null (e.g., project not found after search)
    return (
      <div className="aximo-project-single-section text-center py-20">
        <p>Project details not found.</p>
        <p>Please go back to the portfolio page.</p>
        {/* You might add a Link back here */}
      </div>
    );
  }

  // If we reach here, it means loading is complete, no error, and projectDetails is found.
  return (
    <div className="aximo-project-single-section">
      <div className="container">
        <FadeInUp className="aximo-project-single-thumb reveal reveal--top">
          {/* Use projectDetails.project_image or similar if available */}
          <img src={projectDetails.project_image || Single1Img} alt={projectDetails.project_title || "Project Image"} />
        </FadeInUp>
        <div className="aximo-project-info-wrap">
          <div className="aximo-project-info">
            <h3>Client:</h3>
            <p>{projectDetails.client || 'N/A'}</p> {/* Use actual data if available */}
          </div>
          <div className="aximo-project-info">
            <h3>Date:</h3>
            <p>{projectDetails.date || 'N/A'}</p> {/* Use actual data if available */}
          </div>
          <div className="aximo-project-info">
            <h4><b>Duration: </b></h4>
            <p>{projectDetails.duration || 'N/A'}</p> {/* Use actual data if available */}
          </div>
          <div className="aximo-project-info">
            <h3>Cost:</h3>
            <p>{projectDetails.cost || 'N/A'}</p> {/* Use actual data if available */}
          </div>
        </div>
        <div className="aximo-project-single-wrap">
          <div className="row">
            <div className="col-lg-4 order-lg-2">
              <FadeInRight className="aximo-project-single-thumb2 ">
                {/* Use projectDetails.project_image or similar for the second image too */}
                <img className="lg:h-[550px] h-[450px] w-full object-cover" src={projectDetails.project_image || Single2Img} alt={projectDetails.project_title || "Project Image"} />
              </FadeInRight>
            </div>
            <div className="col-lg-8">
              <div className="aximo-default-content m-right-gap">
                <h2>
                  <span className="aximo-title-animation">
                    {/* Access title correctly, potentially from project_title or title.rendered */}
                    {projectDetails.project_title || projectDetails.title?.rendered || "Project Title Not Available"}
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  {projectDetails.description || "No description available for this project."}
                </p>
              </div>
              <div className="tech-loop technology-used flex flex-wrap gap-2">
                {/* Check if langusage exists and is an array before mapping */}
                {projectDetails.langusage && Array.isArray(projectDetails.langusage) ? (
                  projectDetails.langusage.map((item, index) => (
                    <span key={index} className="technology-used">{item}</span>
                  ))
                ) : (
                  <p>No technologies listed.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetails;