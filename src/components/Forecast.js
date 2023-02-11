import React from "react";
import { WeatherContext } from "../context.js";

const Forecast = () => {
  const { city } = React.useContext(WeatherContext);
  const [forecast, setForecast] = React.useState([]);
  const [date, setDate] = React.useState([]);
  const [temp, setTemp] = React.useState([]);
  const getForecast = React.useCallback(async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`
    ).then((res) => res.json());
    setForecast(response);
  }, [city]);
  React.useEffect(() => {
    getForecast();
  }, [city, getForecast]);
  React.useEffect(() => {
    if (forecast.list) {
      const myArray = [];
      var dateVar = "";
      forecast.list.forEach((day) => {
        console.log(day.dt_txt);
        const date = day.dt_txt.split(" ")[0];
        if (dateVar !== date) {
          dateVar = date;
          myArray.push({ day });
        }
      });
      if (myArray) {
        var tempArray = [];
        myArray.forEach((day) => {
          tempArray.push(Math.round(day.day.main.temp));
        });
        setTemp(tempArray);

        var dateArray = [];
        myArray.forEach((day) => {
          dateArray.push(day.day.dt_txt.split(" ")[0]);
        });
        setDate(dateArray);
      }
    }
  }, [forecast]);

  return (
    <React.Fragment>
      <div className="forecast">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="forecast__day1">
            <h3 style={{ fontSize: "16px" }}>{date[1]}</h3>
            <p style={{ fontSize: "30px" }}>{temp[1]}°</p>
          </div>
          <div className="forecast__day1">
            <h3 style={{ fontSize: "16px" }}>{date[2]}</h3>
            <p style={{ fontSize: "30px" }}>{temp[2]}°</p>
          </div>
          <div className="forecast__day1">
            <h3 style={{ fontSize: "16px" }}>{date[3]}</h3>
            <p style={{ fontSize: "30px" }}>{temp[3]}°</p>
          </div>
          <div className="forecast__day2">
            <h3 style={{ fontSize: "16px" }}>{date[4]}</h3>
            <p style={{ fontSize: "30px" }}>{temp[4]}°</p>
          </div>
          <div className="forecast__day1">
            <h3 style={{ fontSize: "16px" }}>{date[5]}</h3>
            <p style={{ fontSize: "30px" }}>{temp[5]}°</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forecast;
