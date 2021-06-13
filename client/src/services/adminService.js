import { gatewayHelper } from '../utility';

async function addRecipe(data){
  const body = {};
  const response = await gatewayHelper.http("POST", "admin/", body, data);
  return response;
}

async function addContributor(data){
  const body = {};
  const response = await gatewayHelper.http("POST", "admin/kontributor", body, data);
  return response
}

async function getAllContributor(){
  const body = {};
  const response = await gatewayHelper.http("GET", "admin/kontributor", body);
  return response
}

async function editRecipeOnTableAndId(tableName, id, data){
  const body = {};
  const response = await gatewayHelper.http("PUT", `admin/${tableName}/${id}`, body, data);
  return response;
}

async function deleteContributorById(id){
  const body = {};
  const response = await gatewayHelper.http("DELETE", `admin/kontributor/${id}`, body);
  return response;
}

async function getAppetizerWithUser(){
  const body = {};
  const response = await gatewayHelper.http("GET", `admin/appetizer`, body);
  return response;
}

async function getDessertWithUser(){
  const body = {};
  const response = await gatewayHelper.http("GET", `admin/dessert`, body);
  return response;
}

async function getMainCourseWithUser(){
  const body = {};
  const response = await gatewayHelper.http("GET", `admin/maincourse`, body);
  return response;
}

export const adminService = {
  addRecipe,
  addContributor,
  editRecipeOnTableAndId,
  getAllContributor,
  deleteContributorById,
  getAppetizerWithUser,
  getDessertWithUser,
  getMainCourseWithUser
}