import React, { useState, useEffect } from 'react'
import { AdminTable } from '../../../components'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ClipLoader from "react-spinners/ClipLoader"
import { adminService } from '../../../services/adminService'
import { AiOutlineLeft } from 'react-icons/ai'
import './index.css'

const AppetizerTable = () => {
  let [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState();
  
  const history = useHistory();
  const handleClick = () => {
    history.push(`/admin`)
  }
  useEffect(() => {
    let fetching = true;

    const fetchData = async () => {
      const res = await adminService.getAppetizerWithUser()
      if(fetching){
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
        <title>EZCOOKFORME: Admin Appetizer Table Page</title>
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
        <h1 className="admin-table-title">Appetizer</h1>
        <AdminTable data={data} type={`appetizer`}/>
      </div>
    
    }
    </>
  )
}

export default AppetizerTable
