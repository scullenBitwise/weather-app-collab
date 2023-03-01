import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { printFixedDigits } from '../utils';
import { DayWrapper } from '../styles';

function DayCard({
  isSelected,
  selectDay,
  day,
  temp,
  icon,
  description,
  high,
  low,
  precip,
}) {
  return (
    <Col>
      <DayWrapper isSelected={isSelected} onClick={selectDay}>
        <Card>
          <CardHeader>{day}</CardHeader>
          <CardBody>
            <h3>{printFixedDigits(temp)}°</h3>
            <img
              src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
              alt={description}
            />
            <p>
              <strong>High:</strong> {printFixedDigits(high)}°
            </p>
            <p>
              <strong>Low:</strong> {printFixedDigits(low)}°
            </p>
            <p>
              <strong>Precip:</strong> {precip}%
            </p>
          </CardBody>
        </Card>
      </DayWrapper>
    </Col>
  );
}

DayCard.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  selectDay: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  precip: PropTypes.number.isRequired,
};

export default DayCard;
