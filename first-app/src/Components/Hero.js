import Button from "./Button";
import "./Hero.css";

function Hero(name) {
  return (
    <>
      <div className="heroWrapper">
        <div className="content">
          <h1>Let us find your</h1>
          <h1>Forever Food.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br /> Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="btnContener">
            <Button name="Search Now" />
            <Button name="Know more" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
