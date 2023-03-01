import React from 'react';
import PropTypes from 'prop-types';
import { printFixedDigits, titleCase } from '../utils';
import { DetailsWrapper } from '../styles';

// const fixed

function DayDetails({
  day,
  temp,
  icon,
  description,
  high,
  appHigh,
  low,
  appLow,
  precip,
  humidity,
  windSpeed,
  windDir,
}) {
  return (
    <DetailsWrapper>
      <h2>Forecast Details for {day}:</h2>
      <h3>{printFixedDigits(temp)}°</h3>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
        alt={description}
      />
      <p>
        <em>{description}</em>
      </p>
      <p>
        <strong>High:</strong> {printFixedDigits(high)}° |{' '}
        <strong>Feels Like:</strong> {printFixedDigits(appHigh)}°
      </p>
      <p>
        <strong>Low:</strong> {printFixedDigits(low)}° |{' '}
        <strong>Feels Like:</strong> {printFixedDigits(appLow)}°
      </p>
      <p>
        <strong>Likelihood of Precipitation:</strong> {precip}% |{' '}
        <strong>Relative Humidity:</strong> {humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong>{' '}
        {printFixedDigits(windSpeed * 2.237, 2)}
        mph | <strong>Wind Direction:</strong> {titleCase(windDir)}
      </p>
    </DetailsWrapper>
  );
}

DayDetails.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  appHigh: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  appLow: PropTypes.number.isRequired,
  precip: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDir: PropTypes.string.isRequired,
};

export default DayDetails;
