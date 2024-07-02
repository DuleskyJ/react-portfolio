import React from 'react';

function Project({ title, description, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <div>
        {deployedUrl ? (
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        ) : (
          <p>No deployed application available</p>
        )}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;