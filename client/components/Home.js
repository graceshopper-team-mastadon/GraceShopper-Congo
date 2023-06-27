const React = require("react");
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/products");
  };
  // return (
  //   <>
  //     <div className="bg-image"></div>
  //     <div className="bg-text">
  //       <div className="bg-header">Welcome to PokeHome Sanctuary</div>
  //       <div className="bg-text2">
  //         <p>For centuries, Pokemon have been bred for battle.</p>
  //         <p> But where do they turn to when they've been abandoned? </p>
  //         <p> It is up to you to decide. </p>
  //         <button type="button" class="homebutton" onClick={handleHome}>
  //           I am choosing to be a responsible owner!
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <><section className="homepage">
      <section className="hero">
        <div className="herotext">
          <div className="subheader">
            For All Your Pokemon Needs and More!
          </div>
          <div className="header">
            <h1> A Trusted Pokemon Sanctuary </h1>
          </div>
          <button type="button" class="homebutton" onClick={handleHome}>
            Start here
          </button>
        </div>

        <div className="hero-img">
          <div className="color-box"></div>
          <img src='/pokemon/pokemon.png'></img>

        </div>
      </section>
    </section>
    </>
  );
};
export default Home;
