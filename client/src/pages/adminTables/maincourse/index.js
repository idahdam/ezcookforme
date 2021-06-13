import React, { useState, useEffect } from 'react'
import { AdminTable } from '../../../components'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ClipLoader from "react-spinners/ClipLoader"
import { adminService } from '../../../services/adminService'
import { AiOutlineLeft } from 'react-icons/ai'
import './index.css'

const MaincourseTable = () => {
  let [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState();
  
  const history = useHistory();
  const handleClick = () => {
    history.push("/admin")
  }
  useEffect(() => {
    let fetching = true;

    const fetchData = async () => {
      const res = await adminService.getMainCourseWithUser()
      if(fetching){
        console.log(res.data)
        setData(res.data);
        setLoading(false);
      }
    }

    fetchData();

    return() => fetching = false;
  }, [loading])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: Admin Main Course Table Page</title>
      </Helmet>
    { loading ? 
      <div className="loader-pos">
        <ClipLoader 
          loading={loading} 
          size={150}
        />
      </div>
    :
      <div>
       <button 
          className="admin-back-button"
          type="button" 
          onClick={() => handleClick()}>
             <AiOutlineLeft /> Back
        </button>
        <h1 className="admin-table-title">Main Course</h1>
        <AdminTable data={data} type={`maincourse`}/>
      </div>
    
    }
    </>
  )
}

export default MaincourseTable
