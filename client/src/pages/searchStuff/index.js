import React, { useEffect, useState } from 'react'
import { ResultsMap } from '../../components'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from 'react-helmet'
import './index.css'
import { searchService } from '../../services/searchService';

const SearchResults = () => {  
  let [ loading, setLoading ] = useState(true);
  let [ resultsData, setResultsData ] = useState();
  let { param } = useParams();

  useEffect(() => {
    let setResult = true;

    const fetchResult = async () =>{
      if(param === undefined){
        const response = await searchService.getAllDishes();
        const data = response.data;
        if(setResult){
          setResultsData(data);
          setLoading(false);
        }
      }
      else{
        try {
          const response = await searchService.getDishesBasedOnSearch(param);
          const data = response.data;
          if(setResult) {
            console.log(data.data)
            setResultsData(data.data);
            setLoading(false);
          }
        } catch(error){
          setResultsData("notfound");
          setLoading(false);
        }
      }
    }

    fetchResult();
    return() => {
      setResult = false;
    }
  }, [param])
  
  return (
    <>
    { param === undefined ? 
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`EZCOOKFORME: Search Results for Everything`}</title>
      </Helmet>
    :
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`EZCOOKFORME: Search Results for ${param}`}</title>
      </Helmet>
    }

    { loading ? 
      <div className="loader-pos">
        <ClipLoader 
          loading={loading} 
          size={100}
        />
      </div>
    :
      <>
      {param === undefined ? 
      <>
      <div className="box-sizing-of-search">
        <h1 className="Search-results-title">Search Results for Everything</h1>
        <h4 className="Search-results-desc">Hint: You didn't type anything into the search bar.</h4>
        <div className="result-data">
          <ResultsMap 
            data={resultsData}
            param = {param}
          />
        </div>
      </div>
      </> 
      : 
      <>
      <div className="box-sizing-of-search">
        <h1 className="Search-results-title">Search Results for '{`${param}`}'</h1>
        <div className="result-data">
          <ResultsMap 
            data={resultsData}
            param = {param}
          />
        </div>
      </div>
      </>}
      </>
      }
    </>
  )
}

export default SearchResults;