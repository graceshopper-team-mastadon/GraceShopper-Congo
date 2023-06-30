const React = require("react");
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GenVProducts from "./GenerationView/Gen5";
import New from "./BrowseProducts/New";

const Home = () => {
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <section className="main">
      <div className="homepage">


        <div className="content">
          <div className="herotext">
            <div className="subheader">
              Begin Your Adventure. Pursue Your Passion.
            </div>
            <div className="header">
              <h1> A Trusted Pokemon <span>Sanctuary</span>  </h1>
            </div>
            <div className="subheader">
              For All Your Pokemon Needs and More!
            </div>
            <button type="button" class="homebutton" onClick={handleHome}>
              Let's Go!
            </button>
          </div>
        </div>


        <div className="images">
          <div className="hero-img">
            <img src='/pokemon/squirtle.png' className="squirtle"></img>
            <div className="squirtle-square">
            </div>
          </div>
          <div className="hero-img">
            <img src='/pokemon/bulbasaur.png' className="bulbasaur"></img>
            <div className="bulbasaur-square">
            </div>
          </div>
          <div className="hero-img">
            <img src='/pokemon/charmander.png' className="charmander"></img>
            <div className="charmander-square">
            </div>
          </div>
        </div>
      </div>

      <div className="featured-items">
        <div className="featured-header">
          <h1> Our Newest Additions </h1>
        </div>
        <div className="featured-list">
          <New />
        </div>
      </div>
    </section>
  );
};
export default Home;
