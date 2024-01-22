//Select all input fields in the form
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var rating = document.getElementById("rating");
var message = document.getElementById("message");

//Select the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

//Listen for a submit event on the feedback form and make a POST request to the backend
document
  .getElementById("feedback-form")
  .addEventListener("submit", function () {
    //Get the current values of the input field and make an object template
    const dataToSend = {
      fullname: fullname.value,
      email: email.value,
      rating: rating.value,
      message: message.value,
    };

    fetch("https://feedback-form-nu.vercel.app/api/store-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Data saved successfully") {
          document.getElementById("feedback-form").reset();
          modal.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error storing data:", error);
      });
  });

//Close the modal on close button click
span.onclick = function () {
  modal.style.display = "none";
  window.location.href = "feedback.html";
};

//Close the modal when any paer of the window is clicked while the modal is open
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "feedback.html";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
  });
  AOS.refresh();
});
