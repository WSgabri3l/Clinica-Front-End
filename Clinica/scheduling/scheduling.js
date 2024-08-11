const zipCodeField = document.querySelector("#zipcode");
const streetField = document.querySelector("#street");
const districtField = document.querySelector("#district");
const moreField = document.querySelector("#more");

const dateField = document.querySelector("#date");

const phoneNumberField = document.querySelector("#phonenumber");

zipCodeField.addEventListener("keypress", (event) =>{

    if (event.key == "Enter"){

        var url = "https://viacep.com.br/ws/" + zipCodeField.value + "/json/"

        var request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();

        let address = JSON.parse(request.response);
        streetField.value = address.logradouro;
        districtField.value = address.bairro;
        moreField.value = address.localidade;
    }
});

dateField.addEventListener("change", function(){

    var now = new Date();
    var choice = new Date(this.value);

    if (choice < now){

        this.value = ""
    }
});

phoneNumberField.addEventListener("input", (event) =>{

    
    let lenghtPhone = phoneNumberField.value.length;
    let limit = 10;
    limit = limit - lenghtPhone;

    console.log(phoneNumberField.value);
    if (limit == 0){

        phoneNumberField.value = phoneNumberField.value.slice(0, -1);
        console.log(phoneNumberField.value.slice(0, -1))
    }
});