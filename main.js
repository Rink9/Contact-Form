function submitMessege(){
    let inputs = document.getElementsByClassName("form-field");
    let errorMessege = "";

    for(let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;
        if (!value){
            errorMessege = errorMessege + inputs[i].placeholder + " , ";
            //return;
        }

    } 

    if (!errorMessege){
         formSubmitted(); 
    }
    else {
     alert ("Missing : " + errorMessege); 
    }
      

} 

function formSubmitted(){

    let submitButton = document.getElementById("formSubmitted");
    submitButton.style.backgroundColor = "#34D399";

    submitButton.innerHTML = "Form Submitted";

    submitButton.disabled = "true";

    let body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "#D1FAE5";



    // let formCard = document.getElementsByClassName("card");
    // formCard[0].style.backgroundColor = "#D1FAE5";
}


