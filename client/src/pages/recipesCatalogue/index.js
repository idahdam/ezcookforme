import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RecipesMap } from '../../components'
import { appetizerService } from '../../services/appetizerService'
import { dessertService } from '../../services/dessertService'
import { mainCourseService } from '../../services/mainCourseService'
import ClipLoader from "react-spinners/ClipLoader"
import './index.css'
import { Helmet } from 'react-helmet'

const RecipesCatalogue = ({type}) => {  
  let [ loading, setLoading ] = useState(true);
  const [ appetizerData, setAppatizerData ] = useState([]);
  const [ dessertData, setDessertData ] = useState([]);
  const [ mainCourseData, setMainCourseData ] = useState([]);

  useEffect(() => {
    let appetizer = true;
    let maincourse = true;
    let dessert = true;

    const fetchAppetizer = async () => {
      const response = await appetizerService.getAllAppetizer();
      const data = response.data;
      if(appetizer) {
        setAppatizerData(data);
      }
    }

    const fetchDessert = async () => {
      const response = await dessertService.getAllDessert();
      const data = response.data;
      if(dessert){
        setDessertData(data);
      }
    }

    const fetchMainCourse = async () => {
      const response = await mainCourseService.getAllMainCourse();
      const data = response.data;
      if(maincourse) {
        setMainCourseData(data);
      }
    }

    fetchAppetizer();
    fetchDessert();
    fetchMainCourse();
    setLoading(false);
    return() => {
      appetizer = false;
      dessert = false;
      maincourse = false;
    }
  }, [appetizerData, dessertData, mainCourseData])
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: Recipes</title>
      </Helmet>
    { loading ? 
      <div className="loader-pos">
        <ClipLoader 
          loading={loading} 
          size={150}
        />
      </div>
    :
      <div className="box-sizing">
        <div className="row">
          <div className="column">
            <Link to="/recipes" className="recipes-title">Recipes</Link>
            <ul className="list-destroy-borderstyle">
              <li><Link to="/appetizer" className="recipes-courses"><span id = {type === "Appetizer" ? "Selected" : ""}>Appetizer</span></Link></li>
              <li><Link to="/maincourse" className="recipes-courses"><span id = {type === "Main Course" ? "Selected" : ""}>Main Course</span></Link></li>
              <li><Link to="/dessert" className="recipes-courses"><span id = {type === "Dessert" ? "Selected" : ""}>Dessert</span></Link></li>
            </ul>
          </div>
          <div className="column-right">
            {type === "Recipes" ? 
            <>
            <div>
                Choose one of the things.
            </div>
            </>
            : null}
            {type === "Appetizer" ? 
            <>
            <div>
              <h1 className="dish-category">Appetizer</h1>
              <RecipesMap 
                data={appetizerData}
                type={"appetizer"}
              />
            </div>
            </>
            : null}
            {type === "Main Course" ? 
            <>
            <div>
            <h1 className="dish-category">Main Course</h1>
              <RecipesMap 
                data={mainCourseData}
                type={"maincourse"}
              />
            </div>
            </>
            : null}
            {type === "Dessert" ? 
            <>
            <div>
            <h1 className="dish-category">Dessert</h1>
              <RecipesMap 
                data={dessertData}
                type={"dessert"}
                />
            </div>
            </>
            : null}
            {type === "All" ? 
            <>
            <div>
            <h1 className="dish-category">All Recipes</h1>
              <RecipesMap 
                data={appetizerData}
                type={"appetizer"}
              />
              <RecipesMap 
                data={mainCourseData}
                type={"maincourse"}
              />
              <RecipesMap 
                data={dessertData}
                type={"dessert"}
              />
            </div>
            </>
            : null}
          </div>
        </div>
      </div>}
    </>
  )
}

export default RecipesCatalogue;