import express from 'express'
import cors from 'cors'
import router from './routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

const PORT = 7707

function main() {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}, url: http://localhost:${PORT}/`)
        })
    } catch (err) {
        console.error(err)
    }
}

main()