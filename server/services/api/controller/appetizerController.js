/**
 * appetizerController:
 *  - getAllAppetizer
 *  - getAppetizerById
 *  - deleteAppetizerById
 *   
 */

const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helpers/status');

const getAllAppetizer = async (req, res) => {
  const query = 'SELECT * FROM appetizer ORDER BY rating DESC';
  try {
    const { rows } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no appetizer';
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

const getAppetizerById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM appetizer WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows;
    console.log(rows)
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no appetizer with id: ' + id;
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage)
  } catch (error) {
    errorMessage.error = 'An error occured.'
    return res
      .status(status.error)
      .send(errorMessage.error + ' ' + error.code);
  }
}

const deleteAppetizerById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM appetizer WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'You now dont have appetizer with id ' + id ;
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + dbResponse);
    }
    successMessage.data.message = 'appetizer deleted successfully';
    return res
      .status(status.success)
      .send(successMessage.data.message);
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
  getAllAppetizer,
  getAppetizerById,
  deleteAppetizerById
}