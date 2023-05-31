import { useEffect, useState } from "react"

const config = {
  base: import.meta.env.VITE_API_URL,
  apiVersion: import.meta.env.VITE_API_VERSION,
  apiKey: import.meta.env.VITE_API_KEY,
}

export const WeatherApp = () => {
  const [query] = useState("bangkok")
  const [_wether, setWeather] = useState()

  useEffect(() => {
    const getWeather = () => {
      fetch(
        `${config.base}/${config.apiVersion}/weather?q=${query}&appid=${config.apiKey}`
      )
        .then((resp) => resp.json())
        .then((data) => setWeather(data))
        .catch((error) => {
          throw new Error(error)
        })
    }

    getWeather()
  }, [query])

  return <div>WeatherApp</div>
}
