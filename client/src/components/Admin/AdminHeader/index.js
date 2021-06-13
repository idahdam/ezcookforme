import React, { useEffect, useState } from 'react'
import './index.css'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { appetizerService } from '../../../services/appetizerService';
import { mainCourseService } from '../../../services/mainCourseService';
import { dessertService } from '../../../services/dessertService';

const AdminHeader = () => {
  const [ loading, setLoading ] = useState(true);
  const [ countAppetizer, setCountAppetizer ] = useState(0); 
  const [ countMainCourse, setCountMainCourse ] = useState(0); 
  const [ countDessert, setCountDessert ] = useState(0); 
  const [ appetizerThumbnail, setAppetizerThumbnail ] = useState()
  const [ mainCourseThumbnail, setMainCourseThumbnail ] = useState()
  const [ dessertThumbnail, setDesserThumbnail ] = useState(
    
  )

  useEffect(() => {
    let everything = true;

    const fetchData = async () => {
      const appetizerData = await appetizerService.getAllAppetizer();
      const mainCourseData = await mainCourseService.getAllMainCourse();
      const dessertData = await dessertService.getAllDessert();

      if(everything){
        setCountAppetizer(appetizerData.data.length)
        setAppetizerThumbnail(appetizerData.data[0].photo);
        setCountMainCourse(mainCourseData.data.length)
        setMainCourseThumbnail(mainCourseData.data[0].photo);
        setCountDessert(dessertData.data.length)
        setDesserThumbnail(dessertData.data[0].photo);
        setLoading(false);
      }
    }

    fetchData()

    return() => everything = false;
  }, [])

  return (
    <>
      <div className="admin-header">
        <div className="hi-admin-text">
          <h3>
            Hi, Admin!
          </h3>
          <h4>
            There are  
            <span className="amount-of-recipes">
              {loading ? 
              <>
              <ClipLoader 
                loading={loading} 
                size={30}
              />
              </> : <>{countAppetizer + countMainCourse + countDessert}</>}
            </span>
            recipes now.
            <Link to={`/admin/add`}>
              <button type="button" className="button-add-recipe">Add Recipes</button>
            </Link>
          </h4>
          
        </div>
        <div className="row-img center-img">
          <div className="column-img">
          <Link to={`/admin/appetizer`} className="link-table">
            { loading ? 
            <>
            <ClipLoader 
                loading={loading} 
                size={150}
              />
            </>
            :
            <img src={appetizerThumbnail} alt="food" className="img-styling" />
            }
            <p className="amount-each"><span className="amount-each-int">
            {loading ? 
              <>
              <ClipLoader 
                loading={loading} 
                size={30}
              />
              </> : <>{countAppetizer}</>}  
            </span> Appetizers</p>
            </Link>
          </div>
          <div className="column-img">
            <Link to={`/admin/maincourse`} className="link-table">
              { loading ? 
              <>
              <ClipLoader 
                  loading={loading} 
                  size={150}
                />
              </>
              :
              <img src={mainCourseThumbnail} alt="food" className="img-styling" />
              }
              <p className="amount-each"><span className="amount-each-int">
              {loading ? 
              <>
              <ClipLoader 
                loading={loading} 
                size={30}
              />
              </> : <>{countMainCourse}</>}    
              </span> Main Course</p>
            </Link>
          </div>
          <div className="column-img">
            <Link to={`/admin/dessert`} className="link-table">
              { loading ? 
              <>
              <ClipLoader 
                  loading={loading} 
                  size={150}
                />
              </>
              :
              <img src={dessertThumbnail} alt="food" className="img-styling" />
              }
              <p className="amount-each"><span className="amount-each-int">
              {loading ? 
              <>
              <ClipLoader 
                loading={loading} 
                size={30}
              />
              </> : <>{countDessert}</>}    
              </span> Dessert</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader;