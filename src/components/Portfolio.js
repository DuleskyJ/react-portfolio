import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Javascript Trivia Quiz!',
      description: 'Created a timed trivia quiz set with questions all about Javascript',
      imageUrl: 'path-to-project1-image.jpg',
      deployedUrl: 'https://duleskyj.github.io/RealJavaQuiz/',
      repoUrl: 'https://github.com/DuleskyJ/RealJavaQuiz'
    },
    {
      title: 'Password Generator!',
      description: 'Creates a randomized password for the user',
      imageUrl: 'path-to-project2-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/PasswordGenerator'
    },
    {
      title: 'Stage event planner!',
      description: 'COACHELLA must have! Stay tracked in crowds',
      imageUrl: 'path-to-project3-image.jpg',
      deployedUrl: 'https://stagedevents-047a896676c3.herokuapp.com/signup',
      repoUrl: 'https://github.com/DuleskyJ/STAGED'
    },
    {
      title: 'Readme Generator!',
      description: 'Created a README generator for the funs and sake of it. Get more practice in and hopefully create a tool I can utilize in the future!',
      imageUrl: 'path-to-project4-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/READTHIS'
    },
    {
      title: 'Note Nanny!',
      description: 'An application I built with Express.js to retrieve, write, and save notes.',
      imageUrl: 'path-to-project5-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/NoteNanny'
    },
    {
      title: '9-5 Schduler',
      description: 'It doesnt have to be 9-5 because of my added functionality but it is an awesome available planner',
      imageUrl: 'path-to-project6-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/SCHEDULER'
    },
    {
      title: 'Social-Serving',
      description: 'A backend API Ive built for potential social media sites',
      imageUrl: 'path-to-project7-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/SOCIAL-SERVIN'
    },
    {
      title: 'SVG-LOGOMAKER',
      description: ' Node.js command-line application thatll take user input to generate a logo and make it a nice SVG file.',
      imageUrl: 'path-to-project8-image.jpg',
      deployedUrl: null,
      repoUrl: 'https://github.com/DuleskyJ/SVG-LOGOMAKER'
    },
    {
      title: 'TECH-BLOG',
      description: 'A CMS-style blog site where handsome developers like me can publish their blog posts and comment on other developers posts as well.',
      imageUrl: 'path-to-project9-image.jpg',
      deployedUrl: 'https://tech-bloggers-8732df1fc57a.herokuapp.com/',
      repoUrl: 'https://github.com/DuleskyJ/TECH-BLOG'
    },
    {
      title: 'Travel API',
      description: 'Made a fully functional travel planner',
      imageUrl: 'path-to-project10-image.jpg',
      deployedUrl: 'https://duleskyj.github.io/TravelAPI/',
      repoUrl: 'https://github.com/DuleskyJ/TravelAPI'
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;