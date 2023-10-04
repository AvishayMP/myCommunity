import { Button } from 'react-bootstrap';
import './Hero.css';
function Hero() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <Button>Hire me</Button>
      </div>
    </div>
  );
}

export default Hero;
