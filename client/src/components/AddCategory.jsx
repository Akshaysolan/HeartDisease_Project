import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const [category, setCategory] = useState('');  

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/add_category', { category })
      .then(result => {
        console.log(result.data); 
        if (result.data.Status) {
          navigate('/dashboard/category');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => {
        console.error(err);
        alert('An error occurred while adding the category.');
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className='p-3 rounded w-25 border'>
          <h2>Add Category</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="category"><strong>Category: </strong></label>
              <input
                type="text"
                name="category"
                autoComplete='off'
                placeholder='Enter category'
                className='form-control rounded-0'
                onChange={(e) => setCategory(e.target.value)}
                value={category}  
              />
            </div>
            <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
