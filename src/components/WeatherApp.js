import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import clear from '../assets/img/clear.svg';
import storm from '../assets/img/storm.svg';
import snow from '../assets/img/snow.svg';
import haze from '../assets/img/haze.svg';
import cloud from '../assets/img/cloud.svg';
import rain from '../assets/img/rain.svg';
import weather from '../assets/img/weather.png'

export const WeatherApp = () => {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  
  const searchCityName = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=f98cbc6bb5757a3c281eda852f0640b8`;
  
      axios.get(cityUrl).then((response) => {
        const cityData = response.data[0];

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=f98cbc6bb5757a3c281eda852f0640b8`;
        
        axios.get(weatherUrl).then((response) => {
          const weatherData = response.data;
          console.log(weatherData);

          const tempCelsius = Math.round(weatherData.main.temp - 273.15);
          const feelsLikeCelsius = Math.round(weatherData.main.feels_like - 273.15);

          setCityName(weatherData.name);
          setCountry(weatherData.sys.country);
          setDescription(weatherData.weather[0].description);
          setId(weatherData.weather[0].id);
          setFeelsLike(feelsLikeCelsius);
          setHumidity(weatherData.main.humidity);
          setTemp(tempCelsius);
          
        });
      });
    }
  };


  useEffect(() => {
    // Function to determine the image source based on the id
    const getImageSource = (id) => {
      if (id === 800) {
        return `${clear}`;
      } else if (id >= 200 && id <= 232) {
        return `${storm}`;
      } else if (id >= 600 && id <= 622) {
        return `${snow}`;
      } else if (id >= 701 && id <= 781) {
        return `${haze}`;
      } else if (id >= 801 && id <= 804) {
        return `${cloud}`;
      } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
        return `${rain}`;
      } else {
        return `${weather}`
      }
    };

    // Update the image source based on the id
    setImageSrc(getImageSource(id));
  }, [id]);


  return(
    <div className='weatherApp'>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='wrapper'>
          <Col>
            <h1>Weather App</h1>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control 
                className="cityInput" 
                type="text" 
                spellCheck="false" 
                placeholder="Enter city name" 
                value={cityName} 
                onChange={(event) => setCityName(event.target.value)} 
                onKeyPress={searchCityName}
              />
              </Form.Group>
              <div className="separator"></div>
            </Form>
            
            <section className="weather-part">
              <img src={imageSrc} alt="Weather Icon" className="numb"/>
              <div className="temp">
                <span className="deg">{temp}°</span>C
              </div>
              <div className="weather">_{description}_</div>
              <div className="location">
                <i className='bx bx-map'></i>
                <span>{cityName}, {country}</span>
              </div>
              <div className="bottom-details">
                <div className="column feels">
                  <i className='bx bxs-thermometer'></i>
                  <div className="details">
                    <div className="temp">
                      <span className="numb-2"></span>
                      <span className="deg">{feelsLike}°</span>C
                    </div>
                    <p>Feels like</p>
                  </div>
                </div>
                <div className="column humidity">
                  <i className='bx bxs-droplet-half'></i>
                  <div className="details">
                    <span>{humidity}</span>
                    <p>Humidity</p>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}