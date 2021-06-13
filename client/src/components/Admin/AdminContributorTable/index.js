import React, {useEffect, useState} from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { adminService } from '../../../services/adminService'
import './index.css'


const AdminContributorTable = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const handleDelete = (id) => {
    Swal.fire({
      title: `About to contributor item with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await adminService.deleteContributorById(id)
        .then(Swal.fire(`Delete ${id} Successful`)
        )
      } else if (result.isDenied) {
        Swal.fire('You canceled.', '', 'info')
      }
    })
  }
  useEffect(()=> {
    let toggle = true;
    const fetchData = async() => {
      const response = await adminService.getAllContributor();
      if(toggle){
        setData(response.data)
        setLoading(false)
      }
    } 
    fetchData()
    return() => toggle = false
  })

  return (
    <>
    {
      loading ? 
      <div>
        Loading...
      </div>
      : 
      <div className = "table-style contributors">
        <table className="table-admin">
          <tr className = "table-head">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dish Name</th>
            <th>Type</th>
            <th className = "contributors-edit"> </th>
          </tr>

          {data.map((data, idx) => {
            return(
              <tr className = "table-contents" key={idx}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.no_hp}</td>
                <td>{data.dish_name}</td>
                <td>{data.type}</td>
                <button 
                  type="button" 
                  className="button-contributors-table"
                  onClick={() => handleDelete(data.id)}
                  >
                      <AiOutlineDelete/>
                </button>
              </tr>
            )
          })}
        </table>
      </div>
  }
    </>
  )
}

export default AdminContributorTable
