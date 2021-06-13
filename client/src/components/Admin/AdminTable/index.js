import React from 'react'
import './index.css'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { appetizerService } from '../../../services/appetizerService';
import Swal from 'sweetalert2';

const AdminTable = ({ data, type }) => {

  const handleDelete = (id) => {
    Swal.fire({
      title: `About to delete ${type} item with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await appetizerService.deleteAppetizerById(id)
        .then(
          Swal.fire(`Successfully deleted ${type} with id = ${id}.`)
        )
      } else if (result.isDenied) {
        Swal.fire('You canceled.', '', 'info')
      }
    })
  }

  if(data.length === 0) return ( <>Empty Table.</>)
  return (
    <>
      <div className = "table-style courses">
        <table className="table-admin">
          <tr className = "table-head">
            <th>ID</th>
            <th>Dish Name</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Tools and Ingredients</th>
            <th>Instructions</th>
            <th>Difficulty</th>
            <th>Rating</th>
            <th>Name</th>
            <th>Email</th>
            <th className = "edit"> </th>
          </tr>

          {data.map((data, idx) => {
            return(
              <tr className = "table-contents" key={idx}>
                <td>{data.id}</td>
                <td>{data.dish_name}</td>
                {/* <td>{data.photo}</td> */}
                <td>
                  <Link to={`/${data.type}/${data.id}`}>
                    <img src={data.photo} alt ='foto:)' className='display-pic'/> 
                  </Link>
                </td>
                <td>{data.description.substring(0,60)}...</td>
                <td>{data.tai.substring(0,60)}...</td>
                <td>{data.instructions.substring(0,60)}...</td>
                <td>{data.difficulty}</td>
                <td>{data.rating}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                    <Link to={`/admin/${type}/${data.id}`}>
                        <button type="button" className="button-admin-table">
                              <AiOutlineEdit size={20}/>
                        </button>
                    </Link>
                    <button 
                      type="button" 
                      className="button-admin-table"
                      onClick={() => handleDelete(data.id)}
                      >
                          <AiOutlineDelete size={20}/>
                    </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default AdminTable;