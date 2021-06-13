import { Link } from 'react-router-dom'
// import makaroni from '../../../assets/Recipes/makaroni.png'
import './index.css'

const RecipesMap = ({ data, type }) => {

  return (
    <>
      <div className="row-recipes">  
        {data.map((recipe, idx) => {
          return(
            <Link to={`/${type.toLowerCase()}/${recipe.id}`} key={idx} >
              <div className="card column-recipes">
                <img src={recipe.photo} alt="sheesh" className="image-dish"/>
                <div className="dish-type">{recipe.type}</div>
                <div className="name-of-dish">{recipe.dish_name}</div>
                <div  className ="recipe-difficulty">{recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</div>
                <div className= "recipe-rating">{recipe.rating}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RecipesMap;
