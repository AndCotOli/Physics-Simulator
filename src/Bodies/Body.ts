import P5 from 'P5';

type shape =
	| {
			name: 'point';
	  }
	| {
			name: 'circle';
			radius: number;
	  }
	| {
			name: 'square';
			side: number;
	  }
	| {
			name: 'rectangle';
			width: number;
			height: number;
	  };

const constraints = {
  MAX_SPEED: 5
}

class Body {
	protected p5: P5;
	protected shape: shape;
	pos: P5.Vector;

	constructor(p5: P5, p: P5.Vector, s: shape) {
		this.p5 = p5;
		this.pos = p;
		this.shape = s;
	}

	draw() {
		switch (this.shape.name) {
			case 'point':
				this.p5.point(this.pos.x, this.pos.y);
				break;
			case 'circle':
				this.p5.circle(this.pos.x, this.pos.y, this.shape.radius);
				break;
			case 'square':
				this.p5.square(this.pos.x, this.pos.y, this.shape.side);
				break;
			case 'rectangle':
				this.p5.rect(
					this.pos.x,
					this.pos.y,
					this.shape.width,
					this.shape.height
				);
				break;
		}
	}
}

class Moveable extends Body {
	vel: P5.Vector;
	acc: P5.Vector;

	constructor(p5: P5, p: P5.Vector, s: shape, v: P5.Vector, a: P5.Vector) {
		super(p5, p, s);
		this.vel = v;
		this.acc = a;
	}

	update(): void {
    this.vel.add(this.acc);
    this.pos.add(this.vel)
    this.vel.limit(constraints.MAX_SPEED);
    
    this.checkBorders()
  }

  private checkBorders(): void {
    if (this.pos.x > this.p5.width) this.pos.x = 0;
    else if (this.pos.x < 0) this.pos.x = this.p5.width;

    if (this.pos.y > this.p5.height) this.pos.y = 0;
    else if (this.pos.y < 0) this.pos.y = this.p5.height;
  }
}

export { Body, Moveable };
