EmailForm = document.getElementById("email-form");
EmailInput = document.querySelector("#email-form input");
InputBlock = document.querySelector(".input-block");

function handleSubmit(e) {
  e.preventDefault();
  let emailAddress = EmailInput.value;

  if (emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Email added to the list!");
    InputBlock.classList.remove("error");
    EmailInput.value = "";
  } else {
    InputBlock.classList.add("error");
  }
}
EmailForm.addEventListener("submit", handleSubmit);
