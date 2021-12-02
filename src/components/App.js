import { useEffect, useState } from 'react';
import './App.css';


function TodayDateInfo() {
  
  let today = new Date();
  let year = today.getFullYear();
  let date = today.getMonth() + 1;
  let day = today.getDate();

  return {
    year, date, day
  }
}

function App() {
  let [forecastedTemp, setForecastedTemp] = useState(1);
  let [afterYear, setAfterYear] = useState(1);
  function nYearForecasting(e){
    let valueInt = parseInt(e.target.value);
    if(valueInt){
      setAfterYear(valueInt);
    }
  }


  useEffect(()=>{

    let {year, date, day} = TodayDateInfo();

    fetch(`955c-34-74-29-25.ngrok.io/?date=${2022}-${12}-${2}`, {mode:'no-cors'})
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        }
      )
      
  },[]);

  return (
    <div className="App scroll">
      <div className="nYear">
        <input type="number" value={afterYear} min="1" max="100" className="nYearInput" onChange={nYearForecasting}/>
        <span className="nYearText">년 후 오늘의 기온은?</span>
      </div>
      
      <div className="forecast">
        {forecastedTemp}<span className="c">ºC</span>
      </div>
      <div>
        인공지능을 활용하여 미래의 기온을 예측합니다.
      </div>
    </div>
  );
}

export default App;
