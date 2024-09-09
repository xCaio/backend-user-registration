import express from 'express';
const app = express()
import connectDatabase from './database/db.js'
import route from './routes.js';
import cors from 'cors'

const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())
app.use(route)

connectDatabase()
.then(() =>{
    app.listen(3000, () => console.log("Servidor iniciado em: http://localhost:3000\nMongoDB Connected 🚀")) 
})
.catch((error) => console.log(`ERRO: ${error}`))




