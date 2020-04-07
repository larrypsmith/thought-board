import React from 'react';
import Contributor from './contributor';
import './footer.scss';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.contributors = [
      {
        name: 'Larry Smith',
        linkedInUrl: 'https://www.linkedin.com/in/larrypaulsmith/',
        githubUrl: 'https://github.com/larrypsmith'
      },
      {
        name: 'Alec Keeler',
        linkedInUrl: 'https://www.linkedin.com/in/alec-keeler-a8499083/',
        githubUrl: 'https://github.com/Alec-Keeler'
      },
      {
        name: 'Brennan Romance',
        linkedInUrl: 'https://www.linkedin.com/in/brennanromance/',
        githubUrl: 'https://github.com/romance939913'
      },
      {
        name: 'Spencer Iascone',
        linkedInUrl: 'https://www.linkedin.com/in/spencer-iascone-56b28b62/',
        githubUrl: 'https://github.com/siascone'
      } 
    ]
  }
  
  
  render() {
    return (
      <div className="footer">
        {/* <div className='lab-coat'></div> */}
        <div className='footer-conts'>
          <h2>Contributors</h2>
          <ul className="contributors-list">
            {
              this.contributors.map((contributor, i) => (
                <Contributor
                name={contributor.name}
                linkedInUrl={contributor.linkedInUrl}
                githubUrl={contributor.githubUrl}
                key={i} />
              ))
            }
          </ul>

        </div>
      </div>
    )
  }
}