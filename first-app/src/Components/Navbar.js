import "./Navbar.css";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navDiv">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="logo"
            width="35px"
          />
          <h3>GeekFoods</h3>
        </div>
        <div className="navlist">
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </div>

        <div>
         <Button/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
