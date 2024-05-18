import React from 'react';
import './Street_Stage.css';

const Street_Stage = () => {
    return (
        <div className="app-container">
            <div className="container">
                <img src={process.env.PUBLIC_URL + '/Rectangle26.png'} alt="Background" className="background" />
                <div className="box">
                    <img src={process.env.PUBLIC_URL + '/Street_table.png'} alt="Street Table" className="street-table" />
                </div>
                <button className="prev-button">이전</button>
                <button className="back-button">처음으로</button>
            </div>
        </div>
    );
}

export default Street_Stage;
