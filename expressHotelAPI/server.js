// jangan di pikir liblary bawan
const express = require('express')
const cors = require('cors')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('database hurung!'))

//end point di pikirin
const userEndpoint = require('./routes/users')
const hotelEndpoint = require('./routes/hotel')
const pemesananEndpoint = require('./routes/pemesanan')

//jangan di pikirin, express framework untuk endpoin baru ngarah gampang
const app = express()
app.use(cors())
app.use(express.json())

//di pikirin
app.use('/users', userEndpoint)
app.use('/hotel', hotelEndpoint)
app.use('/pemesanan', pemesananEndpoint)

//jangan di pikirin
app.listen(port, () => console.log(`running server port ${port}`))