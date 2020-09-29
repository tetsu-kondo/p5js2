// Basic Animation OOP
// Tetsu Kondo
// 2020.7.23

let sunny;
let sunny2;

	
function setup() {
  createCanvas(400,400);
 	sunny = new Car(10,50);
	sunny2 = new Car(1,5);
}


function draw() {

  background(255,0,255);
  
  sunny.move();
  sunny.display();


  sunny2.move();
  sunny2.display();


}



class Car{

	constructor(sspeed,rr){
		this.a = 1;
		this.speed=sspeed;
		this.r = rr;
	}

	move(){
		this.a = this.a + this.speed;

		if(this.a>width){
			this.a = 0;
		}
	}

	display(){
		fill(0);
		rect(this.a,height/2,this.r,this.r);
	}

}
