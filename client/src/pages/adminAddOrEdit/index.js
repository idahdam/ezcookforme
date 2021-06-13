import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { appetizerService } from '../../services/appetizerService'
import { dessertService } from '../../services/dessertService'
import { mainCourseService } from '../../services/mainCourseService'
import { useParams } from 'react-router'
import { AdminEdit, AdminForm } from '../../components'
import { useAuth0 } from "@auth0/auth0-react";
import NullPage from '../nullPage/nullPage'

const AdminAddOrEdit = ({addOrEdit, typeOfDish}) => {
  const { isAuthenticated } = useAuth0();
  let [ loading, setLoading ] = useState(true);
  let [ data, setData ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let appetizer = true;
    let maincourse = true;
    let dessert = true;

    if(!addOrEdit){
    const fetchData = async () => {
      if(typeOfDish === "appetizer"){
        const response = await appetizerService.getAppetizerById(id);
        const appetizerData = response.data;
        if(appetizer){
          setData(appetizerData)
          setLoading(false)
        }
      }
      else if(typeOfDish === "maincourse"){
        const response = await mainCourseService.getMainCourseById(id);
        const mainCourseData = response.data;
        if(maincourse){
          setData(mainCourseData)
          setLoading(false)
        }
      }
      else if(typeOfDish === "dessert"){
        const response = await dessertService.getDessertById(id);
        const dessertData = response.data;
        if(dessert){
          setData(dessertData)
          setLoading(false)
        }
      }
      else{
        setData("null")
      }
    }

    fetchData();

    }

    return() => {
      appetizer = false;
      maincourse = false;
      dessert = false;
    }
    
  }, [id, typeOfDish, addOrEdit])

  return (
    <>      
    { isAuthenticated ?
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: {addOrEdit ? `Add` : `Edit`} Page</title>
      </Helmet>
      <div className="admin-header">
        <div className="hi-admin-text">
          <h3>
            Hi, admin!
          </h3>
          <h3>
            {addOrEdit ?
            <>
              You can add recipe here.
            </>
             :
            <>
              You are now viewing {typeOfDish} with id = {parseInt(id)}
            </>
            }
          </h3>
        </div>
      </div>
      {addOrEdit ? 
        <AdminForm />:
        <>
          {loading ? 
          <>
            Loading data...   
          </> 
          : 
          <AdminEdit data={data} typeOfDish={typeOfDish} id={id}/>
          }
        </>
      }
      </>
      : <><NullPage /></> } 
    </> 
  )
}

export default AdminAddOrEdit;
