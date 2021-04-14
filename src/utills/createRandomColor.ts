const createNumber = () => Math.floor(Math.random() * 255);

const createRandomColor = () => {
  return `rgb(${createNumber()}, ${createNumber()}, ${createNumber()})`;
};

export default createRandomColor;
