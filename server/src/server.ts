import { boo } from "./hello.js"
import express, {Request, Response} from 'express'
import routes from "./routes.js"
import cors from 'cors'


console.log('hello world', boo)

const app = express()
app.use(cors({origin: '*'}))

app.use(express.json())
const PORT = 8000

app.get('/gello', (req: Request, res: Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`server started running on port ${PORT}`)

    routes(app)
})