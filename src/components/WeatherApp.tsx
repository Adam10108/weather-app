import { useEffect, useState } from "react"

const config = {
  base: import.meta.env.VITE_API_URL,
  apiVersion: import.meta.env.VITE_API_VERSION,
  apiKey: import.meta.env.VITE_API_KEY,
}

export const WeatherApp = () => {
  const [query] = useState()
  const [_wether, setWeather] = useState()

  // useEffect(() => {
  //   const getWeather = () => {
  //     fetch(
  //       `${config.base}/${config.apiVersion}/weather?q=${query}&appid=${config.apiKey}`
  //     )
  //       .then((resp) => resp.json())
  //       .then((data) => setWeather(data))
  //       .catch((error) => {
  //         throw new Error(error)
  //       })
  //   }

  //   getWeather()
  // }, [query])

  return (
    <div className='container'>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='search-container'>
            <input className='search-bar' type='text' placeholder='Search...' />
          </div>

          <div className='location-container'>
            <div className='label'>Bangkok, Thailand</div>
            <div className='date'>May 31 2023</div>
          </div>

          <div className='weather-container'>
            <div className='temperature'>30C</div>
            <div className='weather'>Clouds</div>
          </div>
        </div>
      </div>
    </div>
  )
}
