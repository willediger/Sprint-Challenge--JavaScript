// 1. Copy and paste your prototype in here and refactor into class syntax.
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attr) {
    super(attr);
  }
  checkIfCube() {
    return this.length === this.width && this.width === this.height;
  }
  volume() {
    if (this.checkIfCube()) {
      return this.length ** 3;
    } else {
      return 'This cuboid is not a cube.'
    }
  }
  surfaceArea() {
    if (this.checkIfCube()) {
      return 6 * this.length ** 2;
    } else {
      return 'This cuboid is not a cube.'
    }
  }
}

//testing two cubes. one is not actually a cube, and so it should not work to use the formulas of a cube to calculate surface area and volume
const cube = new CubeMaker({length: 2, width: 2, height: 2});
const notACube = new CubeMaker({length: 4, width: 2, height: 2});

console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

console.log(notACube.volume()); // 'This cuboid is not a cube.'
console.log(notACube.surfaceArea()); // 'This cuboid is not a cube.'