import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'path-to-project1-image.jpg',
      deployedUrl: 'https://project1.com',
      repoUrl: 'https://github.com/username/project1'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
