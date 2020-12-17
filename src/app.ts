import P5 from 'p5';
import {Moveable} from './Bodies/Body'
import './app.css'

const sketch = ( p5: P5 ) => {
  let moveables: Moveable[] = [];

  p5.setup = () => {
    p5.createCanvas(200, 200);
    moveables.push(new Moveable(p5, p5.createVector(p5.width/2, p5.height/2), {name: 'circle', radius: 10}, p5.createVector(1,.4), p5.createVector(0.001, 0.002)));
    moveables.push(new Moveable(p5, p5.createVector(p5.width/2, p5.height/2), {name: 'square', side: 20}, p5.createVector(1,0), p5.createVector(0.01, 0)));
  };

  p5.draw = () => {
    p5.background(0);
    for (let m of moveables) {
      m.update();
      m.draw();
    }
  };
};

let canvas = new P5(sketch);