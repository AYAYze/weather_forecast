import React from 'react';
import { useState } from 'react';
import './WeatherContent.css';

function Onepointfive() {
    return (
        <div className="description">
            <ul>
                <li>산호초 멸종률: 70~90%</li>
                <li>연안 홍수 위험: 보통</li>
                <li>여름철 평균온도: 3도 상승</li>
                <li>생물종 절반 절멸률</li>
                <li> 곤충 6%</li>
                <li> 식물 8%</li>
                <li> 척추동물 4%</li>
                <li> 육지 생태계 변화율: 약 6.5%</li>
                <li> 어획량 150만t 감소</li>
            </ul>
        </div>
    )
}

function Two() {
    return (
        <div className="description">
            <ul>
                <li>산호초 멸종률: 99%</li>
                <li>연안 홍수 위험: 매우 높음</li>
                <li>여름철 평균온도: 4.5도 상승</li>
                <li>생물종 절반 절멸률</li>
                <li> 곤충 18%</li>
                <li> 식물 16%</li>
                <li> 척추동물 8%</li>
                <li> 육지 생태계 변화율: 약 13%</li>
                <li> 어획량 300만t 감소</li>
            </ul>
        </div>
    )
}

function WeatherContent(){ 
    let [menu, setMenu] = useState(0);

    function changeMenu(n){
        setMenu(n);
    }

    return (
        <div className="WeatherContent scroll">
            <div className="tempProblem">
                <ul className="tempList">
                    <li onClick={()=>changeMenu(0)}>1.5도 상승</li>
                    <li onClick={()=>changeMenu(1)}>2도 상승</li>
                </ul>
                <div className="menu">
                    {
                        menu == 0 ? <Onepointfive/> : <Two/>
                    }
                </div>
            </div>

        </div>
    )
}

export default WeatherContent;