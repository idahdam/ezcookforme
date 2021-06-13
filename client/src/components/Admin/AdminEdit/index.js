/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './index.css'
import { adminService } from '../../../services/adminService';

const { REACT_APP_PRESET_NAME, REACT_APP_CLOUD_URL } = process.env;
const url =  REACT_APP_CLOUD_URL;
const preset = REACT_APP_PRESET_NAME;

const AdminEdit = ({data, typeOfDish, id}) => {  
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // stateForStuff
  const [dishName, setDishName] = useState(data.data[0].dish_name);
  const [description, setDescription] = useState(data.data[0].description);
  const [difficulty, setDifficulty] = useState(data.data[0].difficulty);
  const [rating, setRating] = useState(data.data[0].rating);
  const [tai, setTai] = useState(data.data[0].tai);
  const [instructions, setInstructions] = useState(data.data[0].instructions);

  let history = useHistory();

  useEffect(() => {
    let setStuff = true;
    if (!selectedFile) {
        setPreview(undefined)
        return
    }


    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
      return () => {
        URL.revokeObjectURL(objectUrl) 
        setStuff = false;
      }
  }, [selectedFile, typeOfDish, data.data, dishName])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
      setImage(e.target.files[0]);
      console.log(e.target.files[0])
  }
  
  const handleCancel = () => {
    history.push('/admin')
  }


  const handleEdit = () => {
    Swal.fire({
      title: `About to edit the item. Are you sure?`,
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
      if(image === null){
        const res = await adminService.editRecipeOnTableAndId(typeOfDish, id, {
          dish_name : dishName,
          photo: data.data[0].photo,
          description: description,
          tai: tai,
          instructions: instructions,
          difficulty: difficulty,
          rating: rating
        }).then(
          Swal.fire('Data modified.')
        )
        console.log(res);
      }
      else{
        const photoUpload = await axios.post(url, formData);
        const imageUrl = await photoUpload.data.secure_url;
        const res = await adminService.editRecipeOnTableAndId(typeOfDish, id, {
          dish_name : dishName,
          photo: imageUrl,
          description: description,
          tai: tai,
          instructions: instructions,
          difficulty: difficulty,
          rating: rating
        }).then(
          Swal.fire('Data modified.')
        );
      }

    }
    catch(error){
      Swal.fire('error')
      console.error(error.response.data);
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
              defaultValue={data.data[0].dish_name}
            />
            <br />
            <label htmlFor="lname" className="label-class">Description:</label><br />
            <input 
              type="text" 
              id="description" 
              className="input-row font-for-inputs" 
              defaultValue={data.data[0].description}
              onChange={(e) => setDescription(e.target.value)}
              />
            <br />
            <label htmlFor="lname" className="label-class">Difficulty:</label><br />
            <div className="row-form-diff-rating">
              <div className="column-form-diff-raiting">
                <select name="difficulty" id="difficulty" 
                  className="input-row-diff font-for-inputs" 
                  onChange={(e) => setDifficulty(e.target.value)}
                  defaultValue={data.data[0].difficulty}
                  required
                > 
                  <option value="easy"></option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <span className="choices">Easy/Medium/Hard </span><br/>
              </div>
              <div className="column-form-diff-raiting">
                <label htmlFor="rating" className="label-class">Rating:</label><br />
                <input 
                  type="text" 
                  id="rating" 
                  defaultValue={data.data[0].rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="input-row-rating font-for-inputs"/>
                  <span className="choices">out of 5 </span><br/>
              </div>
            </div>
            <br />
            <label htmlFor="lname" className="label-class">Tools and Ingredients:</label><br />
            <textarea 
              type="text" 
              id="tai" 
              className="input-row-long font-for-inputs" 
              defaultValue={data.data[0].tai}
              onChange={(e) => setTai(e.target.value)}/>
          </div>
          <div className="column-form">
            <label htmlFor="instructions" className="label-class">Instructions:</label> <br />
            <textarea 
              ype="text" 
              id="instructions" 
              className="input-row-long font-for-inputs" 
              defaultValue={data.data[0].instructions}
              onChange={(e) => setInstructions(e.target.value)}/><br />
            <label htmlFor="photo" className="label-class">Photo:</label><br />
            <input 
              type="file" 
              id="photo" 
              name="fname" 
              className="input-row font-for-inputs"
              onChange={onSelectFile}
            />
            <p className="label-class">Current Photo:</p>
            <img src={data.data[0].photo} alt="ur mother" className="image-preview"/>
            {selectedFile &&  
            <>
            <p className="label-class">Preview of New Photo:</p>
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
              value="edit" 
              className="input-row font-for-cancel-submit" 
              onClick={handleEdit}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEdit;
