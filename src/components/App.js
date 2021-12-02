import { useEffect, useState } from 'react';
import './App.css';

const url = `http://6e6d-34-74-29-25.ngrok.io/`;

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
  let [todayTemp, setTodayTemp] = useState(1);
  function nYearForecasting(e){
    let valueInt = parseInt(e.target.value);
    if(valueInt){
      setAfterYear(valueInt);

      let {year, date, day} = TodayDateInfo();
      fetch(`${url}?date=${year + afterYear}-${date}-${day}`)
      .then(res => res.json())
      .then(
        result => {
          todayYearTemp();
          setForecastedTemp(result.tem);
        }
      ).catch(
        err=>console.log(err)
      )
    }
  }
  function todayYearTemp(){
    let {year, date, day} = TodayDateInfo();
    fetch(`${url}?date=${year}-${date}-${day}`)
    .then(res => res.json())
    .then(
      result => {
        setTodayTemp(result.tem);
      }
    ).catch(
      err=>console.log(err)
    )

  }

  useEffect(()=>{

    let {year, date, day} = TodayDateInfo();

    fetch(`${url}?date=${year + afterYear}-${date}-${day}`)
      .then(res => res.json())
      .then(
        result => {
          todayYearTemp();
          setForecastedTemp(result.tem);
          console.log(todayTemp, forecastedTemp);
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
      <div className="forecastDiff">
        올해에 비해 {(forecastedTemp - 2.5).toFixed(4)}ºC 변화하였습니다.
      </div>
      <br/>
      <div>
        인공지능을 활용하여 미래의 기온을 예측합니다.
      </div>
    </div>
  );
}

export default App;
