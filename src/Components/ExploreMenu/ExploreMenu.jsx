import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore
        quis exercitationem quod adipisci, fugiat temporibus sed quibusdam vitae
        voluptate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt="menu-item" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
