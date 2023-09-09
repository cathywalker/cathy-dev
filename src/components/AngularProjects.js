import React from 'react';

const AngularProjects = () => {
  return (
    <div>
      <h1>Angular Projects</h1>
      <div>I began developing in Angular in 2018. Some of the work I got from Clients was requested in this Framework. It is a steep learning curve but a fully fledged Framework once you can get over the hump. I am creating an Angular to React translation course and React to Angular Translation Course which will be available in Late 2023. I currently work making features for and maintaining a large HR website in Angular. I am preparing to upgrade to Angular 16 so we can utilise Signals. <p>Below is a taster of my some of my other Angular projects with links to GitHub:</p> </div>
      <div>
        <h2>Cat Facts</h2>    
        <p>A website to display Cat Facts, sign up for a Cat Facts Newsletter and play a 'Raining Cats' Mini Game.</p>     
        <img
          src="https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/cat-facts_C7-dFO2HZ.png"
          alt="Cat Facts"
          srcset="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/cat-facts_C7-dFO2HZ.png 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/cat-facts_C7-dFO2HZ.png 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-1000/cat-facts_C7-dFO2HZ.png 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
      </div>
      <a href="https://github.com/cathywalker/cat-facts" target="_blank">GitHub Repo</a>
    </div>
  );
};

export default AngularProjects;
