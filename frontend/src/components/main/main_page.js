import React from "react";
import './main.scss'
import Footer from '../../components/footer/footer';

class MainPage extends React.Component {
  render() {
    return (
      <div className='main-div'>
        <div className='main-conts'>
          <h1 className='main-header'>Welcome to Thought-Board</h1>
          <ul className='main-notes-list-cont'>
            <pre className='main-note'><i className="fas fa-thumbtack"></i>   Visually track your thoughts and notes!</pre>
            <pre className='main-note'><i className="fas fa-thumbtack"></i>   Upload images and place them on your board!</pre>
            <pre className='main-note'><i className="fas fa-thumbtack"></i>   Create visual connections between your notes and images!</pre>
            <pre className='main-note'><i className="fas fa-thumbtack"></i>   Share your board with others for group projects!</pre>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
