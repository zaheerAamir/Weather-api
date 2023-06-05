import { Request, Response } from "express";
import { createWeatherInput } from "../schema/weather.schema.js";
import 'dotenv/config'


export async function createWeatherHandler(req: Request< {}, {}, createWeatherInput['body']>, res: Response) {
    try{


        let arr: { CityName: any; Temp: string; }[] = []

        const tempLoop = async () => {
            let tempInCel: string, cityName: any
``
            for (const c of req.body.cities){
                
                const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${process.env.RAPID_API_KEY}&units=metric`)

                const temp = await getWeather.json()

                tempInCel = temp.main.temp
                cityName = temp.name

                //console.log(tempInCel+'C', cityName)
                let obj = {CityName: cityName, Temp: tempInCel+'C'}
                arr.push(obj)

            }
            console.log(arr)
            return arr
        }

        tempLoop().then(resp => res.json(resp))

        


    }
    catch(err: any) {
        return err.error
    }
}
