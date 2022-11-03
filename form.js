//email validation
const email = document.getElementById("email");
const message = document.getElementById("message");

const reg =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function emailvalidate(data) {
  if (reg.test(email.value) && email.value.split("@")[0].length <= 64) {
    console.log("hii");
    if (data) {
      return true;
    } else {
      message.innerHTML = "";
    }
  } else {
    if (data) {
      return false;
    } else {
      message.innerHTML = "Email Invalid";
      message.style.color = "red";
    }

    console.log("success");
  }
}
//password validation
const password = document.getElementById("reg_password");

const passwordmsg = document.getElementById("passwordmessage");

function passwordvalidate(data) {
  if (password.value.length >= 8 && password.value != "") {
    console.log("password");
    if (data) return true;
    else {
      passwordmsg.innerHTML = "";
    }
  } else {
    if (data) {
      return false;
    } else {
      passwordmsg.innerHTML = "password should contain atleast 8 characters";
      passwordmsg.style.color = "red";
      console.log("failed");
    }
  }
}
function regpasswordvalidate(data) {
  if (password.value === confirmpassword.value) {
    if (data) return true;
    else {
      confirmmsg.style.color = "green";
      confirmmsg.innerHTML = "Password matched";
    }
  } else {
    if (data) {
      return false;
    } else {
      confirmmsg.style.color = "red";
      confirmmsg.innerHTML = "password  not matched";
    }
  }
}
//confirm password validation
const confirmpassword = document.getElementById("confirm_password");
const confirmmsg = document.getElementById("confirmpassword_message");
function confirmpasswordvalidate(data) {
  if (confirmpassword.value === password.value) {
    if (data) return true;
    else {
      confirmmsg.style.color = "green";
      confirmmsg.innerHTML = "Password matched";
    }
  } else {
    if (data) {
      return false;
    } else {
      confirmmsg.style.color = "red";
      confirmmsg.innerHTML = "Passwords not matched";
    }
  }
}

//firstname validation
const firstname = document.getElementById("firstname");
const namemsg = document.getElementById("firstnamemsg");
const namereg = /^[A-Za-z\s]+$/;
function firstnamevalidate(data) {
  if (namereg.test(firstname.value)) {
    if (data) {
      return true;
    } else {
      namemsg.innerHTML = "";
    }
    console.log("firstname");
  } else {
    if (data) {
      return false;
    } else {
      namemsg.style.color = "red";
      namemsg.innerHTML = "Invalid Firstname";
    }
  }
}
//lastname validation
const lastname = document.getElementById("lastname");
const lastnamemsg = document.getElementById("lastnamemsg");
const lastnamereg = /^[A-Za-z\s]+$/;
function lastnamevalidate(data) {
  if (lastnamereg.test(lastname.value)) {
    if (data) {
      return true;
    } else {
      lastnamemsg.innerHTML = "";
    }
    console.log("firstname");
  } else {
    if (data) {
      return false;
    } else {
      lastnamemsg.style.color = "red";
      lastnamemsg.innerHTML = "Invalid Lastname";
    }
  }
}
//DOB validation
const dob = document.getElementById("dateofbirth");

const dobmesaage = document.getElementById("dob");

function validatedob(data) {
  const currentdate = new Date();
  const date = new Date(dob.value);

  if (currentdate.getFullYear() - date.getFullYear() > 18) {
    if (currentdate.getMonth() >= date.getMonth()) {
      if (data) {
        return true;
      } else {
        dobmesaage.innerHTML = "";
      }
    } else {
      if (data) {
        return false;
      } else {
        dobmesaage.innerHTML = "Eligibility 18 years only";
        dobmesaage.style.color = "red";
      }
    }
  } else {
    if (data) {
      return false;
    } else {
      dobmesaage.innerHTML = "Eligibility 18 years only";
      dobmesaage.style.color = "red";
    }
  }
}

//dob
//function validateDob(birthday) {
//let diff = moment().diff(new Date(birthday));
//if (diff >= 0) {
// let age = moment().diff(birthday, "years");
//if (age < 18) {
// return "Age is less than 18";
// }
// return "success";
//} else {
// return "birthday is less than today";
// }
//}

//password visibilty
const regpassword = document.getElementById("reg_password");
const togglepassword = document.getElementById("togglepassword");
togglepassword.addEventListener("click", function () {
  const type =
    regpassword.getAttribute("type") === "password" ? "text" : "password";
  regpassword.setAttribute("type", type);
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
// confirm password visibility
const confirmpswd = document.getElementById("confirm_password");
const toggleconfirmpassword = document.getElementById("togglepasswords");
toggleconfirmpassword.addEventListener("click", function () {
  const type =
    confirmpswd.getAttribute("type") === "password" ? "text" : "password";
  confirmpswd.setAttribute("type", type);
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

//button validation
const btn = document.getElementById("button");

function validate() {
  if (
    emailvalidate(true) &&
    passwordvalidate(true) &&
    confirmpasswordvalidate(true) &&
    firstnamevalidate(true) &&
    lastnamevalidate(true) &&
    validatedob(true)
  ) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#420075";
  } else {
    btn.setAttribute("disabled", true);
  }
}
// mobile number validate
//const telInput = document.getElementById("phonenumber");
//const errorMsg = document.getElementById("error-msg");
//const validMsg = document.getElementById("valid-msg");
//function mobilenovalidate() {
//if (telInput.value) {
// if (telInput.intlTelInput("isValidNumber")) {
// validMsg.classList.remove("hide");
// console.log("hii");
// } else {
// telInput.classList.add("error");
//  errorMsg.classList.remove("hide");
//  console.log("hhh");
// }
// }
//}
console.log(moment());
