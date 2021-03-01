import { addClass, removeClass } from "./utils-class";

let data = {
  "complete-name": "",
  "email-address": "",
  address: "",
  "phone-number": "",
  courier: "",
  payment: "",
};

const options = document.querySelectorAll("#shipping-detail button[data-name]");
for (let index = 0; index < options.length; index++) {
  const option = options[index];
  option.addEventListener("click", function () {
    const value = this.attributes["data-value"].value;
    const name = this.attributes["data-name"].value;

    data[name] = value;
    check();
  });
}

const inputs = document.querySelectorAll("#shipping-detail input[data-input]");
for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];
  input.addEventListener("change", function (event) {
    data[event.target.id] = event.target.value;

    check();
  });
}

function check() {
  console.log(data);
  const find = Object.values(data).filter((item) => item === "");
  if (find.length === 0) {
    document.querySelector(
      "#shipping-detail button[type='submit']"
    ).disabled = false;
  }
}
