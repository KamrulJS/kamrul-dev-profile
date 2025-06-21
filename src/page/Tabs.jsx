import React from 'react';
import { Segmented, Tabs } from 'antd';
import servicesData from './Database/Projects_database';
import { Link } from 'react-router-dom';



const onChange = key => {
  console.log(key);
};

console.log(servicesData);


// const items = [
//   { key: '1', 
//     label: 'Tab 1', 
//   },
//   { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
// ];



//  const ServiceItems = servicesData.map((service, idx) => ({

//     key: String(idx + 1),
//     label: service.serviceName || `Service ${idx + 1}`,
//     children: (
//       <div className=' p-6'>
//         {/* <h2 className=" mb-4">{service.serviceName}</h2> */}
//         <div className='grid grid-cols-4 gap-4 rounded-xl'>
          
//         {service.projects.map((project, index) => (
          
//           <div key={index} className='project-card bg-[#BFF747] p-4 flex flex-col justify-between items-start rounded-xl gap-3'>    
//             {/* Top image and content */}
//             <div className='img-content flex flex-col gap-2'>
//               <img className='h-[200px] w-full object-cover rounded-lg' src={project.img} alt="Image None" />
//               <h4>{project.title}</h4>
//               <span className='line-clamp-2 text-sm leading-6 text-gray-700'>{project.description}</span>
//             </div>

//             {/* --------------      button and technology    ---------------------------   */}
//             <div className= "flex justify-between items-center gap-4">
//               <div className="tech-loop technology-used flex flex-wrap gap-2">
//                 {project.technology_used.map((items, index) => (
//                   // console.log(items),
//                     <span key={index} className="technology-used">{items}</span>
//                 ))}
//               </div>
//               <div>
//                 <Link to={`/single-portfolio/${project.id}`}> <button className='project-view'>View</button></Link>
//               </div>
//             </div>
            
//           </div>
//         ))}
//         </div>
//       </div>
//     )
//   }));

  // const allTechnologies = Array.from(
  //   new Set(
  //     servicesData.flatMap(service =>
  //       service.categories
  //         ? service.categories.map(tech => tech.trim())
  //         : []
  //     )
  //   )
  // );

  // console.log(allTechnologies)

  // Step 2: Map by each tech
  const items = servicesData.map((tech, idx) => ({
    key: String(idx + 1),
    label: tech.categories,
    children: (
      <div className='p-6'>
        <div className='grid grid-cols-4 gap-4 rounded-xl'>
          {servicesData.map((service, index) => (
              <div key={index} className='project-card bg-[#BFF747] p-4 flex flex-col justify-between items-start rounded-xl gap-3'>
                {/* Image + Title + Description */}
                <div className='img-content flex flex-col gap-2'>
                  <img
                    className='h-[200px] w-full object-cover rounded-lg'
                    src={service.image || "/images/fallback.jpg"}
                    alt={service.title || "No Image"}
                  />
                  <h4>{service.title}</h4>
                  <span className='line-clamp-2 text-sm leading-6 text-gray-700'>
                    {service.description || "No description available."}
                  </span>
                </div>

                {/* Technologies + View button */}
                <div className="flex justify-between items-center gap-4">
                  <div className="tech-loop technology-used flex flex-wrap gap-2">
                    {/* {service.langusage.map((item, i) => (
                      <span key={i} className="technology-used">{item.trim()}</span>
                    ))} */}
                  </div>
                  <div>
                    <Link to={`/single-portfolio/${service._ID}`}>
                      <button className='project-view'>View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }));





const App = () => {

  const [alignValue, setAlignValue] = React.useState('center');
// console.log(servicesData)



  return (
    <div className='project-showcase container py-24'>
      {/* <Segmented
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={['start', 'center', 'end']}
      />    */}
        
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{ size: origin => origin - 20, align: alignValue }}
      />
    </div>
  );
};





export default App;