import { Link } from 'react-router-dom';
import './index.css';
import { FaChevronRight } from 'react-icons/fa'


const ResultsMap = ({ data, param }) => {
  if(data === "notfound") return (
    <>
      <div className="not-found">
        <h1>Not Found 😢</h1>
        <h2>
          Maybe try  
          <Link to={`/search/${param.charAt(0).toUpperCase() + param.slice(1)}`} className="not-found-decoration">
          "{`${param.charAt(0).toUpperCase() + param.slice(1)}`}" 
          </Link>
          or 
          <Link to={`/search/${param.charAt(0).toLowerCase() + param.slice(1)}`} className="not-found-decoration">
          "{`${param.charAt(0).toLowerCase() + param.slice(1)}`}" 
          </Link>
          or else from your fridge?
        </h2>
      </div>
  
    </>
  )
  return (
    <>
      <div>  
        {data.map((recipe, idx) => {
          return(
            <div className="card-result">
              <h1 className="tanda-panah-results"> <FaChevronRight/> </h1>
              <Link to={`/${recipe.type.replace(/ /g,'')}/${recipe.id}`} key={idx} className="link-stuff">
                <div className="container-result" key={recipe.id} >
                  <div className="dish-type">Type of dish: {recipe.type.charAt(0).toUpperCase() + recipe.type.slice(1)}</div>
                  <div className="name-of-dish">{recipe.dish_name}</div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ResultsMap;
