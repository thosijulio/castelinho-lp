const getRandomColor = () => {
  const colors = ["#9DD473", "#74c8ec", "#f7e54b", "#f5804b", "#e0c4f8"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default getRandomColor;
