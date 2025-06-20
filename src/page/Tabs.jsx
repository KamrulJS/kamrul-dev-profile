import React from 'react';
import { Segmented, Tabs } from 'antd';
import { use } from 'react';
import servicesData from './Database/Projects_database';



const onChange = key => {
  console.log(key);
};

// const items = [
//   { key: '1', 
//     label: 'Tab 1', 
//   },
//   { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
// ];


 const ServiceItems = servicesData.map((service, idx) => ({

    key: String(idx + 1),
    label: service.serviceName || `Service ${idx + 1}`,
    children: (
      console.log(service),
      <div className=' p-6'>
        {/* <h2 className=" mb-4">{service.serviceName}</h2> */}
        <div className='grid grid-cols-4 gap-5 rounded-xl'>
          
        {service.projects.map((project, index) => (
          
          <div key={index} className='bg-[#BFF747] p-4 flex flex-col justify-between items-start rounded-xl gap-4'>
            {/* {project.img} */}
            <div>
              <img height={300} src={project.img} alt="asfcasfas" />
              <h3>{project.title}</h3>
              <h6>{project.title}</h6>
            </div>
            {/* button and technology */}
            <div className= "flex justify-between items-center gap-5">
              <div className="tech-loop flex flex-wrap gap-2">
                {project.technology_used.map((items, index) => (
                  console.log(items),
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "1.2em !important", backgroundColor:"#000", padding: "3px 8px", borderRadius: "4px",}}>{items}</span>
                ))}
              </div>
              <div>
                <button style={{padding: "15px", border: "1px solid red", borderRadius: "25px", backgroundColor: "black", color: "#fff"}}>View</button>
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
    <div className='project-showcase py-24'>
      {/* <Segmented
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={['start', 'center', 'end']}
      />    */}
        
      <Tabs
        defaultActiveKey="1"
        items={ServiceItems}
        onChange={onChange}
        indicator={{ size: origin => origin - 20, align: alignValue }}
      />
    </div>
  );
};
export default App;