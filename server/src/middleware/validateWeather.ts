import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {
        schema.parse({
            body: req.body,
            param: req.params,
            query: req.query
        })
        console.log(req.body)
        next()
    }
    catch(err: any) {
        return res.status(400).send(err.errors)
    }
}

export default validate