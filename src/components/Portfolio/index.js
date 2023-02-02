import React, { useState } from 'react';
import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';
import data from '../../data';
import './index.css';

export default function Portfolio() {
  const [selected, setSelected] = useState('All');
  const [projects, setProjects] = useState(data);

  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const filterProjects = (category) => {
    category === 'All'
      ? setProjects(data)
      : setProjects(data.filter((item) => item.category === category));
  };

  const handleSelectFilter = (evt) => {
    const category = evt.target.innerText;
    setSelected(category);
    filterProjects(category);
  };

  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList data={projects} />
    </div>
  );
}
