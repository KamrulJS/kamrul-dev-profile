import React, { useState, useEffect } from 'react';
import { Segmented, Tabs } from 'antd';
import { Link } from 'react-router-dom';
// Import the Promise that resolves with your data
import projectsDataPromise from './Database/Projects_database'; // Correct import name

const onChange = key => {
  console.log(key);
};

const Tab = () => {
  // State to hold the fetched projects data
  const [projectsData, setProjectsData] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage any errors during fetching
  const [error, setError] = useState(null);

  // State for Ant Design Segmented control (align value)
  const [alignValue, setAlignValue] = useState('center');

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        setError(null);   // Clear any previous errors

        // Await the promise to get the actual data
        const fetchedData = await projectsDataPromise;
        setProjectsData(fetchedData); // Update state with fetched data
      } catch (err) {
        console.error("Error loading projects data:", err);
        setError(err); // Set error state if fetching fails
        setProjectsData([]); // Ensure projectsData is an empty array on error
      } finally {
        setLoading(false); // Set loading to false after fetching (success or failure)
      }
    };

    loadProjects();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // --- Conditional Rendering based on loading/error states ---
  if (loading) {
    return (
      <div className='project-showcase container py-24 text-center'>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='project-showcase container py-24 text-center text-red-600'>
        <p>Error loading projects: {error.message}</p>
        <p>Please check your internet connection or API availability.</p>
      </div>
    );
  }

  // If no data is found after loading (e.g., API returned empty array)
  if (!projectsData || projectsData.length === 0) {
    return (
      <div className='project-showcase container py-24 text-center'>
        <p>No projects found.</p>
      </div>
    );
  }

  // If data is loaded successfully, proceed to map and render
  // Step 2: Map by each project
  const items = projectsData.map((project, idx) => ({
    key: String(idx + 1),
    // Ensure project.categories exists and is a string, or provide fallback
    label: project.categories || `Category ${idx + 1}`,
    children: (
      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-xl'>
          <div className='project-card bg-[#BFF747] p-4 flex flex-col justify-between items-start rounded-xl gap-3'>
            {/* Image + Title + Description */}
            <div className='img-content flex flex-col gap-2'>
              {/* console.log(project) is generally not recommended directly inside render method,
                  it will log on every re-render. Do it inside useEffect or a utility function if needed */}
              <img
                className='w-[200px] object-container rounded-lg'
                src={project.project_image || "/images/fallback.jpg"}
                alt={project.title || "No Image"}
              />

              <h4>{project.project_title || "Untitled Project"}</h4>
              <span className='line-clamp-2 text-sm leading-6 text-gray-700'>
                {project.description || "No description available."}
              </span>
            </div>

            {/* Technologies + View button */}
            <div className="flex justify-between items-center gap-4 w-full"> {/* Added w-full for full width */}
              <div className="tech-loop technology-used flex flex-wrap gap-2">
                {/* Assuming project.langusage is an array of strings like ["React", "Node.js"] */}
                {project.langusage && project.langusage.map((item, i) => (
                  <span key={i} className="technology-used text-xs bg-gray-200 px-2 py-1 rounded">
                    {item.trim()}
                  </span>
                ))}
              </div>
              <div>
                <Link to={`/single-portfolio/${project._ID || project.ID || 'default-id'}`}> {/* Use _id or ID, provide fallback */}
                  <button className='project-view bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }));


  return (
    <div className='project-showcase container py-24'>
      <Segmented
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={['start', 'center', 'end']}
      />

      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{ size: origin => origin - 20, align: alignValue }}
      />
    </div>
  );
};

export default Tab;