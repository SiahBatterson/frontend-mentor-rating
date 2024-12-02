submit_button = document.getElementById("Submission");
var current_rating = 0;

const allButtons = document.querySelectorAll('rating-button')
allButtons.forEach((button) => {
  button.addEventListener('click', function(ev) { 
    console.log("rating pressed");
  })
})

submit_button.addEventListener("click", myFunction);

function myFunction() {
  console.log("triggered");
}

\
