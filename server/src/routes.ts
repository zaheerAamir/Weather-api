import express, {Request, Response, Express} from "express"
import validate from "./middleware/validateWeather.js"
import { weatherSchema } from "./schema/weather.schema.js"
import { createWeatherHandler } from "./controller/weather.controller.js"
//import OpenWeatherAPI from "openweather-api-node"

function routes(app: Express) {

    app.post('/getWeather', validate(weatherSchema), createWeatherHandler)

}

export default routes
