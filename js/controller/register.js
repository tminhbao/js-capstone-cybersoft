// Register
document.querySelector("button[type=submit]").onclick = (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("input#emailInput").value;
  const nameInput = document.querySelector("input#nameInput").value;
  const passwordInput = document.querySelector("input#passwordInput").value;
  const passwordConfirmInput = document.querySelector(
    "input#passwordConfirmInput"
  ).value;
  const phoneInput = document.querySelector("input#phoneInput").value;
  const genderInput = document.querySelector("input[name=genderInput]").value;

  var isTrueSet = genderInput === "true";

  axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: {
      email: emailInput,
      password: passwordInput,
      name: nameInput,
      gender: isTrueSet,
      phone: phoneInput,
    },
  })
    .then((res) => {
      console.log(res.data);
      alert(res.data.message);
    })
    .catch((err) => console.log(err.message));
};
