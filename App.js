
import React, { useState } from 'react';
import './App.css';
function App() {
  const key="29f62243a941fcc856f336ae6b128b6e"
  const [searchvalue,setSearchValue]=useState('Inserisci una città ')
  const [weather,setWeather]=useState('')
  console.log(searchvalue)
  
  function dateBuilder(d)
  {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let day=days[d.getDay()]
      let month=months[d.getMonth()]
      let year=d.getFullYear()
      let date=d.getDate()
      return ''+day+' '+date+' '+month+' '+year;
  
  }
  return (
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp-272.15 > 23) ? 'app warm' : 'app') : 'app'}>
      
      <main>
          <div className="search-box">
            <input onChange={event => setSearchValue(event.target.value)} onKeyPress={ function submit(){
                  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchvalue+'&appid='+key)
                  .then(response=>response.json())
                  .then(data=>{setWeather(data)})
                  .catch( err=> alert(err))
                  setSearchValue('')
            }} type="text" className="search-bar" placeholder={searchvalue} />
{/*             <input  type="submit" className="searchInput" onClick={ function submit(){
                  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchvalue+'&appid='+key)
                  .then(response=>response.json())
                  .then(data=>{setWeather(data)})
                  .catch( err=> console.log(err))
            }} /> */}
          </div>
          
          <div> 
          {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
            {Math.round(weather.main.temp-273.15) }°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        </div >
      </main>
      
    </div>
  );

}

export default App;
