const email = document
  .getElementById("text")
  .addEventListener("keyup", function (e) {
    const formField = document.querySelector(".field");
    const regEmail =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regEmail.test(e.target.value)) {
      formField.classList.add("valid");
    } else {
      formField.classList.remove("valid");
    }
  });
