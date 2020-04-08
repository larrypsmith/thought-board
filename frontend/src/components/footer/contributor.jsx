import React from 'react';

export default props => (
  <li className="contributor">
    <h3>{props.name}</h3>
    <div className='contributor-links'>
      <a href={props.linkedInUrl}>
        <i className="fab fa-linkedin fa-lg"></i>
        LinkedIn
      </a>
      <a href={props.githubUrl}>
        <i className="fab fa-github fa-lg"></i>
        GitHub
      </a>

    </div>
  </li>
)