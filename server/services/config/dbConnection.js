// testing for pool.

const pool = require('./dbPool');

pool.on('connect', () => {
  console.log('connected to the database')
})


//add queries here

module.exports = {
  startDatabase
}