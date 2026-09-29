import { WeatherCard } from "./WeatherCard.jsx"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export const Weather = () => { 
    const [city, setCity] = useState("melbourne") 
    const cities = {
      melbourne: { latitude: -37.840935, longitude: 144.946457 },
      wuhan: { latitude: 30.59, longitude: 114.30 }
    }   
    //tanStack query
    const { data, isPending, error } = useQuery({
        queryKey: ['weather', city],
        queryFn:
            async () => {
                const selectedCity = cities[city]
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`)
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                const data = await response.json()
                return data
            },
            staleTime: 20 * 1000,
            refetchOnWindowFocus: true 
    })

    const weatherData = data?.daily?.time?.map((item, index)=>{
        return {
            weatherDate: item,
            weatherCode: data?.daily?.weather_code?.[index],
            max: data?.daily?.temperature_2m_max?.[index],
            min: data?.daily?.temperature_2m_min?.[index]
        }})
    
    //loading 和 error 的处理

    return (
        <>
            <h1>七天天气预报</h1>
            <label htmlFor="city">选择城市：</label>
            <select 
              id="city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}>
              <option value="melbourne">墨尔本</option>
              <option value="wuhan">武汉</option>
            </select>
            <div>当前城市：{city}</div>
            {isPending ? <div>Loading...</div> : 
                error ? <div>Something Went Wrong: {error.message}</div> :
            
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-2 p-4">
            {
            weatherData?.map(
                (item)=>
                    <WeatherCard
                        key={item.weatherDate} 
                        weatherDate={item.weatherDate}
                        weatherCode={item.weatherCode}
                        max={item.max}
                        min={item.min}
                    />
                )
            }         
            </div>
            }
        </>
    )
}