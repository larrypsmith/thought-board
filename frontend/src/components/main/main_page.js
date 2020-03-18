import React from "react";
import './main.scss'

class MainPage extends React.Component {
  render() {
    return (
      <div className='main-div'>
        <h1 className='main-header'>Welcome to Thought-Board</h1>
        <ul className='main-notes-list-cont'>
          <li className='main-note'><i className="fas fa-thumbtack"></i>Visually track your thoughts and notes!</li>
          <li className='main-note'><i className="fas fa-thumbtack"></i>Upload images and place them on your board!</li>
          <li className='main-note'><i className="fas fa-thumbtack"></i>Create visual connections between your notes and images!</li>
          <li className='main-note'><i className="fas fa-thumbtack"></i>Share your board with others for group projects!</li>
        </ul>
      </div>
    );
  }
}

export default MainPage;
