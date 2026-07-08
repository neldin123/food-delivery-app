import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="foot-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="food-image" />
        <div className="food-item-info">
          <div className="food-item-name-reting">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="rating" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
