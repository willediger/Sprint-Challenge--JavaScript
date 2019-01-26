/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
}

//testing CuboidMaker
const cuboid1 = new CuboidMaker({length: 1, width: 1, height: 1});
console.log(JSON.stringify(cuboid1));


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}

//testing CuboidMaker.volume();
console.log(cuboid1.volume());


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

//testing CuboidMaker.volume();
console.log(cuboid1.surfaceArea());


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// adding CubeMaker in prototypes fashion:

function CubeMaker(attributes) {
  CuboidMaker.call(this, attributes);
}

CubeMaker.prototype = Object.create(CuboidMaker.prototype);

CuboidMaker.prototype.checkIfCube = function() {
  return this.length === this.width && this.width === this.height;
}
CuboidMaker.prototype.volume = function() {
  if (this.checkIfCube()) {
    return this.length ** 3;
  } else {
    return 'This cuboid is not a cube.'
  }
}
CuboidMaker.prototype.surfaceArea = function() {
  if (this.checkIfCube()) {
    return 6 * this.length ** 2;
  } else {
    return 'This cuboid is not a cube.'
  }
}

const cube = new CubeMaker({length: 2, width: 2, height: 2});
const notACube = new CubeMaker({length: 4, width: 2, height: 2});

console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

console.log(notACube.volume());
console.log(notACube.surfaceArea());