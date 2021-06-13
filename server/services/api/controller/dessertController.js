/**
 * dessertController:
 *  - getAllDessert
 *  - getDessertById
 *  - deleteDessertById
 *   
 */


const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helpers/status');

const getAllDessert = async (req, res) => {
  const query = 'SELECT * FROM dessert ORDER BY rating DESC';
  try {
    const {
      rows
    } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no dessert';
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage.data);
  } catch (error) {
    errorMessage.error = 'An error occured.'
    return res
      .status(status.error)
      .send(errorMessage + ' ' + error.code);
  }
}

const getDessertById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM dessert WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows ;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no dessert with id: ' + id;
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage)
  } catch (error) {
    errorMessage.error = 'An error occured.'
    return res
      .status(status.error)
      .send(errorMessage + ' ' + error.code);
  }
}

const deleteDessertById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM dessert WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'You have no dessert with id ' + id ;
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + dbResponse);
    }
    successMessage.data.message = 'dessert deleted successfully';
    return res
      .status(status.success)
      .send(successMessage);
  } catch (error) {
    if(error){
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + dbResponse);
    }
  }
}


module.exports = {
  getAllDessert,
  getDessertById,
  deleteDessertById
}