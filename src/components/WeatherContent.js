import React from 'react';
import './WeatherContent.css';

function WeatherContent(){ 
    return (
        <div className="WeatherContent scroll">
            <div className="tempProblem">
                <ul className="tempList">
                    <li>1.5도 상승</li>
                    <li>2도 상승</li>
                    <li>4도 상승</li>
                </ul>
            </div>
        </div>
    )
}

export default WeatherContent;