import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router';
import { appetizerService } from '../../services/appetizerService'
import { dessertService } from '../../services/dessertService'
import { mainCourseService } from '../../services/mainCourseService'
import { AiOutlineLeft } from 'react-icons/ai'
// import { dessert, mainCourse } from '../../pages/recipesCatalogue/data'
import ClipLoader from "react-spinners/ClipLoader";
import './index.css'
import { Helmet } from 'react-helmet';

const RecipeSingular = ({type}) => {
  let [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  let [ data, setData ] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let componentMounted = true;
    const fetchData = async () => {
      if(type === "Appetizer"){
        const response = await appetizerService.getAppetizerById(id);
        const appetizerData = response.data;
        setData(appetizerData)
        setLoading(false)
      }
      else if(type === "Main Course"){
        const response = await mainCourseService.getMainCourseById(id);
        const mainCourseData = response.data;
        setData(mainCourseData)
        setLoading(false)
      }
      else if(type === "Dessert"){
        const response = await dessertService.getDessertById(id);
        const dessertData = response.data;
        setData(dessertData)
        setLoading(false)
      }
      else{
        setData("null")
      }
    }
    if(componentMounted){
      fetchData();
    }

    return() => {
      componentMounted = false;
    }
  }, [id, type])


  const handleClick = () => {
    history.push(`/recipes`)
  }

  return (
    <>
      <div className="container-singular">
        <button 
          className="singular-back-button"
          type="button" 
          onClick={() => handleClick()}>
             <AiOutlineLeft /> Recipes
        </button>
        { loading ? 
         <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>EZCOOKFORME: Loading your {type}...</title>
            </Helmet>
            <div className="loader-pos">
              <ClipLoader 
                loading={loading} 
                size={150}
              />
            </div>
          </>
        :
        <>
          {console.log(data.data[0])}
          <Helmet>
            <meta charSet="utf-8" />
            <title>{`EZCOOKFORME: ${type} - ${data.data[0].dish_name}`}</title>
          </Helmet>
          <div className="row-singular">
            <div className="column-singular">
              <img src={data.data[0].photo} alt="pic" className="singular-img"/><br />              
            </div>
            <div className="column-singular">
            <h1 className="singular-dish-name">
                {data.data[0].dish_name}
              </h1> 
              <h3 className="singular-difficulty-rating">
                {data.data[0].difficulty.charAt(0).toUpperCase() + data.data[0].difficulty.slice(1)} - {data.data[0].rating}/5
              </h3>     
              <h3 className="singular-description">
                Description:
              </h3>
              <p>
                {data.data[0].description}
              </p>
              <h3>
                Tools and Ingredients
              </h3>
              <p>
                <ul>
                {data.data[0].tai.split('\n').map(str => <li className="bullet-points-singular">{str}</li>)}
                </ul>
              </p>
              <h3>
                Instructions:
              </h3>
              <p>
                <ul>
                {data.data[0].instructions.split('\n').map(str => <li className="bullet-points-singular">{str}</li>)}
                </ul>
              </p>
            </div>
          </div>
        </>
        }
        <div>
        </div>
      </div>
    </>
  )
}

export default RecipeSingular;
