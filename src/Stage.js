import React from 'react';
import './Stage.css';


const Stage = () => {
  return (
    <div className="app-container">
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/Rectangle26.png'} alt="Background" className="background" />
        <div className="vectors">
          <img src={process.env.PUBLIC_URL + '/Vector22.png'} alt="Vector 22" className="vector22" />
          <img src={process.env.PUBLIC_URL + '/Vector23.png'} alt="Vector 23" className="vector23" />
        </div>
        <div className="box box1">
        <img src={process.env.PUBLIC_URL + '/MIC.png'} alt="Microphone" className="icon" width={230}/>
          <div className="box-content">
            <p className="main-text">중앙무대 공연</p>
            <p className="sub-text">Center stage</p>
            <p className="sub-text">Performance</p>
          </div>
        </div>
        <div className="box box2">
        <img src={process.env.PUBLIC_URL + '/Star_Balloon.png'} alt="Star Balloon" className="icon" width={180}/>
          <div className="box-content">
            <p className="main-text">길거리 공연</p>
            <p className="sub-text">Street Performance</p>
          </div>
        </div>
        <button className="back-button">처음으로</button>
        
      </div>
    </div>
  );
}

export default Stage;
