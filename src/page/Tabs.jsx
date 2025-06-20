import React from 'react';
import { Segmented, Tabs } from 'antd';
import { use } from 'react';
import servicesData from './Database/Projects_database';



const onChange = key => {
  console.log(key);
};

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
];


const App = () => {

  const [alignValue, setAlignValue] = React.useState('left');
// console.log(servicesData)

  return (
    <>
      <Segmented
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={['start', 'center', 'end']}
      />


      <div>
        {
          servicesData.map((item, index) => (
            // console.log(item.serviceName)
            <div>
              {item.projects.map((project, index) => (
                console.log(project.length),
                <div>
                <h3 className='text-red-700'>{project.length}</h3>
                <h2>{project.title}</h2>
                </div>
              ))}
            </div>
        ))}
      </div>
          
        
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{ size: origin => origin - 20, align: alignValue }}
      />
    </>
  );
};
export default App;