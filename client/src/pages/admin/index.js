import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { AdminContributorTable, AdminHeader } from '../../components';
import './index.css'

const Admin = () => {
  let [loading, setLoading] = useState(true);

  // hardcoded karena belom ngefetch langsung dari API.
  useEffect(() => {
    setTimeout(() => {  
      setLoading(false);
    }, 1000)

  }, [loading])
  return(
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: Admin Page</title>
      </Helmet>
      <AdminHeader />
      <h1 className="contributor">Contributors</h1>
      <AdminContributorTable />
    </>
  )
}

export default Admin;