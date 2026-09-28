import { weatherCodes, weekdayCodes } from "./weatherCode"


export const WeatherCard = ({weatherDate, weatherCode, max, min}) => {
    const date = new Date(weatherDate)
    return (
        <>
            <div className="flex flex-col md:flex-1 items-center p-4 border-2 border-blue-200 rounded-lg overflow-hidden gap-2">
                <div>{weekdayCodes[date.getDay()]}</div>
                <div className="h-14 flex justify-center items-center">{weatherCodes[weatherCode]?.day?.description}</div>
                <img src={weatherCodes[weatherCode]?.day?.image} alt=""/>
                <div className="text-left">
                  <div className="px-1 whitespace-nowrap">最高：{max} °C</div>
                  <div className="px-1 whitespace-nowrap">最低：{min} °C</div>
                </div>
            </div>
        </>
    )
}

