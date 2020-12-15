import P5 from 'p5';
import './app.css'

const sketch = ( p5: P5 ) => {
  p5.setup = () => {
    p5.createCanvas(200, 200);
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill(255);
    p5.rect(100,100,50,50);
  };
};

let c = new P5(sketch);