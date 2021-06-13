/**
 * Admin controller:
 *  - AddRecipe
 *  - updateAppetizerById
 *  - updateDessertById
 *  - updateMaincourseById
 *  - getAppetizerWithUser
 *  - getDessertWithUser
 *  - getDessertWithUser
 *  - getMaincourseWithUser
 *  - insertKontributor
 *  - getKontributor
 *  - deleteKontributorById
 */

const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helpers/status');

const addRecipe = async (req, res) => {
  const dish_name = (req.body.dish_name);
  const photo = (req.body.photo);
  const description = (req.body.description);
  const tai = (req.body.tai);
  const instructions = (req.body.instructions);
  const difficulty = (req.body.difficulty);
  const rating = (req.body.rating);
  const query = `INSERT INTO ${req.body.table_name} 
    (id, dish_name, photo, description, tai, instructions, difficulty, rating) 
    VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) returning *`
  try {
    const {
      rows
    } = await dbQueries(query, [dish_name, photo, description, tai, instructions, difficulty, rating]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = `Cannot add to ${req.body.table_name}` ;
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res
      .status(status.created)
      .send(successMessage);
    
  } catch (error) {
    errorMessage.error = 'Unable to add recipe.'
    return res
      .status(status.error)
      .send(errorMessage.error + ' ' + error.code);
  }
}

const updateAppetizerById = async (req, res) => {
  const dish_name = (req.body.dish_name);
  const photo = (req.body.photo);
  const description = (req.body.description);
  const tai = (req.body.tai);
  const instructions = (req.body.instructions);
  const difficulty = (req.body.difficulty);
  const rating = (req.body.rating);
  const id = parseInt (req.params.id);
  console.log(req.params)
  console.log(req.body)
  const query = 'UPDATE appetizer SET dish_name = $1, photo = $2, description = $3, tai = $4, instructions = $5, difficulty = $6, rating = $7 WHERE id = $8 returning *'
  try {
    const {
      rows
    } = await dbQueries(query, [dish_name, photo, description, tai, instructions, difficulty, rating, id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'appetizer cannot be found';
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    return res
    .status(status.success)
    .send(successMessage);
  } catch (error) {
    if (error) {
      res.send('error ' + error.code);
      return;
    }
  }
}

const updateDessertById = async (req, res) => {
  const dish_name = (req.body.dish_name);
  const photo = (req.body.photo);
  const description = (req.body.description);
  const tai = (req.body.tai);
  const instructions = (req.body.instructions);
  const difficulty = (req.body.difficulty);
  const rating = (req.body.rating);
  const id = parseInt (req.params.id);
  console.log(req.params)
  console.log(req.body)
  const query = 'UPDATE dessert SET dish_name = $1, photo = $2, description = $3, tai = $4, instructions = $5, difficulty = $6, rating = $7 WHERE id = $8 returning *'
  try {
    const { rows } = await dbQueries(query, [dish_name, photo, description, tai, instructions, difficulty, rating, id]);
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

const updateMaincourseById = async (req, res) => {
  const dish_name = (req.body.dish_name);
  const photo = (req.body.photo);
  const description = (req.body.description);
  const tai = (req.body.tai);
  const instructions = (req.body.instructions);
  const difficulty = (req.body.difficulty);
  const rating = (req.body.rating);
  const id = parseInt (req.params.id);
  console.log(req.params)
  console.log(req.body)
  const query = 'UPDATE maincourse SET dish_name = $1, photo = $2, description = $3, tai = $4, instructions = $5, difficulty = $6, rating = $7 WHERE id = $8 returning *'
  try {
    const {
      rows
    } = await dbQueries(query, [dish_name, photo, description, tai, instructions, difficulty, rating, id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'main course cannot be found';
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    return res
    .status(status.success)
    .send(successMessage);
  } catch (error) {
    if (error) {
      res.send('error ' + error.code);
      return;
    }
  }
}

const getAppetizerWithUser = async (req, res) => {
  const query = 'select appetizer.id, type, appetizer.dish_name, photo, description, tai, instructions, difficulty, rating, name, email from appetizer left outer join kontributor on appetizer.dish_name = kontributor.dish_name';
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

const getDessertWithUser = async (req, res) => {
  const query = 'select dessert.id, type, dessert.dish_name, photo, description, tai, instructions, difficulty, rating, name, email from dessert left outer join kontributor on dessert.dish_name = kontributor.dish_name';
  try {
    const { rows } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no dessert';
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

const getMaincourseWithUser = async (req, res) => {
  const query = 'select maincourse.id, type, maincourse.dish_name, photo, description, tai, instructions, difficulty, rating, name, email from maincourse left outer join kontributor on maincourse.dish_name = kontributor.dish_name';
  try {
    const { rows } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no main course';
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

const insertKontributor = async (req, res) => {
  // const id = parseInt(req.body.id);
  const name = (req.body.name);
  const email = (req.body.email);
  const no_hp = (req.body.no_hp);
  const dish_name = (req.body.dish_name);
  const type = (req.body.type);
  const query = 'INSERT INTO kontributor (id, name, email, no_hp, dish_name, type) VALUES (DEFAULT, $1, $2, $3, $4, $5) returning *';
  try {
    const {
      rows
    } = await dbQueries(query, [name, email, no_hp, dish_name, type]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = `Cannot add to kontributor` ;
      return res
        .status(status.error)
        .send(errorMessage + ' ' + error.code);
    }
    successMessage.data = dbResponse;
    return res
      .status(status.created)
      .send(successMessage);
    
  } catch (error) {
    errorMessage.error = 'Unable to add contributor.'
    return res
      .status(status.error)
      .send(errorMessage.error + ' ' + error.code);
  }
}

const getKontributor = async (req, res) => {
  const query = 'SELECT * FROM kontributor ORDER BY id ASC';
  try {
    const { rows } = await dbQueries(query);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no contributor';
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

const deleteKontributorById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM kontributor WHERE id = $1'
  try {
    const {
      rows
    } = await dbQueries(query, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'You now dont have contributor with id ' + id ;
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + dbResponse);
    }
    successMessage.data.message = 'contributor deleted successfully';
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
  addRecipe,
  updateAppetizerById,
  updateDessertById,
  updateMaincourseById,
  getAppetizerWithUser,
  getDessertWithUser,
  getMaincourseWithUser,
  insertKontributor,
  getKontributor,
  deleteKontributorById
}