submit_button = document.getElementById("Submission");
ratings = document.getElementById("thank-box");
rating_box = document.getElementById("rating-box");
var sent_image = document.createElement("img");
sent_image.src = "/images/illustration-thank-you.svg";
sent_image.setAttribute("height", "auto");
sent_image.setAttribute("width", "auto");
sent_image.setAttribute("alt", "Flower");
var current_rating = 0;
var final_value = 0;
const allButtons = document.querySelectorAll(".rating-button");
allButtons.forEach((button)=>{
    button.addEventListener("click", function(ev) {
        allButtons.forEach((but)=>{
            but.classList.remove("active");
        });
        button.classList.add("active");
        current_rating = parseInt(ev.target.value);
        console.log(`user rated: ${current_rating}`);
    });
});
submit_button.addEventListener("click", myFunction);
function myFunction() {
    final_value = current_rating;
    localStorage.setItem("rating", final_value);
    console.log("should thank you now");
    switch_states();
}
function switch_states() {
    var paras = document.getElementsByClassName("rating-button");
    while(paras[0])paras[0].parentNode.removeChild(paras[0]);
    submit_button.remove();
    rating_showcase = document.createElement("p");
    rating_showcase.setAttribute("id", "rating-showcase");
    rating_showcase.textContent = `You selected ${final_value} out of 5`;
    rating_box.insertBefore(rating_showcase, rating_box.firstChild);
    rating_box.insertBefore(sent_image, rating_box.firstChild);
    document.getElementById("title").textContent = "Thank you!";
    document.getElementById("sub-title").textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesistate to get in touch!";
}

//# sourceMappingURL=index.672d4772.js.map
