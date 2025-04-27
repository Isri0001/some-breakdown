const submit = document.querySelector("#submit_btn");
submit.addEventListener("click",submitForm);

function submitForm(){

    // Kontaktoplysninger
document.querySelector("#sumName").textContent = document.querySelector("#name").value;
document.querySelector("#sumEmail").textContent = document.querySelector("#email").value;


}