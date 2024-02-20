// Dashboard.js
import React, { useState, useEffect } from 'react';
import Module from './Module';

const Dashboard = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const savedModules = JSON.parse(localStorage.getItem('dashboardModules'));
    if (savedModules) {
      setModules(savedModules);
    } else {
      // Initialize modules if no saved data
      setModules([
        { id: 1, name: 'Workshops', description: 'A card-like module with a "View Schedule" button.' },
        { id: 2, name: 'Get Support', description: 'A card-like module with a search bar and contact information.' },
        { id: 3, name: 'Insights', description: 'A graph or chart representing data insights.' },
        { id: 4, name: 'My Badges', description: 'A card-like module displaying earned badges with icons.' },
        { id: 5, name: 'Community', description: 'A card-like module with a feed or forum-like interface.' },
        { id: 6, name: 'Help to Us Improve', description: 'A feedback form or survey component.' },
        { id: 7, name: 'Intensive Retreats & Teacher Trainings', description: 'A card-like module with links or information.' },
        // Add more modules as needed
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboardModules', JSON.stringify(modules));
  }, [modules]);

  const moveModule = (dragIndex, hoverIndex) => {
    const draggedModule = modules[dragIndex];
    setModules(prevModules => {
      const updatedModules = [...prevModules];
      updatedModules.splice(dragIndex, 1);
      updatedModules.splice(hoverIndex, 0, draggedModule);
      return updatedModules;
    });
  };

  return (
    <div className="dashboard">
      {modules.map((module, index) => (
        <Module
          key={module.id}
          id={module.id}
          index={index}
          name={module.name}
          description={module.description}
          moveModule={moveModule}
        />
      ))}
    </div>
  );
};

export default Dashboard;
