/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import './index.css'
import { adminService } from '../../../services/adminService';

const { REACT_APP_PRESET_NAME, REACT_APP_CLOUD_URL } = process.env;
const url =  REACT_APP_CLOUD_URL;
const preset = REACT_APP_PRESET_NAME;

const AdminForm = () => {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const history = useHistory();

  // stateForRecipe
  const [tableName, setTableName] = useState();
  const [dishName, setDishName] = useState();
  const [description, setDescription] = useState();
  const [difficulty, setDifficulty] = useState();
  const [rating, setRating] = useState();
  const [tai, setTai] = useState();
  const [instructions, setInstructions] = useState();

  // stateForContributor
  const [submitter, setSubmitter] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
      setImage(e.target.files[0]);
      // console.log(e.target.files[0])
  }
  
  const handleCancel = () => {
    history.push('/admin')
  }

  const handleAdd = () => {
    Swal.fire({
      title: `About to add a new item. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      showCancelButton: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        onSubmit();
      } else if (result.isDenied) {
        Swal.fire('Operation canceled.', '', 'info')
      }
    })
  }

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      const photoUpload = await axios.post(url, formData);
      const imageUrl = await photoUpload.data.secure_url;
      const addRecipe = adminService.addRecipe({
        table_name: tableName,
        dish_name : dishName,
        photo: imageUrl,
        description: description,
        tai: tai,
        instructions: instructions,
        difficulty: difficulty,
        rating: rating
      });
      const addContributor = adminService.addContributor({
        name: submitter,
        email: email,
        no_hp: number,
        dish_name: dishName,
        type: tableName
      })
      
      await axios.all(
        [addRecipe, addContributor]
      ).then(
        Swal.fire('Data Inserted.')
      );
    }
    catch(error){
      Swal.fire('Error.')
    }
  }

  return (
    <div className="border-form">
      <form>
        <div className="row-form">
          <div className="column-form">
            <label htmlFor="fname" className="label-class">Name of the dish:</label> <br />
            <input 
              type="text" 
              id="dish_name" 
              className="input-row font-for-inputs"
              onChange={(e) => setDishName(e.target.value)}
            />
            <br />
            <label htmlFor="lname" className="label-class">Description:</label><br />
            <input 
              type="text" 
              id="description" 
              className="input-row font-for-inputs" 
              onChange={(e) => setDescription(e.target.value)}
              />
            <br />
            <label htmlFor="lname" className="label-class">Difficulty:</label><br />
            <div className="row-form-diff-rating">
              <div className="column-form-diff-raiting">
                <select name="difficulty" id="difficulty" 
                  className="input-row-diff font-for-inputs" 
                  defaultValue="easy"
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                > 
                  <option value="easy"></option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <span className="choices">Easy/Medium/Hard </span><br/>
                <label htmlFor="lname" className="label-class">Course:</label><br />
                <select 
                  name="type"
                  id="type"
                  className="input-row-diff font-for-inputs"
                  defaultValue="appetizer"
                  onChange={(e) => setTableName(e.target.value)}
                  required
                > 
                  <option value="appetizer"></option>
                  <option value="appetizer">Appetizer</option>
                  <option value="maincourse">Main Course</option>
                  <option value="dessert">Dessert</option>
                </select>
                <span className="choices">Appetizer/Main Course/Dessert </span><br/>
                
              </div>
              <div className="column-form-diff-raiting">
                <label htmlFor="rating" className="label-class">Rating:</label><br />
                <input 
                  type="text" 
                  id="rating" 
                  onChange={(e) => setRating(e.target.value)}
                  className="input-row-rating font-for-inputs"/>
                <span className="choices">out of 5 </span><br/>
              </div>
            </div>
            <br />
            <label htmlFor="lname" className="label-class">Tools and Ingredients:</label><br />
            <textarea type="text" id="tai" className="input-row-long font-for-inputs" onChange={(e) => setTai(e.target.value)}/><br />
            <label htmlFor="lname" className="label-class">Submitter:</label><br />
            <input type="text" id="submitter" className="input-row font-for-inputs" onChange={(e) => setSubmitter(e.target.value)}/><br />
            <label htmlFor="lname" className="label-class">Email:</label><br />
            <input type="email" id="email" className="input-row font-for-inputs" onChange={(e) => setEmail(e.target.value)}/><br />
            <label htmlFor="lname" className="label-class">Number:</label><br />
            <input type="number" id="number" className="input-row font-for-inputs" onChange={(e) => setNumber(e.target.value)}/><br />
          </div>
          <div className="column-form">
            <label htmlFor="instructions" className="label-class">Instructions:</label> <br />
            <textarea type="text" id="instructions" className="input-row-long font-for-inputs" onChange={(e) => setInstructions(e.target.value)}/><br />
            <label htmlFor="photo" className="label-class">Photo:</label><br />
            <input 
              type="file" 
              id="photo" 
              name="fname" 
              className="input-row font-for-inputs"
              onChange={onSelectFile}
            />
            {selectedFile &&  
            <>
            <p className="label-class">Preview:</p>
            <img src={preview} alt="ur mother" className="image-preview"/> 
            </>
            }
            <br />
          </div>
        </div>
      </form>
      <div>
        <div className="row-form">
          <div className="column-form">
            <br/>
            <input type="button" 
            value="cancel" 
            className="input-row font-for-cancel-submit" 
            onClick={() => handleCancel()}/>
          </div>
          <div className="column-form">
            <br/>
            <input 
              type="submit" 
              value="submit" 
              className="input-row font-for-cancel-submit" 
              onClick={handleAdd}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminForm;
