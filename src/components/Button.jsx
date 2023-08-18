const Button = ({ onClickHandler, value, title }) => {
  return (
    <button 
    onClick={onClickHandler} 
    value={value} 
    className="btns" 
    style={{ transition: 'all 0.3s ease' }}
>
    {title}
</button>

  );
};

export default Button;
