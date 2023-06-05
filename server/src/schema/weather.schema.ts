import { object, string, number, TypeOf, array } from "zod";

export const weatherSchema = object({
    body: object({
        cities: string().array().nonempty({
            message: "Array Can't be empty!"
        })
    })
})

export type createWeatherInput = TypeOf<typeof weatherSchema>
