import express, {Request, Response, Express} from "express"
import validate from "./middleware/validateWeather.js"
import { weatherSchema } from "./schema/weather.schema.js"
import { createWeatherHandler } from "./controller/weather.controller.js"
//import OpenWeatherAPI from "openweather-api-node"

function routes(app: Express) {

    app.post('/getWeather', validate(weatherSchema), createWeatherHandler)

    // app.get('/test', () => {

    //     let weather = new OpenWeatherAPI({
    //         key: "3679b8268ac3982c70bbffa6e4b0fb13",
    //         locationName: "New York",
    //         units: "imperial"
    //     })

    //     weather.getCurrent().then((data: { weather: { temp: { cur: any } } }) => {
    //         console.log(`Current temperature in New York is: ${data.weather.temp.cur}\u00B0F`)
    //     })
    // })
    app.get('/nell', (req: Request, res: Response) => {
        console.log('cmimio')
        return res.send('neniu')
    })
}

export default routes
