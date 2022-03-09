import axios from "axios";
import {
  useEffect,
  useState
} from "react";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([])

  const fetchData = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=ca81bdec470247c2814145129210512&q=Lille&aqi=no`)
      .then(response => {
        setWeatherData(response.data);
      }).catch(e => console.error(e))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="p-4">
      <div className="flex items-center">

        <div className="w-1/2 flex flex-col items-center text-xl md:text-3xl lg:text-5xl font-medium ">
          { weatherData?.current?.temp_c }°C
          <div className="text-sm md:text-lg lg:text-2xl">
            { weatherData?.location?.name }
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img src={weatherData?.current?.condition?.icon} alt='forecast' className="grayscale "/>
        </div>

      </div>
    </div>
  )
}