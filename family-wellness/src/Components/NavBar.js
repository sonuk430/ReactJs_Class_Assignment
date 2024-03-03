import  "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <ul className = "nav">
          <li className = "active">HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
