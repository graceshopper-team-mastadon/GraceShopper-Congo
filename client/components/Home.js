const React = require("react");
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <>
      <div className="bg-image"></div>
      <div className="bg-image-cover"></div>
      <div className="bg-text">
        <div className="bg-header">Welcome to PokeHome Sanctuary</div>
        <div className="bg-text2">
          {/* <p>
            We've been led to believe that Pokemon are monsters being bred for
            battle.
          </p> */}
          <p>For centuries, Pokemon have been bred for battle.</p>
          <p> But where do they turn to when they've been abandoned? </p>
          <p> It is up to you to decide. </p>
          <Button variant="primary" onClick={handleHome}>
            I am choosing to be a responsible owner!
          </Button>
        </div>
      </div>
    </>
  );
};
export default Home;
