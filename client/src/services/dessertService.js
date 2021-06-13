import { gatewayHelper } from '../utility';

async function getAllDessert(){
  const body = {};
  const response = await gatewayHelper.http("GET", "dessert/", body);
  return response;
}

async function getDessertById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "dessert/" + id, body);
  return response;
}

async function insertDessert(){
  const body = {};
  const response = await gatewayHelper.http("POST", "dessert/", body);
  return response;
}

export const dessertService = {
  getAllDessert,
  getDessertById,
  insertDessert
}