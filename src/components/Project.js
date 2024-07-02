import React from 'react';

function Project({ title, description, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
}

export default Project;