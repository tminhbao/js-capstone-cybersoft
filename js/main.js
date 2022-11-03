// Require user fill all the form
const inputElements = document.querySelectorAll("input");
inputElements.forEach((item) => {
  item.onchange = () => {
    console.log(item.value);
  };
});
