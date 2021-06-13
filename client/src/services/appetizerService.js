import { gatewayHelper } from '../utility';

async function getAllAppetizer(){
  const body = {};
  const response = await gatewayHelper.http("GET", "appetizer/", body);
  return response;
}

async function getAppetizerById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "appetizer/" + id, body);
  return response;
}

async function insertAppetizer(){
  const body = {};
  const response = await gatewayHelper.http("POST", "appetizer/", body);
  return response;
}

async function deleteAppetizerById(id){
  const body = {};
  const response = await gatewayHelper.http("DELETE", "appetizer/" + id, body);
  return response;
}

export const appetizerService = {
  getAllAppetizer,
  getAppetizerById,
  insertAppetizer,
  deleteAppetizerById
}