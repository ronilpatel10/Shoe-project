import "./Category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="HighTops"
          title="HighTops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="MidTops"
          title="MidTops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="LowTops"
          title="LowTops"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
