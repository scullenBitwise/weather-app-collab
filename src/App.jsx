import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import { Row, Col } from 'reactstrap';
import { Wrapper } from './styles';
import API from './utils/API';
import SearchForm from './components/SearchForm';
import DayCard from './components/DayCard';
import DayDetails from './components/DayDetails';
import LoadingSpinner from './components/LoadingSpinner';
import weatherData from './data/sample.json';

function App() {
  const [data, setData] = useState({
    searchTerm: 'Fresno, CA',
    selectedDay: null,
    location: 'Fresno, CA',
    days: weatherData.data,
  });

  // const [data, setData] = useState({
  //   searchTerm: '',
  //   selectedDay: null,
  //   location: '',
  //   days: [],
  // });
  const { searchTerm, selectedDay, location, days } = data;

  const getWeather = async (location) => {
    if (!location) {
      return alert('Enter a location to get weather data!');
    }

    const res = await API.getWeather(location);

    if (!res) {
      return false;
    }

    const {
      data: { city_name: city, state_code: state, data: days },
    } = res;

    setData({
      searchTerm: '',
      selectedDay: null,
      location: `${city}, ${state}`,
      days,
    });
  };

  // useEffect(() => {
  //   getWeather('Fresno, CA');
  // }, []);

  useEffect(() => {
    document.title = `${
      location
        ? `Weather Info for ${location}`
        : 'Find weather by location'
    }`;
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  return (
    <Wrapper>
      <Row>
        <Col md={7}>
          <h1>
            {location
              ? `Weather Info for ${location}:`
              : 'Search by Location:'}
          </h1>
        </Col>
        <Col md={5}>
          <SearchForm
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Col>
      </Row>
      <Row>
        {days.length ? (
          <>
            {days.map((day) => (
              <DayCard
                key={day.ts}
                day={format(
                  parse(day.valid_date, 'y-MM-d', new Date()),
                  'EEEE',
                )}
                temp={day.temp}
                high={day.high_temp}
                low={day.low_temp}
                icon={day.weather.icon}
                description={day.weather.description}
                precip={day.pop}
                isSelected={day === selectedDay}
                selectDay={() =>
                  setData({ ...data, selectedDay: day })
                }
              />
            ))}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
            <DayDetails
              day={format(
                parse(selectedDay.valid_date, 'y-MM-d', new Date()),
                'EEEE, MMMM do, y',
              )}
              temp={selectedDay.temp}
              high={selectedDay.high_temp}
              appHigh={selectedDay.app_max_temp}
              low={selectedDay.low_temp}
              appLow={selectedDay.app_min_temp}
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              precip={selectedDay.pop}
              humidity={selectedDay.rh}
              windSpeed={selectedDay.wind_spd}
              windDir={selectedDay.wind_cdir_full}
            />
          ) : (
            <h3>
              {days.length
                ? 'Click on a day above to view details!'
                : null}
            </h3>
          )}
        </Col>
      </Row>
    </Wrapper>
  );
}

export default App;
