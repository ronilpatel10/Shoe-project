import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddShoeForm() {
  const navigate = useNavigate();

  const [shoeData, setShoeData] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setShoeData((prevData) => ({
        ...prevData,
        image: event.target.result,
      }));
    };

    reader.readAsDataURL(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual API endpoint
    const API_URL = 'http://localhost:3000/shoes';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shoeData),
    };

    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then(() => {
        navigate('/'); // Redirect to the homepage or wherever you want
      })
      .catch((error) => {
        console.error('Error adding shoe:', error);
      });
  };

  return (
    <div className="add-shoe-form">
      <h2>Add a New Shoe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Shoe Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={shoeData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={shoeData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
}

export default AddShoeForm;
