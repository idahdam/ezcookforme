/**
 * searchDishController:
 * - searchDish
 * - getAllDish
 * 
 */

const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helpers/status');

const searchDish = async (req, res) => {
  const searchQuery = req.params.searchQuery
  const query = "SELECT * FROM all_dish WHERE dish_name ILIKE $1 OR tai ILIKE $1"
  try {
    const {
      rows
    } = await dbQueries(query, [`%${searchQuery}%`]);
    const dbResponse = rows;
    console.log(rows)
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'No result';
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage)
  } catch (error) {
    errorMessage.error = 'An error occured.';
    return res
      .status(status.error)
      .send(error + ' ' + error.code);
  }
}

const getAllDish = async (req, res) => {
  const query = 'SELECT * FROM all_dish ORDER BY id ASC';
  try {
    const { rows } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no dish';
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage.data);
  } catch (error) {
    errorMessage.error = 'An error occured.'
    return res
      .status(status.error)
      .send(errorMessage.error + ' ' + error.code);
  }
}

  module.exports = {
    searchDish,
    getAllDish
  };