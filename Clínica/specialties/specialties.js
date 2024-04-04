const acquiredButton = document.querySelector("#acquired-button");
const messageField = document.querySelector("#acquired-button-content");

const acquiredImg = document.querySelector("#acquired-button-content-img");

acquiredButton.addEventListener("click", (event) =>{

    messageField.style.display = "block";

});

acquiredImg.addEventListener("click", (event) =>{

    messageField.style.display = "none";
    
});

