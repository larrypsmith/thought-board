import React from 'react';

export default props => (
  <li className="contributor">
    <h3>{props.name}</h3>
    <a href={props.linkedInUrl}>
      LinkedIn
      {/* <i class="fab fa-linkedin fa-lg"></i> */}
    </a>
    <a href={props.githubUrl}>
      GitHub
      {/* <i class="fab fa-github fa-lg"></i> */}
    </a>
  </li>
)