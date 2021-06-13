import { gatewayHelper } from '../utility';

async function getAllMainCourse(){
  const body = {};
  const response = await gatewayHelper.http("GET", "maincourse/", body);
  return response;
}

async function getMainCourseById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "maincourse/" + id, body);
  return response;
}

async function insertMainCourse(){
  const body = {};
  const response = await gatewayHelper.http("POST", "maincourse/", body);
  return response;
}

export const mainCourseService = {
  getAllMainCourse,
  getMainCourseById,
  insertMainCourse
}