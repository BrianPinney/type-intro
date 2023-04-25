import express, {Request, Response} from "express"
import cors from "cors"
 
const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response)=> 
    res.send("Welcome to typscript"))

app.listen(PORT, () => (
    console.log(`Listening on port: ${PORT}`)
))