const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const pool = require('./services/config/dbPool');

require('dotenv').config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

// export routing
const appetizerRoute = require('./services/api/routes/appetizerRoutes')
const dessertRoute = require('./services/api/routes/dessertRoutes')
const maincourseRoute = require('./services/api/routes/maincourseRoutes')
const adminRoute = require('./services/api/routes/adminRoutes')
const searchDishRoute = require('./services/api/routes/searchDishRoutes')

app.use(helmet());
app.use(logger('dev'));
app.use('/api/appetizer', appetizerRoute);
app.use('/api/dessert', dessertRoute);
app.use('/api/maincourse', maincourseRoute);
app.use('/api/admin', adminRoute);
app.use('/api/search', searchDishRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening at port ${process.env.PORT}`)
})