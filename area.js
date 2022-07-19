const calculateRectangleArea = function(length, width) {
  let area = 0;

  if (length < 0 || width < 0) {
    area = undefined;
  } else area = length * width;

  return area;
};
console.log(calculateRectangleArea(2, 5));

const calculateTriangleArea = function(base, height) {
  let area = 0;

  if (base < 0 || height < 0) {
    area = undefined;
  } else area = (base * height) / 2;
  return area;
};

console.log(calculateTriangleArea(-1, 4));

const calculateCircleArea = function(radius) {
  let area = 0;

  if (radius < 0) {
    area = undefined;
  } else area = Math.pow(radius, 2) * Math.PI;
  return area;
};

console.log(calculateCircleArea(-10));
console.log("hello ");
console.log('sudbury')
