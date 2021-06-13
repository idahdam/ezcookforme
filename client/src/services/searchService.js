import { gatewayHelper } from '../utility';

async function getAllDishes(){
  const body = {};
  const response = await gatewayHelper.http("GET", `search/`, body);
  return response;
}

async function getDishesBasedOnSearch(search){
  const body = {};
  const response = await gatewayHelper.http("GET", `search/${search}`, body);
  return response;
}

async function getDishDetails(tableName, id){
  const body = {};
  const response = await gatewayHelper.http("GET", `${tableName}/${id}`, body);
  return response;
}

export const searchService = {
  getAllDishes,
  getDishesBasedOnSearch,
  getDishDetails,
}