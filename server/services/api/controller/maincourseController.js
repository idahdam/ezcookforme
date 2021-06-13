/**
 * MaincourseController:
 *  - getAllMaincourse
 *  - getMaincourseById
 *  - deleteMaincourseById
 *   
 */

const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helpers/status');

const getAllMaincourse = async (req, res) => {
  const query = 'SELECT * FROM maincourse ORDER BY rating DESC';
  try {
    const {
      rows
    } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no main course/Error';
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res  
      .status(status.success)
      .send(successMessage.data);
  } catch (error) {
    errorMessage.error = 'There are no main course/Error.'
    return res
      .status(status.error)
      .send(errorMessage.error + ' ' + error.code);
  }
}

const getMaincourseById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM Maincourse WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows ;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no main course with id: ' + id;
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

const deleteMaincourseById = async (req, res) => {
  const id = parseInt(req.body.id);
  const query = 'DELETE FROM Maincourse WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'You have now main course with id ' + id ;
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + dbResponse);
    }
    successMessage.data.message = 'main course deleted successfully';
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
  getAllMaincourse,
  getMaincourseById,
  deleteMaincourseById,
};