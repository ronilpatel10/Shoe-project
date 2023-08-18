import React, { useState, useEffect, useContext } from 'react';
import "./NewShoeForm.css";
import Links from './Links';
import SignUp from '../SignUp';
import { UserContext } from "../UserContext";  // Adjust the path based on your folder structure


function AddShoeForm() {
  const { signedUpUser } = useContext(UserContext);

  // Initially, try to retrieve shoes from localStorage
  const initialShoes = JSON.parse(localStorage.getItem('shoes')) || [];

  // State for all added shoes
  const [shoes, setShoes] = useState(initialShoes);

  // State for the current shoe being added
  const [currentShoe, setCurrentShoe] = useState({
    name: '',
    price: '',
    image: '',
    comments: [],
  });

  // State for current comment for each shoe
  const [currentComments, setCurrentComments] = useState(Array(initialShoes.length).fill(''));

  // Other states
  const [useImageURL, setUseImageURL] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentShoe(prevShoe => ({
      ...prevShoe,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (useImageURL) {
      setCurrentShoe(prevShoe => ({
        ...prevShoe,
        image: e.target.value,
      }));
    } else {
      const imageFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setCurrentShoe(prevShoe => ({
          ...prevShoe,
          image: event.target.result,
        }));
      };

      reader.readAsDataURL(imageFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = 'http://localhost:3000/NewShoeForm';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentShoe),
    };

    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then(() => {
        setShoes([...shoes, currentShoe]);
        setCurrentShoe({ name: '', price: '', image: '', comments: [] });

        // Add an empty string to currentComments for the new shoe
        setCurrentComments(prevComments => [...prevComments, '']);
      })
      .catch((error) => {
        console.error('Error adding shoe:', error);
      });
  };

  const handleRemove = (indexToRemove) => {
    setShoes(shoes.filter((_, index) => index !== indexToRemove));

    // Remove the comment for this shoe
    setCurrentComments(prevComments => prevComments.filter((_, index) => index !== indexToRemove));
  };

  const handleCommentDelete = (shoeIndex, commentIndex) => {
    const newShoes = [...shoes];
    newShoes[shoeIndex].comments.splice(commentIndex, 1);
    setShoes(newShoes);
  };
  const handleCommentSubmit = (index) => {
    const newShoes = [...shoes];
    const commentWithUser = `${signedUpUser}: ${currentComments[index]}`; 
    newShoes[index].comments.push(currentComments[index]);
    setShoes(newShoes);


    // Reset the comment for this shoe
    const newComments = [...currentComments];
    newComments[index] = '';
    setCurrentComments(newComments);
  };

  useEffect(() => {
    localStorage.setItem('shoes', JSON.stringify(shoes));
  }, [shoes]);

  return (
    <div className="add-shoe-form">
      <Links/>  {signedUpUser && <div>Welcome, {signedUpUser}!</div>} 
      <h1>ShoeScope🔥</h1>
      <h3>Show off your custom built shoes!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Shoe Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={currentShoe.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={currentShoe.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image:</label>
        {useImageURL ? (
          <input
            type="text"
            id="image-url"
            placeholder="Enter Image URL"
            onChange={handleImageChange}
          />
        ) : (
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        )}
        <button onClick={() => setUseImageURL(!useImageURL)}>
          {useImageURL ? 'Upload File' : 'Use Image URL'}
        </button>

        <button type="submit">Add Shoe</button>
      </form>

      <div className="shoes-list">
        {shoes.map((shoe, index) => (
          <div key={index} className="preview-card">
            <img src={shoe.image} alt="Shoe Preview" />
            <h4>{shoe.name}</h4>  
            <p>{shoe.price}</p>
            <button onClick={() => handleRemove(index)}>Remove ❌</button>
            
            <div className="comments">
  <strong>Comments</strong>
  {shoe.comments.map((comment, cIndex) => (
    <div key={cIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>{comment}</p>
      <button onClick={() => handleCommentDelete(index, cIndex)}>Delete</button>
    </div>
  ))}
  <input 
    type="text"
    value={currentComments[index]}
    onChange={e => {
      const newComments = [...currentComments];
      newComments[index] = e.target.value;
      setCurrentComments(newComments);
    }}
    placeholder="Type a comment"
  />
  <button onClick={() => handleCommentSubmit(index)}>Add Comment</button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddShoeForm;
