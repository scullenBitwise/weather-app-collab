import axios from 'axios';

const weatherBitKey = process.env.REACT_APP_WEATHER_KEY;

export default {
  async getWeather(location) {
    try {
      const { data } = await axios.get(
        `https://geocode.maps.co/search?q=${location}`,
      );

      if (!data.length) {
        return alert('Not a valid location!');
      }

      return axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${data[0].lat}&lon=${data[0].lon}&units=I&days=7&key=${weatherBitKey}`,
      );
    } catch (err) {
      console.log(err);
    }
  },
};
